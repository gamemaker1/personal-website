// the man page for the website.
export const help = () => `
  <p>type or click on the following commands to run them:</p>

  <div class="indented">
    <div><strong class="command">
      <button onclick="window.prompt('about')">about</button>
    </strong></div>
    <div>a bit about me.</div>

    <br />
    
    <div><strong class="command">
      <button onclick="window.prompt('skills')">skills</button>
    </strong></div>
    <div>checkout my technical skills.</div>

    <br />

    <div><strong class="command">
      <button onclick="window.prompt('education')">education</button>
    </strong></div>
    <div>read about where i went to school and college.</div>

    <br />
    
    <div><strong class="command">
      <button onclick="window.prompt('resume')">resume</button>
    </strong></div>
    <div>download a pdf of my resume.</div>
  </div>
`

export const about = () => `
  <p>hi, my name is vedant :)</p>

  <p>
    i was born in austin, texas in june 2006. i moved to india when i was three
    months old, so i don't really have pictures of my birthplace. i live in pune,
    maharashtra - so here are some pictures from there instead!
  </p>

  <div class="views">
    <img
      src="assets/media/riverside.jpg" alt="a riverside sunset"
      onclick="fullscreen(event)"
    />
    <p class="caption">
      clockwise from the top: a riverside sunset, dusk on a
      lonely bridge, and the view from a shatabdi window
    </p>
    <img
      src="assets/media/bridge-dusk.jpg" alt="dusk on a lonely bridge"
      onclick="fullscreen(event)"
    />
    <img
      src="assets/media/shatabdi-window.jpg" alt="the view from a shatabdi window"
      onclick="fullscreen(event)"
    />
  </div>

  <p>
    i love programming small, clean and functional, sometimes unnecessary things.
    i love reading books, documentation of some random cool package i found, and
    old comic books like tintin. my favourite quote is the following -
  </p>

  <blockquote>
    the best reason to carry a handkerchief is to lend it.
  </blockquote>

  if you know which movie this is from, run the name as a command :)
`

export const skills = () => ``
export const education = () => ``
export const resume = () => ``

export const skill = () => `issue.`
