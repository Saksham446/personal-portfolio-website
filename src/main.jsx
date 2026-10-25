import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowUpRight, CodeXml, Users, Mail, Menu, X,
  Code2, Sparkles, Sun, Moon, Terminal, Layers, Globe, ExternalLink
} from 'lucide-react';
import './style.css';

const projects = [
  {
    number: '01',
    name: 'SmartHelp',
    type: 'FULL-STACK WEB APPLICATION',
    description: 'An intelligent IT helpdesk concept for organizing support tickets and simplifying IT service management.',
    tags: ['React', 'Node.js', 'MongoDB', 'AI'],
    icon: Layers,
    color: 'violet',
    link: 'https://github.com/Saksham446'
  },
  {
    number: '02',
    name: 'TraceMail AI',
    type: 'AI-POWERED APPLICATION',
    description: 'An AI-focused project exploring email analysis and smarter information discovery.',
    tags: ['AI / ML', 'Python', 'Web'],
    icon: Sparkles,
    color: 'cyan',
    link: 'https://github.com/Saksham446'
  },
  {
    number: '03',
    name: 'Healthcare Management',
    type: 'SOFTWARE DEVELOPMENT',
    description: 'A healthcare management system concept focused on organizing information and streamlining workflows.',
    tags: ['Java', 'DBMS', 'MySQL'],
    icon: Terminal,
    color: 'orange',
    link: 'https://github.com/Saksham446'
  }
];

const skills = [
  ['JavaScript', 'Programming', Code2],
  ['React', 'Frontend', Layers],
  ['HTML & CSS', 'Frontend', Globe],
  ['Python', 'Programming', Terminal],
  ['Java & C', 'Programming', Code2],
  ['Node.js', 'Backend', Terminal],
  ['MySQL & DBMS', 'Database', Layers],
  ['Git & GitHub', 'Tools', CodeXml]
];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = 'singhsaksham470@gmail.com';

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className={dark ? 'app dark' : 'app light'}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">S.</span>
          <span>saksham<span className="brand-dot">.</span></span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['About', 'Skills', 'Projects', 'Contact'].map(item =>
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          )}
        </nav>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> OPEN TO INTERNSHIP OPPORTUNITIES</div>
            <p className="eyebrow">HELLO, I'M</p>
            <h1>Saksham<br /><span className="gradient-text">Singh.</span></h1>
            <h2>Developer in progress. <span>Builder by passion.</span></h2>
            <p className="hero-description">
              I'm a Computer Science student exploring software development
              and AI. I enjoy turning ideas into useful, intuitive digital experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={18} /></a>
              <a className="button button-secondary" href="#contact"><Mail size={17} /> Get in touch</a>
            </div>
            <div className="social-row">
              <a href="https://github.com/Saksham446" target="_blank" rel="noreferrer"><CodeXml size={17} /> GitHub <ArrowUpRight size={13} /></a>
              <a href="https://www.linkedin.com/in/saksham-singh-027079281/" target="_blank" rel="noreferrer"><Users size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="code-card">
              <div className="window-bar">
                <div className="window-dots"><i /><i /><i /></div>
                <span>developer.js</span><Code2 size={15} />
              </div>
              <div className="code-content">
                <p><span className="line-no">01</span> <span className="pink">const</span> developer = {'{'}</p>
                <p><span className="line-no">02</span> &nbsp; name: <span className="green">'Saksham Singh'</span>,</p>
                <p><span className="line-no">03</span> &nbsp; role: <span className="green">'Developer'</span>,</p>
                <p><span className="line-no">04</span> &nbsp; focus: [</p>
                <p><span className="line-no">05</span> &nbsp; &nbsp; <span className="green">'Web Development'</span>,</p>
                <p><span className="line-no">06</span> &nbsp; &nbsp; <span className="green">'AI / ML'</span></p>
                <p><span className="line-no">07</span> &nbsp; ],</p>
                <p><span className="line-no">08</span> &nbsp; learning: <span className="orange">true</span>,</p>
                <p><span className="line-no">09</span> &nbsp; building: <span className="orange">true</span></p>
                <p><span className="line-no">10</span> {'}'};</p>
                <p className="code-comment"><span className="line-no">11</span> // Always curious. Always building.</p>
              </div>
              <div className="code-footer"><span><span className="mini-pulse" /> Available for opportunities</span><span>UTF-8</span></div>
            </div>
            <div className="float-chip chip-ai"><Sparkles size={16} /> AI / ML</div>
            <div className="float-chip chip-web"><Code2 size={16} /> Web Dev</div>
            <div className="hero-caption"><span className="caption-line" /> Turning coffee into code <span>✳</span></div>
          </div>
          <a href="#about" className="scroll-indicator"><span /> SCROLL TO EXPLORE <ArrowDown size={14} /></a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>A little about <span className="gradient-text">my journey.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p className="lead">I believe the best way to learn technology is to <span>build with it.</span></p>
              <p>I'm pursuing a B.Tech in Computer Science Engineering with a focus on AI and Machine Learning at Galgotias University. I enjoy exploring new technologies, solving problems and building projects that bring ideas to life.</p>
              <p>From frontend interfaces to backend logic, I'm working towards becoming a versatile developer who can take a product from concept to deployment.</p>
              <a className="text-link" href="https://github.com/Saksham446" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16} /></a>
            </div>
            <div className="stats-grid">
              <div className="stat-card"><span className="stat-icon"><Code2 /></span><strong>03<span>+</span></strong><p>Projects showcased</p><small>Learning by building</small></div>
              <div className="stat-card"><span className="stat-icon"><Sparkles /></span><strong>AI<span>/</span>ML</strong><p>Area of interest</p><small>Exploring intelligent systems</small></div>
              <div className="stat-card"><span className="stat-icon"><Layers /></span><strong>Full<span>-</span>stack</strong><p>Development journey</p><small>Frontend to backend</small></div>
              <div className="stat-card"><span className="stat-icon"><Globe /></span><strong>Always<span>.</span></strong><p>Ready to learn</p><small>Curiosity drives progress</small></div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / TOOLKIT</p>
            <h2>Tools I use to <span className="gradient-text">create.</span></h2>
            <p className="section-subtitle">A growing toolkit for turning problems into practical solutions.</p>
          </div>
          <div className="skills-grid">
            {skills.map(([name, level, Icon], i) =>
              <div className="skill-card" key={name} style={{ '--i': i }}>
                <span className="skill-icon"><Icon size={21} /></span>
                <div><h3>{name}</h3><p>{level}</p></div>
                <ArrowUpRight className="skill-arrow" size={16} />
              </div>
            )}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading projects-heading">
            <div><p className="eyebrow">03 / SELECTED WORK</p><h2>Ideas made <span className="gradient-text">real.</span></h2></div>
            <a className="text-link" href="https://github.com/Saksham446" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={16} /></a>
          </div>
          <div className="projects-grid">
            {projects.map(project => {
              const Icon = project.icon;
              return <article className={`project-card ${project.color}`} key={project.number}>
                <div className="project-top"><span className="project-number">{project.number} / PROJECT</span><a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on CodeXml`}><ArrowUpRight size={19} /></a></div>
                <div className="project-art"><div className="project-art-ring" /><div className="project-art-icon"><Icon size={39} strokeWidth={1.5} /></div><span className="art-spark spark-one">✳</span><span className="art-spark spark-two">✦</span></div>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">Explore project <ExternalLink size={15} /></a>
              </article>;
            })}
          </div>
          <p className="project-note">Project summaries are introductory descriptions. Visit CodeXml for available source code and implementation details.</p>
        </section>

        <section className="contact-section section" id="contact">
          <div className="contact-card">
            <div className="contact-glow" />
            <p className="eyebrow">04 / WHAT'S NEXT?</p>
            <h2>Have an idea?<br /><span className="gradient-text">Let's build it.</span></h2>
            <p className="contact-description">I'm interested in internships, collaborations and opportunities to learn by building real products. Let's connect.</p>
            <div className="contact-actions">
              <button className="button button-primary" onClick={copyEmail}><Mail size={17} /> {copied ? 'Email copied!' : 'Copy email'} <ArrowUpRight size={16} /></button>
              <a className="button button-secondary" href="https://www.linkedin.com/in/saksham-singh-027079281/" target="_blank" rel="noreferrer"><Users size={17} /> Connect on LinkedIn</a>
            </div>
            <span className="contact-decoration">S.</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home"><span className="brand-mark">S.</span><span>saksham<span className="brand-dot">.</span></span></a>
        <p>Designed with curiosity. Built with code.</p>
        <a href="#home" className="back-top">Back to top ↑</a>
        <span className="copyright">© {new Date().getFullYear()} Saksham Singh</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
