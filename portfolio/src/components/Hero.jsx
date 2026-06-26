import { useTypewriter } from '../hooks';
import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

const ROLES = ['Full-Stack Developer', 'Mobile App Builder', 'IT Student @ RMK', 'Hackathon Finalist'];

const CODE_LINES = [
  { token: 'comment',  text: '// harish.js — loading developer...' },
  { token: 'newline',  text: '' },
  { token: 'keyword',  text: 'const ' },
  { token: 'var',      text: 'harish' },
  { token: 'op',       text: ' = {' },
  { token: 'newline',  text: '' },
  { token: 'key',      text: '  name' },
  { token: 'op',       text: ': ' },
  { token: 'string',   text: '"Harish Elango"' },
  { token: 'op',       text: ',' },
  { token: 'newline',  text: '' },
  { token: 'key',      text: '  role' },
  { token: 'op',       text: ': ' },
  { token: 'string',   text: '"Full-Stack Dev"' },
  { token: 'op',       text: ',' },
  { token: 'newline',  text: '' },
  { token: 'key',      text: '  cgpa' },
  { token: 'op',       text: ': ' },
  { token: 'number',   text: '7.72' },
  { token: 'op',       text: ',' },
  { token: 'newline',  text: '' },
  { token: 'key',      text: '  skills' },
  { token: 'op',       text: ': [' },
  { token: 'string',   text: '"React"' },
  { token: 'op',       text: ', ' },
  { token: 'string',   text: '"Node.js"' },
  { token: 'op',       text: ', ' },
  { token: 'string',   text: '"MySQL"' },
  { token: 'op',       text: '],' },
  { token: 'newline',  text: '' },
  { token: 'key',      text: '  status' },
  { token: 'op',       text: ': ' },
  { token: 'string',   text: '"Open to work 🚀"' },
  { token: 'op',       text: ',' },
  { token: 'newline',  text: '' },
  { token: 'key',      text: '  passion' },
  { token: 'op',       text: ': ' },
  { token: 'string',   text: '"Building real things"' },
  { token: 'newline',  text: '' },
  { token: 'op',       text: '};' },
  { token: 'newline',  text: '' },
  { token: 'newline',  text: '' },
  { token: 'keyword',  text: 'console' },
  { token: 'op',       text: '.' },
  { token: 'var',      text: 'log' },
  { token: 'op',       text: '(' },
  { token: 'string',   text: '"Ready to build 💪"' },
  { token: 'op',       text: ');' },
];

const BADGES = [
  { label: '⚛️ React',    cls: 'badge1' },
  { label: '🛠️ Node.js',  cls: 'badge2' },
  { label: '🔥 Firebase', cls: 'badge3' },
  { label: '☕ Java',     cls: 'badge4' },
];

function AnimatedCode() {
  const ref = useRef(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = '';
    setDone(false);
    let i = 0;
    let lineEl = document.createElement('div');
    lineEl.className = styles.codeLine;
    el.appendChild(lineEl);

    // blinking cursor span
    const cursor = document.createElement('span');
    cursor.className = styles.cursor;
    cursor.textContent = '█';
    lineEl.appendChild(cursor);

    const interval = setInterval(() => {
      if (i >= CODE_LINES.length) {
        clearInterval(interval);
        cursor.remove();
        setDone(true);
        return;
      }
      const { token, text } = CODE_LINES[i];
      if (token === 'newline') {
        cursor.remove();
        lineEl = document.createElement('div');
        lineEl.className = styles.codeLine;
        el.appendChild(lineEl);
        lineEl.appendChild(cursor);
      } else {
        const span = document.createElement('span');
        span.className = styles[token] || '';
        span.textContent = text;
        lineEl.insertBefore(span, cursor);
      }
      i++;
      el.parentElement.scrollTop = el.parentElement.scrollHeight;
    }, 55);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.terminal}>
      {/* traffic light dots */}
      <div className={styles.terminalHeader}>
        <div className={styles.trafficLights}>
          <span className={styles.tl1} />
          <span className={styles.tl2} />
          <span className={styles.tl3} />
        </div>
        <span className={styles.fileName}>harish.js</span>
        <span className={styles.branch}>main</span>
      </div>

      <div className={styles.terminalBody}>
        {/* line numbers */}
        <div className={styles.lineNumbers}>
          {Array.from({ length: 16 }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <div className={styles.codeArea} ref={ref} />
      </div>

      {/* bottom status bar */}
      <div className={styles.statusBar}>
        <span>JS</span>
        <span>{done ? '✓ compiled' : '⟳ typing...'}</span>
        <span>UTF-8</span>
      </div>

      {/* floating skill badges */}
      {BADGES.map(b => (
        <div key={b.cls} className={`${styles.badge} ${styles[b.cls]}`}>
          {b.label}
        </div>
      ))}
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
          <span>Harish Elango</span>
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