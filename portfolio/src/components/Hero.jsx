import { useTypewriter } from '../hooks';
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const ROLES = ['Full-Stack Developer', 'Mobile App Builder', 'CS Student @ RMK', 'Hackathon Finalist'];

const CODE_LINES = [
  { token: 'keyword',  text: 'const ' },
  { token: 'var',      text: 'harish' },
  { token: 'op',       text: ' = {' },
  { token: 'newline',  text: '' },
  { token: 'key',      text: '  role' },
  { token: 'op',       text: ': ' },
  { token: 'string',   text: '"Full-Stack Dev"' },
  { token: 'op',       text: ',' },
  { token: 'newline',  text: '' },
  { token: 'key',      text: '  college' },
  { token: 'op',       text: ': ' },
  { token: 'string',   text: '"R.M.K Engg"' },
  { token: 'op',       text: ',' },
  { token: 'newline',  text: '' },
  { token: 'key',      text: '  cgpa' },
  { token: 'op',       text: ': ' },
  { token: 'number',   text: '7.72' },
  { token: 'op',       text: ',' },
  { token: 'newline',  text: '' },
  { token: 'key',      text: '  skills' },
  { token: 'op',       text: ': [' },
  { token: 'newline',  text: '' },
  { token: 'string',   text: '    "React"' },
  { token: 'op',       text: ', ' },
  { token: 'string',   text: '"Node.js"' },
  { token: 'op',       text: ',' },
  { token: 'newline',  text: '' },
  { token: 'string',   text: '    "MySQL"' },
  { token: 'op',       text: ', ' },
  { token: 'string',   text: '"Firebase"' },
  { token: 'newline',  text: '' },
  { token: 'op',       text: '  ],' },
  { token: 'newline',  text: '' },
  { token: 'key',      text: '  status' },
  { token: 'op',       text: ': ' },
  { token: 'string',   text: '"Open to work 🚀"' },
  { token: 'newline',  text: '' },
  { token: 'op',       text: '}' },
];

function AnimatedCode() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = '';
    let i = 0;
    let lineEl = document.createElement('div');
    lineEl.className = styles.codeLine;
    el.appendChild(lineEl);

    const interval = setInterval(() => {
      if (i >= CODE_LINES.length) { clearInterval(interval); return; }
      const { token, text } = CODE_LINES[i];
      if (token === 'newline') {
        lineEl = document.createElement('div');
        lineEl.className = styles.codeLine;
        el.appendChild(lineEl);
      } else {
        const span = document.createElement('span');
        span.className = styles[token] || '';
        span.textContent = text;
        lineEl.appendChild(span);
      }
      i++;
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.terminal}>
      <div className={styles.terminalHeader}>
        <span className={styles.dot1} />
        <span className={styles.dot2} />
        <span className={styles.dot3} />
        <span className={styles.fileName}>harish.js</span>
      </div>
      <div className={styles.terminalBody}>
        <div className={styles.lineNumbers}>
          {Array.from({length: 14}, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <div className={styles.codeArea} ref={ref} />
      </div>
      {/* floating badges */}
      <div className={`${styles.badge} ${styles.badge1}`}>⚛️ React</div>
      <div className={`${styles.badge} ${styles.badge2}`}>🛠️ Node.js</div>
      <div className={`${styles.badge} ${styles.badge3}`}>🔥 Firebase</div>
      <div className={`${styles.badge} ${styles.badge4}`}>☕ Java</div>
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      <div className={styles.content}>
        <div className={styles.pill}>
          <span className={styles.dot} />
          Open to Internships &amp; Opportunities
        </div>

        <p className={styles.eyebrow}>
          <span className={styles.typewriter}>{typed}</span>
        </p>

        <h1 className={styles.name}>
          Hi, I'm<br />
          <span>Harish ELANGO</span>
        </h1>

        <p className={styles.tagline}>
          IT student at <strong>R.M.K Engineering College</strong>, building full-stack
          web apps, mobile solutions, and cybersecurity tools that solve real problems.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>View My Work</a>
          <a href="#contact"  className={styles.btnOutline}>Get in Touch</a>
        </div>
      </div>

      <div className={styles.visual}>
        <AnimatedCode />
      </div>

      <div className={styles.scrollHint}>SCROLL</div>
    </section>
  );
}
