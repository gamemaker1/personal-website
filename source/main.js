import * as commands from './commands.js'
import { tokenize } from './tokens.js'

// execute the command if it is valid, otherwise print an error.
export const execute = (command) => {
  const [executable, ...args] = command.split(' ')
  return commands[executable]?.(...args) ?? `${executable} isn't a valid command!`
}

export const autocomplete = (event) => {
  // if the key pressed is tab, autocomplete the command if possible.
  if (event.key != 'Tab' || (event.key == 'Tab' && event.shiftKey)) return
  event.preventDefault()

  // if the prompt is empty and the user presses tab, accept the default value
  // of `help` and autofill it.
  const prompt = document.querySelector('.latest > input')
  if (!prompt.value) {
    window.prompt(prompt.placeholder); return
  }

  // otherwise, find a command that matches whatever the user has typed in and
  // autofill it.
  const executables = Object.keys(commands)
  const completion = executables.find(
    (x) => x.startsWith(prompt.value)
  )
  if (completion) window.prompt(completion)
}

export const highlight = (event) => {
  // if it is not a special key, perform syntax highlighting.
  const modifiers = ['Enter', 'Tab', 'Control', 'Meta', 'Alt']
  if (modifiers.includes(event.key)) return

  // get a list of all the valid commands.
  const executables = Object.keys(commands)

  // note that when the keydown event is fired, the input still does not have the last
  // element, so we add it manually to the current value of the input. check if the input
  // is non-empty and the prefix of a valid command.
  const value = event.target.value + (event.key.length > 1 ? '' : event.key)
  const executable = value.trim().split(' ')[0]
  const valid = !executable || (!!executable && executables.some(
    (x) => x.startsWith(executable)
  ))

  // if it is, highlight it blue, otherwise, highlight it red.
  const toRemove = valid ? 'invalid' : 'valid'
  const toAdd = valid ? 'valid' : 'invalid'
  const prompt = document.querySelector('.latest > .prompt')
  prompt.classList.remove(toRemove); prompt.classList.add(toAdd)

  // let the user continue typing.
  return
}

export const handle = (event) => {
  // only process the command once the enter key has been pressed.
  if (event.key != 'Enter') return

  // otherwise, if enter was pressed, execute the command and get the html output
  if (!event.target.value.trim()) return
  const output = document.createElement('div')
  output.innerHTML = execute(event.target.value)
  output.classList.add('output')

  // log the command as an analytics event.
  window.analytics.log('view', event.target.value)
  // set the page title to the current command.
  document.title = `web@vedant > ${event.target.value}`

  // get references to the container and the current prompt. if they do not exist,
  // something is seriously wrong, so reload the page.
  const container = document.querySelector('.container')
  const prompt = document.querySelector('.latest')
  if (!container || !prompt) window.location.reload()

  // create a copy of the current prompt with the command intact. remove the class
  // that marks it the current, active command.
  const current = prompt.cloneNode(true)
  current.classList.remove('latest')
  current.querySelector('input').setAttribute('disabled', true)
  current.querySelector('.ps').classList.remove('active')

  // add the command and its output to history.
  container.insertBefore(current, prompt)
  container.insertBefore(output, prompt)

  // clear out the command in the latest prompt and scroll to the bottom.
  prompt.querySelector('input').value = ''
  if (
    prompt.getBoundingClientRect().bottom > window.innerHeight ||
    prompt.getBoundingClientRect().top < 0
  ) prompt.scrollIntoView({ behavior: 'smooth' })
}

// add an event listener to do basic syntax highlighting and to
// handle user input in the prompt.
document.querySelector('.latest > .prompt')
        .addEventListener('keydown', highlight)
document.querySelector('.latest > .prompt')
        .addEventListener('keypress', handle)
document.querySelector('.latest > .prompt')
        .addEventListener('keydown', autocomplete)

// handle keyboard shortcuts for the page.
document.addEventListener('keydown', (event) => {
  const prompt = document.querySelector('.latest > input')
  const history =
    [...document.querySelectorAll('.container > p:not(.latest) > input')]

  // check what the currently focused element is.
  let focused = document.activeElement
  if (focused == document.body) focused = document.querySelector(':focus')

  // if the user is tabbing through elements on the site, let them. if their
  // focus is idle, then snap it to the prompt.
  if (
    focused?.type == 'textarea' || focused?.type == 'submit' ||
    focused?.tagName == 'A' || focused?.classList.contains('timeline')
  ) return; else prompt.focus()


  // ctrl+shift+l should clear all previous commands and scroll to the top.
  if (event.ctrlKey && event.shiftKey && event.key == 'L')
    [...document.querySelectorAll('.container > *:not(.latest)')]
      .forEach((command) => command.remove()),
    window.scroll({ behavior: 'smooth', top: -64 }),
    window.analytics.log('view', 'clear')

  // the up and down arrows should move through the history of commands.
  if (event.key == 'ArrowUp' || event.key == 'ArrowDown') {
    // log the event, and don't let these keys move the cursor around.
    window.analytics.log('view', 'history'); event.preventDefault()

    // instead, figure out the current position we are at in history.
    let i = parseInt(prompt.dataset.history)
    prompt.dataset.history = event.key == 'ArrowUp'
      ? ((isNaN(i) || i <= 0) ? history.length : i) - 1 // arrow up
      : (isNaN(i) || i >= history.length) ? 0 : i + 1 // arrow down

    // and then set the prompt to exactly the same command.
    const previous = history[prompt.dataset.history]
    if (previous) {
      prompt.value = previous.value

      // copy over the syntax highlighting too.
      prompt.setAttribute(
        'style',
        previous.getAttribute('style')
      )
    }
  }
})

// add event listeners on all elements that log view, focus and click events.
document.addEventListener('DOMContentLoaded', () => window.analytics.log('view', 'page'))
document.addEventListener('focusin', (event) => window.analytics.log('focus', event))
document.addEventListener('click', (event) => window.analytics.log('click', event))
document.querySelector('.container')
.addEventListener('click', (event) => window.analytics.log('click', event))

// get a selector for an element from an event, including information that
// will uniquely identify the element as much as possible.
const selector = (event) => {
  // get the element's tag. if somehow there is no tag, return
  // the id of the element, or just a '#'.
  const tag = event.target?.tagName?.toLowerCase()
  if (!tag) return `#${event.target.id ?? ''}`

  // if it is an anchor or an image, return the element with
  // its href or its alt text to identify it.
  if (tag == 'a') return `${tag}[href="${event.target.href.replace(window.location.origin, '')}"]`
  if (tag == 'img') return `${tag}[alt="${event.target.alt}"]`

  // if the element has an id, return that. otherwise, list
  // all its classes and append that to the tag.
  if (event.target.id) return `#${event.target.id}`
  if (event.target.classList.length > 0)
    return `${tag}.${[...event.target.classList].join('.')}`

  // if nothing else, just return the tag.
  return tag
}

// log analytics events to the console.
window.analytics = {
  log: (type, event) => {
    // we want to log the current timestamp, type of event
    // (view/click), and the element in question.
    const timestamp = new Date().toLocaleString()
    const target = typeof event == 'string' ? event : (
      selector(event)
    ); if (!target || target == '#') return

    // log it to the console. in the future, replace this with
    // code that makes a post request to a proper analytics
    // service to store the event.
    console.log(`> analytics event
      - time: ${timestamp}
      - type: ${type}
      - elem: ${target}`
    .replace(/     /g, ''))
  }
}

// allow filling the prompt with a command for the user.
window.prompt = (command) => {
  // fill in the command, and autofocus the prompt so they can hit enter.
  const prompt = document.querySelector('.latest > input')
  prompt.value = command; prompt.focus()

  // this has to be correct syntax, since its being auto-filled, so set the
  // syntax highlighting color to blue.
  prompt.classList.remove('invalid')
  prompt.classList.add('valid')
}

// fullscreen an image for the user.
window.fullscreen = (event) => {
  // create an overlay that covers the entire screen.
  const overlay = document.createElement('div')
  overlay.classList.add('fullscreen')

  // get the image and caption it with its `alt`.
  const caption = document.createElement('p')
  caption.innerHTML = event.target.alt
  const image = document.createElement('img')
  image.src = event.target.src; image.alt = event.target.alt

  // display the caption above the image, on top of the overlay.
  overlay.appendChild(caption); overlay.appendChild(image)
  document.body.appendChild(overlay)

  // if the user clicks anywhere on the overlay, dismiss it.
  overlay.addEventListener('click', () => {
    overlay.remove()
    overlay.removeEventListener('click', this)
  })

  // if the user presses the escape key, dismiss the overlay.
  document.addEventListener('keydown', (event) => {
    if (event.key == 'Escape') {
      overlay.remove()
      document.removeEventListener('keydown', this)
    }
  })
}

// call the tokenize function, and display the results near the target textarea.
// this allows us to have multiple tokenizers running at the same time.
window.tokenize = (event) => {
  const stats = tokenize(event.target.value)

  // format the output. each line is a category of stats, and following the
  // underlined heading are the categories and their counts, separated by |
  const output = Object.entries(stats).map(([name, group]) =>
      `<span class="statistic">${name}</span> `.padEnd(13, ' ')  + Object.entries(group)
        .filter(([_, value]) => value > 0)
        .map(([key, value]) => `<small>${value} ${key}</small>` )
        .join(' | ')
    ).join('<br />')

  // display the output and make only the first heading bold as a stylistic touch.
  const target = event.target.nextElementSibling
  target.innerHTML = output.replace('general', '<strong>statistics</strong>')
}
