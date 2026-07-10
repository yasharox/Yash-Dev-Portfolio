import { useEffect, useRef, useState } from 'react'

/* ─── DATA ─────────────────────────────────────────────── */
const STACK = [
  { icon: '⚛', name: 'React', type: 'Frontend' },
  { icon: '☕', name: 'Java', type: 'Language' },
  { icon: '🟨', name: 'JavaScript', type: 'Language' },
  { icon: '🔷', name: 'TypeScript', type: 'Language' },
  { icon: '🟢', name: 'Node.js', type: 'Backend' },
  { icon: '🚀', name: 'Express', type: 'Backend' },
  { icon: '🍃', name: 'MongoDB', type: 'Database' },
  { icon: '🐘', name: 'PostgreSQL', type: 'Database' },
   { icon: '☁', name: 'AWS', type: 'Cloud' },
  { icon: '🎨', name: 'Tailwind', type: 'Styling' },
]

const PROJECTS = [
  {
    title: 'BLOCKCHAIN TRADING PLATFORM',
    tags: ['Java', 'SpringBoot', 'MYSQL'],
    desc: 'Similar to Real-time trading platform with mock api feeds on crypto stocks.',
    url: 'https://crypto-fullstack-apz6.vercel.app/signin',
  },
  {
    title: 'MOVIE APP',
    tags: ['Express', 'MongoDB', 'React.js' ],
    desc: 'CRUD API handling the functionalities of MERN stack application.',
    url: 'https://movie-app-2026.vercel.app/',
  },
  ,
  {
    title: 'Excursion AI ',
    tags: ['Node.js','Express.js', 'MongoDB', 'React.js','WebSockets'],
    desc: 'Full-stack AI-powered excursion booking platform with real-time updates and RESTful APIs..',
    url: 'https://exaiclient.vercel.app/',
  }
]

const EXPERIENCE = [
  {
    period: '2025 — 2026',
    role: 'Scaler Full Stack Developer Learner*',
    company: 'Scaler',
    desc: 'Developed React component library used across 12 product teams. Championed accessibility standards achieving WCAG AA compliance. coursework: Data Structures and Algorithms, Databases- MYSQL, Object Oriented Programming, System Design',
  },
  {
    period: '2022 — 2025',
    role: 'Security Officer',
    company: 'Carnival Cruise Line, USA',
    desc: 'Worked with digital monitoring systems and reporting tools for tracking incidents and operations.',
  },
  {
    period: '2015 - 2022',
    role: 'Executive Security',
    company: 'InterGlobe Aviation Ltd (IndiGo)',
    desc: 'Maintained comprehensive logs and records for audits and operational tracking. Ensured 99.9% uptime in security operations and implemented digital monitoring protocols.',
  },
  
]

const MARQUEE_WORDS = [
  'JavaScript', '·', 'React', '·', 'Node', '·', 'Java', '·',
  'SpringBoot', '·', 'MongoDB', '·', 'DSA', '·',
  'JavaScript', '·', 'React', '·', 'Node', '·',
  'MySQL', '·', '·', 'MongoDB', '·',
]

/* ─── HOOKS ─────────────────────────────────────────────── */
function useFadeUp(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, deps)
}

/* ─── COMPONENTS ─────────────────────────────────────────── */
function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const move = e => {
      cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`
    }
    const addHover = () => cursor.classList.add('hover')
    const removeHover = () => cursor.classList.remove('hover')

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, .project-item, .stack-item, .contact-link')
      .forEach(el => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', removeHover)
      })

    return () => document.removeEventListener('mousemove', move)
  }, [])

  return <div className="cursor" ref={cursorRef} />
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{ borderBottom: scrolled ? '1px solid #222' : 'none', background: scrolled ? 'rgba(0,0,0,0.9)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', mixBlendMode: 'normal', transition: 'background 0.3s' }}>
      <div className="nav-logo">YASHAR.DEV</div>
      <ul className="nav-links">
        {['About', 'Stack', 'Projects', 'Experience', 'Contact'].map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}>{l}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <p className="hero-eyebrow">Full Stack JavaScript Developer — Available for hire</p>
      <h1 className="hero-title">
        <span>Mohamed</span>
        <span className="outline">Yashar</span>
      </h1>
      <div className="hero-bottom">
        <p className="hero-desc">
          I build fast, scalable web applications from pixel-perfect interfaces to distributed backend systems, turning complex problems into elegant code.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary">Get in touch →</a>
          <span className="scroll-hint">↓ scroll to explore</span>
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {MARQUEE_WORDS.map((w, i) => (
          <span key={i} className="marquee-item" style={{ color: w === '·' ? '#fff' : undefined }}>
            {w}
          </span>
        ))}
      </div>
    </div>
  )
}

function About() {
  return (
    <section id="about">
      <p className="section-label">01 — About</p>
      <div className="about-grid fade-up">
        <h2 className="about-heading">
          Crafting decentralized<br />
          experiences that<br />
          <em>actually matter</em>
        </h2>
        <div>
          <p className="about-text">            
            I'm a full-stack developer driven by a deep curiosity for Web3 and blockchain technologies, paired with a relentless obsession for clean architecture and performance. I operate at the intersection of design thinking and systems engineering—where beautiful, intuitive interfaces meet bulletproof backends.
          </p>
          <p className="about-text">
            My stack is opinionated: React.js on the frontend, Node/Express or serverless functions on the backend, with MY-SQL or MongoDB depending on the data shape. I deploy on AWS or Vercel and treat CI/CD as a first-class citizen.
          </p>
          <p className="about-text">
            When I'm not shipping code, I focus on mastering low-level systems engineering with Rust and developing high-performance applications for the Web3 ecosystem
          </p>
          <div className="about-stats">
            {[
              { num: 'count++', label: 'Years experience' },
              { num: '40+', label: 'Projects Contributed' },
              { num: '12M', label: 'Emphasizing on learning' },
              { num: '99%', label: 'Uptime maintained' },
            ].map(s => (
              <div key={s.label}>
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section id="stack">
      <p className="section-label">02 — Tech Stack</p>
      <div className="stack-grid fade-up">
        {STACK.map(item => (
          <div key={item.name} className="stack-item">
            <span className="stack-icon">{item.icon}</span>
            <div className="stack-name">{item.name}</div>
            <div className="stack-type">{item.type}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects">
      <p className="section-label">02 — Selected Work</p>
      <div className="projects-list">
        {PROJECTS.map((p, i) => (
          <a href={p.url} 
            key={p.title} 
            className="project-item fade-up" 
            target ="_blank"
            rel='noreferrer'
            style={{ transitionDelay: `${i * 0.1}s` }}>
            <span className="project-num">0{i + 1}</span>
            <div className="project-info">
              <h3 className="project-title">{p.title}</h3>
              <div className="project-meta">
                {p.tags.map(t => (
                  <span key={t} className="project-tag">{t}</span>
                ))}                
              </div>
              {/* ✅ ADDED: Project description */}
              <p className="project-desc">{p.desc}</p>
              {/* ✅ ADDED: View Live URL */}
              <span className="project-url">Link →</span>
            </div>
            <span className="project-arrow">→</span>
          </a>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience">
      <p className="section-label">03 — Experience</p>
      <div className="experience-list">
        {EXPERIENCE.map((e, i) => (
          <div key={e.company} className="exp-item fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
            <span className="exp-period">{e.period}</span>
            <div>
              <div className="exp-role">{e.role}</div>
              <div className="exp-company">{e.company}</div>
              <p className="exp-desc">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const links = [
    { label: 'Email', value: 'yashar93official@gmail.com', href: 'yashar93official@gmail.com' },
    { label: 'GitHub', value: 'github.com/yasharox', href: 'https://github.com/yasharox' },
    { label: 'LinkedIn', value: 'linkedin.com/in/mohamed-yashar', href: 'https://www.linkedin.com/in/mohamed-yashar-2a6350125/' },
    { label: 'Resume', value: 'Download PDF →', href: 'https://drive.google.com/file/d/1nqXslCNxwfDZP5iELxKUAkL-MsPObNE2/view?usp=drive_link' },
    
  ]

  return (
    <section id="contact">
      <p className="section-label">05 — Contact</p>
      <div className="contact-inner">
        <h2 className="contact-heading fade-up">
          LET'S
          <span className="outline">BUILD</span>
          SOMETHING
        </h2>
        <div className="contact-links fade-up" style={{ transitionDelay: '0.2s'}}>
          {links.map(l => (
            <a key={l.label} 
               href={l.href}
               target='_blank'
               rel='noopener noreferrer'
                className="contact-link">
              <div>
                <span className="contact-link-label">{l.label}</span>
                {l.value}
              </div>
              <span className="contact-link-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <span className="footer-copy">© 2026 Yashar Dev — All rights reserved</span>
      <span className="footer-copy">Built with React + Vite </span>
    </footer>
  )
}

/* ─── APP ─────────────────────────────────────────────────── */
export default function App() {
  useFadeUp([])

  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
