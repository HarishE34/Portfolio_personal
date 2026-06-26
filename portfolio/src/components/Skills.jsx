import { DATA } from '../data';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={`${styles.header} reveal`}>
        <p className="section-label">// what I work with</p>
        <h2 className="section-title">Skills &amp; Technologies</h2>
      </div>

      <div className={styles.grid}>
        {DATA.skills.map(s => (
          <div key={s.name} className={`${styles.card} reveal`}>
            <div className={styles.icon}>{s.icon}</div>
            <div className={styles.name}>{s.name}</div>
            <div className={styles.desc}>{s.desc}</div>
            <div className="tags">
              {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
