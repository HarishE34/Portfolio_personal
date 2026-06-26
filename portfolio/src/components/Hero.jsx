import { useTypewriter } from '../hooks';
import styles from './Hero.module.css';

const ROLES = ['Full-Stack Developer', 'Mobile App Builder', 'IT Student @ RMK', 'Hackathon Finalist'];

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
          <span>Harish E</span>
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

      <div className={styles.scrollHint}>SCROLL</div>
    </section>
  );
}
