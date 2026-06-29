import { useTypewriter } from '../hooks';
import styles from './Hero.module.css';

const ROLES = ['Full-Stack Developer', 'Mobile App Builder', 'CS Student @ RMK', 'Hackathon Finalist'];

function SuitDev() {
  return (
    <div className={styles.svgWrap}>
      <svg width="100%" viewBox="0 0 280 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.15"/>
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* background glow */}
        <ellipse cx="140" cy="160" rx="120" ry="120" fill="url(#glowGrad)"/>

        {/* ground shadow */}
        <ellipse cx="140" cy="295" rx="55" ry="8" fill="rgba(0,212,255,0.1)" className={styles.shadow}/>

        {/* whole character floats */}
        <g className={styles.floatGroup}>

          {/* laptop base */}
          <rect x="80" y="215" width="120" height="8" rx="4" fill="#1E2D45" stroke="#00D4FF" strokeWidth="1"/>

          {/* laptop screen */}
          <rect x="88" y="160" width="104" height="60" rx="5" fill="#1E2D45" stroke="#00D4FF" strokeWidth="1.5"/>
          <rect x="93" y="165" width="94" height="50" rx="3" fill="#0A0E1A"/>

          {/* scrolling code on screen */}
          <g className={styles.codeScroll}>
            <rect x="98" y="170" width="40" height="3" rx="1.5" fill="#00D4FF" opacity="0.9"/>
            <rect x="98" y="176" width="60" height="3" rx="1.5" fill="#7C3AED" opacity="0.8"/>
            <rect x="98" y="182" width="28" height="3" rx="1.5" fill="#7EE787" opacity="0.8"/>
            <rect x="98" y="188" width="50" height="3" rx="1.5" fill="#A5D6FF" opacity="0.7"/>
            <rect x="98" y="194" width="36" height="3" rx="1.5" fill="#F2CC60" opacity="0.7"/>
            <rect x="98" y="200" width="55" height="3" rx="1.5" fill="#00D4FF" opacity="0.6"/>
            <rect x="98" y="206" width="30" height="3" rx="1.5" fill="#7C3AED" opacity="0.6"/>
          </g>

          {/* cursor blink */}
          <rect x="98" y="170" width="6" height="10" rx="1" fill="#00D4FF" className={styles.cursorBlink}/>

          {/* suit body */}
          <rect x="95" y="148" width="90" height="60" rx="8" fill="#1a2744"/>

          {/* left lapel */}
          <polygon points="140,150 118,158 124,208 140,192" fill="#253660"/>
          {/* right lapel */}
          <polygon points="140,150 162,158 156,208 140,192" fill="#253660"/>

          {/* tie */}
          <polygon points="140,156 135,168 140,192 145,168" fill="#00D4FF" opacity="0.9"/>
          {/* tie knot */}
          <rect x="136" y="153" width="8" height="6" rx="2" fill="#00AACC"/>

          {/* suit buttons */}
          <circle cx="140" cy="200" r="2" fill="#00D4FF" opacity="0.5"/>
          <circle cx="140" cy="207" r="2" fill="#00D4FF" opacity="0.5"/>

          {/* left arm */}
          <g className={styles.armLeft}>
            <rect x="68" y="150" width="28" height="50" rx="10" fill="#1a2744"/>
            {/* left hand */}
            <ellipse cx="82" cy="205" rx="12" ry="10" fill="#f5c5a3"/>
          </g>

          {/* right arm — waving */}
          <g className={styles.armRight}>
            <rect x="184" y="150" width="28" height="50" rx="10" fill="#1a2744"/>
            {/* right hand */}
            <ellipse cx="198" cy="205" rx="12" ry="10" fill="#f5c5a3"/>
          </g>

          {/* neck */}
          <rect x="128" y="132" width="24" height="22" rx="6" fill="#f5c5a3"/>

          {/* head */}
          <ellipse cx="140" cy="108" rx="36" ry="38" fill="#f5c5a3"/>

          {/* hair */}
          <ellipse cx="140" cy="76" rx="36" ry="16" fill="#1a0a00"/>
          <rect x="104" y="76" width="72" height="14" fill="#1a0a00"/>
          {/* hair detail */}
          <path d="M104 80 Q140 68 176 80" fill="#2d1500" stroke="none"/>

          {/* ears */}
          <ellipse cx="104" cy="108" rx="6" ry="9" fill="#e8b48e"/>
          <ellipse cx="176" cy="108" rx="6" ry="9" fill="#e8b48e"/>

          {/* glasses frame */}
          <rect x="116" y="102" rx="5" width="20" height="14" fill="none" stroke="#00D4FF" strokeWidth="2"/>
          <rect x="144" y="102" rx="5" width="20" height="14" fill="none" stroke="#00D4FF" strokeWidth="2"/>
          <line x1="136" y1="109" x2="144" y2="109" stroke="#00D4FF" strokeWidth="2"/>
          {/* temple arms */}
          <line x1="104" y1="109" x2="116" y2="109" stroke="#00D4FF" strokeWidth="1.5"/>
          <line x1="164" y1="109" x2="176" y2="109" stroke="#00D4FF" strokeWidth="1.5"/>

          {/* eyes */}
          <g className={styles.eyeGroup}>
            <ellipse cx="126" cy="109" rx="5" ry="5.5" fill="#1a1a2e"/>
            <ellipse cx="154" cy="109" rx="5" ry="5.5" fill="#1a1a2e"/>
            <circle cx="127.5" cy="107.5" r="2" fill="white"/>
            <circle cx="155.5" cy="107.5" r="2" fill="white"/>
          </g>

          {/* smile */}
          <path d="M130 122 Q140 130 150 122" fill="none" stroke="#c8845a" strokeWidth="2.5" strokeLinecap="round"/>

          {/* eyebrows */}
          <path d="M118 100 Q126 96 134 100" fill="none" stroke="#1a0a00" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M146 100 Q154 96 162 100" fill="none" stroke="#1a0a00" strokeWidth="2.5" strokeLinecap="round"/>

        </g>

        {/* floating badge 1 — top right */}
        <g className={styles.badge1}>
          <rect x="190" y="60" width="70" height="24" rx="12" fill="#0D1F35" stroke="#00D4FF" strokeWidth="1"/>
          <text x="225" y="76" textAnchor="middle" fill="#00D4FF" fontSize="10" fontFamily="monospace">⚛️ React</text>
        </g>

        {/* floating badge 2 — top left */}
        <g className={styles.badge2}>
          <rect x="18" y="80" width="76" height="24" rx="12" fill="#0D1F35" stroke="#7C3AED" strokeWidth="1"/>
          <text x="56" y="96" textAnchor="middle" fill="#A78BFA" fontSize="10" fontFamily="monospace">🛠️ Node.js</text>
        </g>

        {/* floating badge 3 — bottom right */}
        <g className={styles.badge3}>
          <rect x="195" y="230" width="74" height="24" rx="12" fill="#0D1F35" stroke="#7EE787" strokeWidth="1"/>
          <text x="232" y="246" textAnchor="middle" fill="#7EE787" fontSize="10" fontFamily="monospace">🔥 Firebase</text>
        </g>

        {/* floating badge 4 — bottom left */}
        <g className={styles.badge4}>
          <rect x="12" y="220" width="62" height="24" rx="12" fill="#0D1F35" stroke="#F2CC60" strokeWidth="1"/>
          <text x="43" y="236" textAnchor="middle" fill="#F2CC60" fontSize="10" fontFamily="monospace">☕ Java</text>
        </g>
      </svg>
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
        <SuitDev />
      </div>

      <div className={styles.scrollHint}>SCROLL</div>
    </section>
  );
}