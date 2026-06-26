import { DATA } from '../data';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="reveal">
        <p className="section-label">// what I've built</p>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className={styles.grid}>
        {DATA.projects.map(p => (
          <div key={p.name} className={`${styles.card} reveal`}>
            <div className={styles.top}>
              <div className={styles.icon}>{p.icon}</div>
              <span className={styles.badge}>{p.badge}</span>
            </div>
            <div className={styles.name}>{p.name}</div>
            <div className={styles.desc}>{p.desc}</div>
            <div className={styles.stack}>
              {p.stack.map(t => <span key={t} className={styles.stackTag}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
