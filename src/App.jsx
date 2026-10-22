import React from 'react';
import profilePic from './assets/profile.jpg';
import playlistImg from './assets/playlist.png';

export default function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <nav className="nav">
        <h2>RSD</h2>
        <div>
          <button onClick={() => scrollTo('home')}>Home</button>
          <button onClick={() => scrollTo('projects')}>Projects</button>
          <button onClick={() => scrollTo('skills')}>Skills</button>
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('connect')}>Connect</button>
        </div>
      </nav>

      <section id="home" className="section hero-section">
        <div className="hero-text">
          <div className="badge-pill">✨ 3rd-Year IT Student</div>
          <h1>Hi, I'm <span className="highlight-name">Rowena Desipeda</span></h1>
          <p className="hero-description">
            Welcome to my creative space! I love building simple, aesthetic, and functional web applications with code.
          </p>
          <button onClick={() => scrollTo('projects')} className="cta-btn">
            Explore My Work ↓
          </button>
        </div>
        <div className="hero-img-container">
          <img src={profilePic} alt="Rowena Desipeda" className="profile-pic" />
        </div>
      </section>

      <section id="projects" className="section alt-bg">
        <h2 className="featured-title">My Featured Project</h2>
        <div className="title-underline"></div>
        <div className="projects-container">
          <div className="project-card">
            <img src={playlistImg} alt="Ariana Grande Playlist Project" className="project-img" />
            <div className="project-info">
              <h3>Ariana Grande Music Playlist Web App</h3>
              <p>
                A React-based music playlist interface showcasing discography, albums, and interactive vinyl record player layout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <h2 className="skills-title">My Technical Toolkit</h2>
        <div className="skills-container">
          <div className="skill-pill">🌐 HTML5</div>
          <div className="skill-pill">🎨 CSS3</div>
          <div className="skill-pill">⚡ JavaScript</div>
          <div className="skill-pill">⚛️ React.js</div>
          <div className="skill-pill">🐙 Git & GitHub</div>
        </div>
      </section>

      <section id="about" className="section alt-bg">
        <h2>About Me</h2>
        <p className="about-text">
          I am Rowena Desipeda, a 3rd-year Information Technology student passionate about building clean, functional, and user-friendly web applications. My technical toolkit includes HTML, CSS, JavaScript, and React.js, which I apply in developing interactive academic projects like my Music Playlist App. My goal is to leverage my skills to create impactful digital experiences and grow as a professional frontend developer.
        </p>
      </section>

      <section id="connect" className="section">
        <h2>Connect With Me</h2>
        <p className="connect-subtext">
          Feel free to reach out for collaborations or project inquiries!
        </p>

        <div className="email-pill-container">
          <a href="mailto:desipedarowena0612@gmail.com" className="email-pill">
            ✉️ desipedarowena0612@gmail.com
          </a>
        </div>

        <div className="social-buttons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn fb-btn">
            Facebook
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn gh-btn">
            GitHub
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Rowena Desipeda. All Rights Reserved.</p>
      </footer>
    </div>
  );
}