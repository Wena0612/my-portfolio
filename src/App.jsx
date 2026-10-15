import rowenaPhoto from "./assets/rowena.jpg";

const projects = [
  {
    number: "01",
    category: "WEB DESIGN",
    title: "Creative Website",
    description:
      "A colorful and responsive website made with creativity and passion.",
    color: "peach",
    symbol: "✳",
  },
  {
    number: "02",
    category: "UI / UX DESIGN",
    title: "Student Dashboard",
    description:
      "A simple dashboard concept for organizing school activities.",
    color: "pink",
    symbol: "♡",
  },
  {
    number: "03",
    category: "PERSONAL PROJECT",
    title: "My Portfolio",
    description:
      "My personal space to share my skills, projects, and creativity.",
    color: "yellow",
    symbol: "✦",
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="navbar">
        <a href="#home" className="logo">
          RS<span>✳</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#connect">Connect</a>
        </nav>
      </header>

      <main>
        {/* HOME */}
        <section className="hero section-pad" id="home">
          <div className="hero-content">
            <p className="eyebrow">✳ HELLO THERE, I'M</p>

            <h1>
              Rowena Sam
              <br />
              <span>Desipeda</span><i>.</i>
            </h1>

            <p className="intro">
              Welcome to my creative space! I'm Rowena Sam Desipeda,
              an aspiring creative who enjoys learning new things,
              exploring ideas, and creating beautiful digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button">
                Explore My Work ↓
              </a>
              <a href="#about" className="simple-link">
                About Me
              </a>
            </div>

            <p className="hero-note">
              CREATIVE MIND · CURIOUS HEART · ALWAYS LEARNING
            </p>
          </div>

          <div className="hero-image">
            <span className="sunburst">✳</span>

            <div className="photo-frame">
              <img
                src={rowenaPhoto}
                alt="Rowena Sam Desipeda"
                className="profile-photo"
              />
            </div>

            <div className="photo-sticker">
              nice to
              <br />
              meet you!
              <span>♡</span>
            </div>

            <span className="floating-star star-one">✦</span>
            <span className="floating-star star-two">✳</span>
          </div>

          <a href="#projects" className="scroll-cue">
            ↓ SCROLL TO EXPLORE
          </a>
        </section>

        {/* MOVING TEXT */}
        <div className="ticker">
          <div className="ticker-track">
            <span>MAKING IDEAS REAL ✳</span>
            <span>DESIGN WITH HEART ✳</span>
            <span>ALWAYS GROWING ✳</span>
            <span>MAKING IDEAS REAL ✳</span>
          </div>
        </div>

        {/* PROJECTS */}
        <section className="projects section-pad" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow light-eyebrow">
                A FEW THINGS I'VE MADE
              </p>
              <h2>
                My <span>Projects</span><i>.</i>
              </h2>
            </div>

            <p className="heading-note">
              Ideas, creativity, and little things
              <br />
              I'm proud to share.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.color}`}
                key={project.number}
              >
                <div className="project-top">
                  <span>{project.number} / 03</span>
                  <span className="project-icon">{project.symbol}</span>
                </div>

                <div className="project-art">
                  {project.number === "01" && (
                    <>
                      <div className="art-circle"></div>
                      <div className="art-window">
                        <b>hello!</b>
                        <span>
                          creative things
                          <br />
                          start here.
                        </span>
                        <i>✳</i>
                      </div>
                    </>
                  )}

                  {project.number === "02" && (
                    <>
                      <div className="art-note">
                        MY TO-DO LIST
                        <br />
                        <b>Make it happen!</b>
                      </div>
                      <div className="art-spark">♡</div>
                    </>
                  )}

                  {project.number === "03" && (
                    <div className="art-big-type">
                      MY
                      <br />
                      SPACE<span>✳</span>
                    </div>
                  )}
                </div>

                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>

                <a href="#connect" className="project-link">
                  Let's connect <span>↗</span>
                </a>
              </article>
            ))}
          </div>

          <p className="project-footnote">
            MORE IDEAS ARE IN THE WORKS ✳
          </p>
        </section>

        {/* ABOUT */}
        <section className="about section-pad" id="about">
          <div className="about-decoration">✳ ♡ ✦</div>

          <div className="about-content">
            <p className="eyebrow">GET TO KNOW ME</p>

            <h2>
              A curious mind
              <br />
              with a <span>creative spark</span><i>.</i>
            </h2>

            <p>
              Hi! I'm Rowena Sam Desipeda. I enjoy discovering new ideas,
              learning different skills, and expressing creativity through
              digital projects.
            </p>

            <p>
              This portfolio is my little corner of the internet. Here,
              I share my projects, interests, and progress as I continue
              to grow and improve my skills.
            </p>

            <a href="#connect" className="button">
              Say Hello ↗
            </a>
          </div>

          <div className="about-card">
            <span className="card-spark">✳</span>
            <p className="handwritten">Things I love...</p>

            <ul>
              <li><span>01</span> Creative web design</li>
              <li><span>02</span> Learning new things</li>
              <li><span>03</span> Colorful inspiration</li>
              <li><span>04</span> Creating new ideas</li>
            </ul>

            <div className="card-footer">
              STAY CURIOUS <span>♡</span>
            </div>
          </div>
        </section>

        {/* CONNECT */}
        <section className="connect section-pad" id="connect">
          <span className="connect-spark">✳</span>

          <p className="eyebrow center-eyebrow">
            LET'S GET IN TOUCH
          </p>

          <h2>
            Let's make
            <br />
            <span>something lovely</span><i>.</i>
          </h2>

          <p className="connect-description">
            Have a question, an idea, or a project in mind?
            I'd love to hear from you!
          </p>

          <a
            className="button email-button"
            href="mailto:your.email@example.com"
          >
            Email Me ✉
          </a>

          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>

          <p className="contact-note">
            Replace the sample email and social links with your own.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          RS<span>✳</span>
        </a>

        <p>Made with love by Rowena Sam Desipeda</p>

        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
