<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Portfolio</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="mediaqueries.css" />
</head>

<body>
  <nav id="desktop-nav">
    <div class="logo"><!-- image ici --></div>
    <div>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  <nav id="hamburger-nav">
    <div class="logo"><!-- image ici --></div>
    <div class="hamburger-menu">
      <div class="hamburger-icon" onclick="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="menu-links">
        <li><a href="#about" onclick="toggleMenu()">About</a></li>
        <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
        <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
        <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
      </div>
    </div>
  </nav>
  <section id="profile">
    <div class="section__pic-container section-container" >
      <img src="./assets/profile-pic.png" alt="John Doe profile picture" id="profilepic" class="profil-img"/>
    </div>
    <div class="section__text">
      <p class="section__text__p1">Hello; I'm</p>
      <h1 class="title">Mathias Chambriard</h1>
      <p class="section__text__p2">Junior Developer</p>
      <div class="btn-container">
        <button
          class="btn btn-color-2"
          onclick="window.open('./assets/resume-example.pdf')">
          Download CV
        </button>
        <button class="btn btn-color-1" onclick="location.href='./#contact'">
          Contact Info
        </button>
      </div>

      <div id="socials-container">
        <a href="https://www.linkedin.com/in/mathias-chambriard-803949237/"> <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            class="icon"></a>
        <a href="https://github.com/Trapo6x7"> <img
            src="./assets/github.png"
            alt="My Github profile"
            class="icon" /></a>

      </div>
    </div>
    <img
      src="./assets/arrow.png"
      alt="Arrow icon"
      class="icon arrow"
      onclick="location.href='./#about'" />
  </section>
  <section id="about" data-aos="fade-up">
    <p class="section__text__p1">Get to know me</p>
    <h1 class="title">About</h1>
    <div class="section-container">
      <div class="section__pic-container">
        <img
          src="./assets/trapoNB.png"
          alt="Profile picture"
          class="about-pic" />
      </div>
      <div class="about-details-container">
        <div class="about-containers">
          <div class="details-container">
            <img
              src="./assets/experience.png"
              alt="Experience icon"
              class="icon" />
            <h3>Experience</h3>
            <p>2+ years <br />Frontend Development</p>
          </div>
          <div class="details-container">
            <img
              src="./assets/education.png"
              alt="Education icon"
              class="icon" />
            <h3>Education</h3>
            <p>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</p>
          </div>
        </div>
        <div class="text-container">
          <p>
            <!-- Développeur débutant avec une expérience confirmée en graphisme,
              je combine créativité et compétences techniques pour concevoir des
              interfaces esthétiques et fonctionnelles. Ma maîtrise du design
              m'apporte un sens aigu du détail, que j'intègre dans mes projets
              de développement web. Curieux et motivé, je suis déterminé à
              allier mes compétences en design et en programmation pour créer
              des solutions modernes et innovantes. -->
            As a beginner developer with confirmed experience in graphic design, I combine creativity and technical skills to create aesthetic and functional interfaces. My expertise in design gives me a keen eye for detail, which I incorporate into my web development projects. Curious and motivated, I am determined to blend my design and programming skills to create modern and innovative solutions.
          </p>
        </div>
      </div>
    </div>
    <img
      src="./assets/arrow.png"
      alt="Arrow icon"
      class="icon arrow"
      onclick="location.href='./#experience'" />
  </section>
  <section id="experience">
    <p class="section__text__p1">Explore My</p>
    <h1 class="title">Experience</h1>
    <div class="experience-details-container">
      <div class="about-containers">
        <div class="details-container">
          <h2 class="experience-sub-title">Frontend Development</h2>
          <div class="article-container">
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                class="icon" />
              <div>
                <h3>HTML</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                class="icon" />
              <div>
                <h3>CSS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                class="icon" />
              <div>
                <h3>TailwindCSS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                class="icon" />
              <div>
                <h3>JavaScript</h3>
                <p>Basic</p>
              </div>
            </article>
          </div>
        </div>
        <div class="details-container">
          <h2 class="experience-sub-title">Backend Development</h2>
          <div class="article-container">
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                class="icon" />
              <div>
                <h3>PhpmyAdmin</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                class="icon" />
              <div>
                <h3>Php</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                class="icon" />
              <div>
                <h3>Php</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                class="icon" />
              <div>
                <h3>MySQL</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
        <div class="details-container">
          <h2 class="experience-sub-title">Graphic Design</h2>
          <div class="article-container">
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                class="icon" />
              <div>
                <h3>Video Edit</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                class="icon" />
              <div>
                <h3>Figma</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                class="icon" />
              <div>
                <h3>Illustration</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                class="icon" />
              <div>
                <h3>Logo</h3>
                <p>Experienced</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <img
      src="./assets/arrow.png"
      alt="Arrow icon"
      class="icon arrow"
      onclick="location.href='./#projects'" />
  </section>
  <section id="projects">
    <p class="section__text__p1">Browse My Recent</p>
    <h1 class="title">Projects</h1>
    <div class="experience-details-container">
      <div class="about-containers">
        <div class="details-container color-container">
          <div class="article-container">
            <img
              src="./assets/project-1.png"
              alt="Project 1"
              class="project-img" />
          </div>
          <h2 class="experience-sub-title project-title">Project One</h2>
          <div class="btn-container">
            <button
              class="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'">
              Github
            </button>
            <button
              class="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'">
              Live Demo
            </button>
          </div>
        </div>
        <div class="details-container color-container">
          <div class="article-container">
            <img
              src="./assets/project-2.png"
              alt="Project 2"
              class="project-img" />
          </div>
          <h2 class="experience-sub-title project-title">Project Two</h2>
          <div class="btn-container">
            <button
              class="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'">
              Github
            </button>
            <button
              class="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'">
              Live Demo
            </button>
          </div>
        </div>
        <div class="details-container color-container">
          <div class="article-container">
            <img
              src="./assets/project-3.png"
              alt="Project 3"
              class="project-img" />
          </div>
          <h2 class="experience-sub-title project-title">Project Three</h2>
          <div class="btn-container">
            <button
              class="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'">
              Github
            </button>
            <button
              class="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'">
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
    <img
      src="./assets/arrow.png"
      alt="Arrow icon"
      class="icon arrow"
      onclick="location.href='./#contact'" />
  </section>
  <section id="contact">
    <p class="section__text__p1">Get in Touch</p>
    <h1 class="title">Contact Me</h1>
    <div class="contact-info-upper-container">
      <div class="contact-info-container">
        <img
          src="./assets/email.png"
          alt="Email icon"
          class="icon contact-icon email-icon" />
        <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
      </div>
      <div class="contact-info-container">
        <img
          src="./assets/linkedin.png"
          alt="LinkedIn icon"
          class="icon contact-icon" />
        <p><a href="https://www.linkedin.com">LinkedIn</a></p>
      </div>
    </div>
  </section>
  <footer>
    <nav>
      <div class="nav-links-container">
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </footer>
  <script src="script.js"></script>
</body>

</html>