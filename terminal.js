// each key is the command the user must type to run the function in the value.
const commands = {
  help: () => 'the following are valid commands: ' + Object.keys(commands).join(', '),
}

// execute the command if it is valid, otherwise print an error.
const execute = (command) =>
  commands[command]?.() ?? `could not execute ${command}, type 'help' to see a list of valid commands`

const handle = (event) => {
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
  const output = document.createElement('p')
  output.innerHTML = execute(event.target.value)

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

  // clear out the command in the latest prompt.
  prompt.querySelector('input').value = ''
}

// add an event listener to handle user input in the prompt.
document.querySelector('.latest > .prompt')
        .addEventListener('keypress', handle)
