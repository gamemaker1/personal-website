import * as commands from './commands.js'

// execute the command if it is valid, otherwise print an error.
export const execute = (command) =>
  commands[command]?.() ?? `could not execute ${command}, type 'help' to see a list of valid commands`

export const handle = (event) => {
  // only process the command once the enter key has been pressed.
  if (event.keyCode != 13) {
    // if it is not an enter key, perform syntax highlighting.
    const executables = Object.keys(commands)

    // note that when the keypress event is fired, the input still does not have the last
    // element, so we add it manually to the current value of the input. check if the input
    // is non-empty and the prefix of a valid command.
    const value = event.target.value + String.fromCharCode(event.keyCode)
    const valid = !!value && executables.some(
      (x) => x.startsWith(value)
    )

    // if it is, highlight it blue, otherwise, highlight it red.
    document.querySelector('.latest > .prompt')
            .setAttribute('style', 'color: ' + (valid ? 'var(--blue)' : 'var(--red)'))

    // let the user continue typing.
    return
  }

  // otherwise, if enter was pressed, execute the command and get the html output
  if (!event.target.value) return
  const output = document.createElement('div')
  output.innerHTML = execute(event.target.value)
  output.style.textIndent = '0.5rem'

  // get references to the container and the current prompt. if they do not exist,
  // something is seriously wrong, so reload the page.
  const container = document.querySelector('.container')
  const prompt = document.querySelector('.latest')
  if (!container || !prompt) window.location.reload()

  // create a copy of the current prompt with the command intact. remove the class
  // that marks it the current, active command.
  const current = prompt.cloneNode(true)  
  current.classList.remove('latest')
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

// handle keyboard shortcuts for the page.
document.addEventListener('keydown', (event) => {
  const prompt = document.querySelector('.latest > input')
  const history = 
    [...document.querySelectorAll('.container > p:not(.latest) > input')]

  // ctrl+shift+l should clear all previous commands.
  if (event.ctrlKey && event.shiftKey && event.key == 'L')
    [...document.querySelectorAll('.container > *:not(.latest)')]
      .forEach((command) => command.remove())

  // the up and down arrows should move through the history of commands.
  if (event.key == 'ArrowUp' || event.key == 'ArrowDown') {
    // don't let these keys move the cursor around.
    event.preventDefault()

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

  // make sure the input is always focused.
  document.querySelector('.latest > input')?.focus()
})
// add an event listener to handle user input in the prompt.
document.querySelector('.latest > .prompt')
        .addEventListener('keypress', handle)

// allow filling the prompt with a command for the user.
window.prompt = (command) => {
  // fill in the command, and autofocus the prompt so they can hit enter.
  const prompt = document.querySelector('.latest > input')
  prompt.value = command; prompt.focus()

  // this has to be correct syntax, since its being auto-filled, so set the
  // syntax highlighting color to blue.
  prompt.setAttribute('style', 'color: var(--blue)')
}
