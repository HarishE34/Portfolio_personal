import styles from './Nav.module.css';

export default function Nav({ active }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>HE.dev</div>
      <div className={styles.links}>
        <a href="#about"    style={active === 'about'    ? { color: 'var(--accent)' } : {}}>About</a>
        <a href="#skills"   style={active === 'skills'   ? { color: 'var(--accent)' } : {}}>Skills</a>
        <a href="#projects" style={active === 'projects' ? { color: 'var(--accent)' } : {}}>Projects</a>
        <a href="#contact" className={styles.cta}>Contact</a>
      </div>
    </nav>
  );
}
