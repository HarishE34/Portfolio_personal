import { useRef } from 'react';
import { DATA } from '../data';
import styles from './Projects.module.css';

function ProjectCard({ p }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  const handleMouseLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
  };

  return (
    <div
      ref={ref}
      className={`${styles.card} reveal`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* spotlight glow layer */}
      <div className={styles.spotlight} />

      {/* animated corner accent */}
      <div className={styles.cornerAccent} />

      <div className={styles.top}>
        <div className={styles.iconWrap}>
          <span className={styles.icon}>{p.icon}</span>
        </div>
        <span className={styles.badge}>{p.badge}</span>
      </div>

      <div className={styles.name}>{p.name}</div>
      <div className={styles.desc}>{p.desc}</div>

      <div className={styles.footer}>
        <div className={styles.stack}>
          {p.stack.map(t => (
            <span key={t} className={styles.stackTag}>{t}</span>
          ))}
        </div>
        <div className={styles.arrow}>→</div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="reveal">
        <p className="section-label">// what I've built</p>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className={styles.grid}>
        {DATA.projects.map(p => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </section>
  );
}