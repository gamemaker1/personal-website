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

export const about = () => ``
export const skills = () => ``
export const education = () => ``
export const resume = () => ``

export const skill = () => `issue.`
