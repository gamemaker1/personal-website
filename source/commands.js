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
    maharashtra - so instead, here are some pictures from pune that i've taken!
    <em><small>(click on the pictures to view them in fullscreen mode)</small></em>
  </p>

  <div class="views">
    <img
      src="assets/media/riverside.jpg" alt="a riverside sunset"
      onclick="fullscreen(event)"
    />
    <p class="caption">
      clockwise from the top: a riverside sunset, dusk on a
      lonely bridge, and the view from a shatabdi window.
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
        <li>rate limiting headers in http (ietf draft)</li>
        <li>verifiable credentials and presentations (w3c)</li>
        <li>multi agent function calling (gsoc project)</li>
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
  <div class="timeline">
    <p class="slide" onclick="event.target.scrollIntoView({ behavior: 'smooth' })">
      i studied in wisdom world school, wakad from first to tenth standard.
      i was a junior house prefect, and represented my school in inter-school
      debates and public speaking competitions - most notably winning second
      place for my speech at once such contest. i have participated but never
      won any sports competition - i seem to have a knack for running away
      from problems, not people :P <br /><br />

      i got into computers in around sixth or seventh grade, when my dad
      introduced me to linux: he told me a game i wanted to play (prince of
      persia) was only available on linux, and got me to install ubuntu by
      myself on an ancient pc that was catching dust at home.
    </p>

    <p class="slide" onclick="event.target.scrollIntoView({ behavior: 'smooth' })">
      as my interest grew, i learnt more and more about linux and computers -
      going so far as to taking apart the pc itself and building it back with
      a lego case, and installing every linux distro under the sun on it, even
      gentoo! soon i got into coding stuff up for the fun of it, was introduced
      to open source software, and the rest is all up on github.com/gamemaker1
      for everyone too see (: <br /><br />

      i took part in google code-in, and got a t-shirt for my contributions.
      i also tried my hand at a lot of different things - from compiling roms
      for my phone to creating android apps and writing a toy os in rust.
    </p>

    <p class="slide" onclick="event.target.scrollIntoView({ behavior: 'smooth' })">
      during the lockdown, i started my own project - a knowledge platform
      called dabbu which enabled users to access their information from multiple
      providers (google drive, gmail, one drive, hard drives, etc.) as simple
      files and folders. this took me on a deep dive into various topics -
      from server architecture and api design, to nlp techniques, to knowledge
      graphs. it also led to me creating another project - a text extractor for
      office documents - which is downloaded over 10k times a week as of today.
      <br /><br />

      after that, i started contributing to other open source projects, like
      express-rate-limit, and eventually ended up as a co-maintainer :)
    </p>

    <p class="slide" onclick="event.target.scrollIntoView({ behavior: 'smooth' })">
      post lockdown, i spent two years studying for jee, all while continuing
      to contribute as much as i could to open source projects. i worked on
      sunbird rc - the registry and credentials system that backs india's
      vaccine certificate system - and dived into verifiable presentations and
      credentials. i also contributed to beckn, participating and winning an
      honourable mention in an ondc national hackathon, helping them dockerise
      their reference implementation and improving their developer docs. <br /><br />

      i even gave a talk at the sunbird dpg tech fusion conference in pune in 2024
      on my journey in open source software.
    </p>

    <p class="slide" onclick="event.target.scrollIntoView({ behavior: 'smooth' })">
      and then, i joined iiit hyderabad as an undergraduate computer science
      student. i was elected to the student parliament, and then to the position
      of student academics secretary. <br /><br />

      working alongside batchmate aarnav pai, we completely revamped the college's
      mess system, switching from biometric authentication to qr codes, allowing
      per-meal registrations while respecting the capacities of messes, adding an
      easy to use admin interface, streamlining the billing process, all in 20 days
      of programming and 10 days of testing. we even made it an open source project;
      you can check out the source code at gitlab.iiit.ac.in/messcom.
    </p>
  </div>
`

export const resume = () => `
  <p>
    you can download my resume by clicking on
    <a href="assets/media/vedant-kulkarni.pdf" download>this link</a>.
  </p>
`

export const skill = () => `issue.`
