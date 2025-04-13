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

    <br />

    <div><strong class="command">
      <button onclick="window.prompt('tokenize')">tokenize</button>
    </strong></div>
    <div>play around with a basic tokenizer.</div>
  </div>
`

export const about = () => `
  <p>hi, my name is vedant :)</p>

  <p>
    i was born in austin, texas in june 2006. i moved to india when i was three
    months old, so i don't really have pictures of my birthplace. i live in pune,
    maharashtra - so instead, here are some pictures from pune that i've taken!
    <em><small>(click on the pictures to view them in fullscreen mode)</small></em>
  </p>

  <div class="views">
    <img
      src="assets/media/riverside.jpg" alt="a riverside sunset"
      onclick="analytics.log('click', event); fullscreen(event)"
    />
    <p class="caption">
      clockwise from the top: a riverside sunset, dusk on a
      lonely bridge, and the view from a shatabdi window.
    </p>
    <img
      src="assets/media/bridge-dusk.jpg" alt="dusk on a lonely bridge"
      onclick="analytics.log('click', event); fullscreen(event)"
    />
    <img
      src="assets/media/shatabdi-window.jpg" alt="the view from a shatabdi window"
      onclick="analytics.log('click', event); fullscreen(event)"
    />
  </div>

  <p>
    i love programming small, clean, functional (and sometimes unnecessary) things.
    i love reading books, documentation of random cool packages i come across, and
    old comic books like tintin and asterix. my favourite quote is the following -
  </p>

  <blockquote>
    the best reason to carry a handkerchief is to lend it.
  </blockquote>

  if you know which movie this is from, run the name as a command :)
`

export const skills = () => `
  <p>
    as for my technical skills, the following is a non-exhaustive list of
    technologies and projects that i know how to use and/or have worked with.
  </p>

  <div class="lists">
    <div>
      <strong>programming languages</strong>
      <ul>
        <li>typescript/javascript</li>
        <li>golang</li>
        <li>rust</li>
        <li>python</li>
        <li>bash/zsh/fish</li>
        <li>c++/c</li>
        <li>8086/x86 assembly</li>
        <li>dart</li>
        <li>java/kotlin</li>
        <li>vlang</li>
      </ul>
    </div>

    <div>
      <strong>frameworks</strong>
      <ul>
        <li>express/fastapi/hapi</li>
        <li>react/preact/svelte/astro</li>
        <li>echo</li>
        <li>flask</li>
        <li>fastapi</li>
        <li>pytorch</li>
        <li>android/flutter</li>
      </ul>
    </div>

    <div>
      <strong>tools</strong>
      <ul>
        <li>postgresql</li>
        <li>sqlite</li>
        <li>git</li>
        <li>ssh</li>
        <li>docker</li>
        <li>caddy/nginx</li>
        <li>bash and co(reutils)</li>
        <li>xan</li>
        <li>curl/httpie/oha</li>
        <li>github/gitlab ci</li>
        <li>jupyter notebooks</li>
      </ul>
    </div>

    <div>
      <strong>specifications</strong>
      <ul>
        <li>rate limiting headers in http (ietf)</li>
        <li>verifiable credentials and presentations (w3c)</li>
        <li>multi agent function calling (deepmind)</li>
        <li>model context protocol (nanda)</li>
      </ul>
    </div>

    <div>
      <strong>projects</strong>
      <ul>
        <li>agent torch</li>
        <li>express rate limit</li>
        <li>refined github</li>
        <li>serve</li>
        <li>sunbird rc</li>
        <li>beckn</li>
        <li>android (aosp/lineage)</li>
      </ul>
    </div>
  </div>
`

export const education = () => `
  <div class="waypoints">
    <a href="#school">school</a>
    <a href="#junior-college">junior college</a>
    <a href="#undergrad">undergrad</a>
  </div>

  <div>
    <em><small>
      click on one of the above, or swipe through the timeline.
    </small></em>
  </div>

  <div class="timeline">
    <p id="school" class="slide" onclick="event.target.scrollIntoView({ behavior: 'smooth' })">
      i studied at wisdom world school, wakad from grade one to ten. i was a
      junior house prefect, represented my school in inter-school debates and
      public speaking (best i got was second place). i participated in quite a
      few sports events, but i think i'm better at running away from problems,
      not people :P <br /><br />

      my love for computers started somewhere in sixth or seventh grade when
      my dad convinced me that a game i wanted to play only ran on linux. i
      ended up installing ubuntu on a dusty old pc, and went down the linux
      rabbit hole - even disassembling the pc, rebuilding it with a lego case,
      and installing every distro on it, from ubuntu to gentoo. <br /><br />

      eventually, i started coding for fun, took part in google code-in (and got
      a cool t-shirt!), and did a bit of everything - from writing android apps,
      to building custom roms for my phone, to writing a toy os in rust.
    </p>

    <p id="junior-college" class="slide" onclick="event.target.scrollIntoView({ behavior: 'smooth' })">
      during the lockdown, i built a project called dabbu - a knowledge platform
      that let users treat data from multiple providers like simple folders.
      it took me through api design, nlp, server architecture, and more.
      it also led me to write my own node.js package - a text extractor for
      office documents - which now gets 10k+ downloads a week. i also started
      contributing to open source projects like refined github, fpm, serve,
      express-rate-limit, and agent torch, and ended up co-maintaining the last
      two! <br /><br />

      post lockdown, i prepared for jee for two years while continuing my open
      source work. i contributed to sunbird rc (which backs india’s vaccine
      certificate infra), explored verifiable credentials, and worked on
      the beckn protocol – even got an honourable mention in a national ondc
      hackathon. <br /><br />

      i gave a few talks in 2024 too - at the sunbird dpg tech fusion
      conference, about my open source journey, and at the foss united meetup in
      hyderabad about agent torch.
    </p>

    <p id="undergrad" class="slide" onclick="event.target.scrollIntoView({ behavior: 'smooth' })">    
      in the monsoon of 2024, i joined iiit hyderabad for an undergrad in
      cs. i got elected to the student parliament and later as academics
      secretary. with my friend aarnav pai, we revamped the entire mess system
      in under a month, and made it open source too: gitlab.iiit.ac.in/messcom.
      <br /><br />

      re-making the mess system was quite the task - but in the end, we made
      something we hope will last longer than our stay at college. our focus
      was automation of the currently manual mess system - so we designed and
      implemented something that would require almost no human intervention
      from end to end. we switched out the biometric authentication for a qr
      code system, created a new portal for registrations that had the menu,
      rates, and built in checks for capacities. we created an admin dashboard
      with detailed analytics, and streamlined the billing process. we also
      implemented the qr verification systems ourselves, setting up kiosks
      with scanners in each mess to ensure quick, easy and accurate availment
      of meals.
    </p>
  </div>
`

export const resume = () => `
  <p>
    you can download my resume by clicking on
    <a href="assets/content/vedant-kulkarni-resume.pdf" download>this link</a>.
  </p>
`

export const tokenize = () => `
  <textarea placeholder="type stuff here!" oninput="window.tokenize(event)"></textarea>
  <div class="tokens"></div>
`

// some commands, just for fun :)
export const intern = () => `<3`
export const sudo = () => {
  window.open('https://youtu.be/dQw4w9WgXcQ', '_blank').focus()
  return `you are not in the sudoers file. this incident will be reported.`
}
export const hallo = () => `
  <p><img src="assets/media/whale.svg" class="whale"><strong> hallo!</strong></p>
`
