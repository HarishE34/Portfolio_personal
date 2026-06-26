import { DATA } from '../data';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="reveal">
        <p className="section-label">// about me</p>
        <h2 className="section-title">A developer who<br />ships real things</h2>
        <div className={styles.text}>
          {DATA.about.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </div>

      <div className={`${styles.stats} reveal`}>
        {DATA.stats.map(s => (
          <div key={s.label} className={styles.statCard}>
            <div className={styles.statNumber}>{s.number}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
