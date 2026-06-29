import { useRef, useEffect, useState } from 'react';
import { DATA } from '../data';
import styles from './Skills.module.css';

const LEVEL_COLORS = {
  'Exploring':    { bar: '#F05032', glow: 'rgba(240,80,50,.4)'   },
  'Learning':     { bar: '#FFCA28', glow: 'rgba(255,202,40,.4)'  },
  'Intermediate': { bar: '#00D4FF', glow: 'rgba(0,212,255,.4)'   },
  'Comfortable':  { bar: '#7C3AED', glow: 'rgba(124,58,237,.4)'  },
  'Advanced':     { bar: '#7EE787', glow: 'rgba(126,231,135,.4)' },
};

function ProgressBar({ level, levelLabel, visible }) {
  const colors = LEVEL_COLORS[levelLabel] || LEVEL_COLORS['Intermediate'];
  return (
    <div className={styles.progressWrap}>
      <div className={styles.progressTop}>
        <span className={styles.progressLabel}>Proficiency</span>
        <span className={styles.progressPercent} style={{ color: colors.bar }}>
          {visible ? `${level}%` : '0%'}
        </span>
      </div>
      <div className={styles.progressTrack}>
        <div
          className={styles.progressFill}
          style={{
            width: visible ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${colors.bar}99, ${colors.bar})`,
            boxShadow: visible ? `0 0 10px ${colors.glow}` : 'none',
          }}
        />
      </div>
      <div className={styles.levelBadge} style={{
        color: colors.bar,
        background: `${colors.bar}18`,
        border: `1px solid ${colors.bar}40`,
      }}>
        {levelLabel}
      </div>
    </div>
  );
}

function SkillCard({ s }) {
  const ref     = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    card.style.setProperty('--mouse-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <div
      ref={ref}
      className={`${styles.card} reveal`}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.spotlight} />
      <div className={styles.cornerAccent} />

      <div className={styles.cardTop}>
        <div className={styles.icon}>{s.icon}</div>
        <div className={styles.name}>{s.name}</div>
      </div>

      <div className={styles.desc}>{s.desc}</div>

      <ProgressBar level={s.level} levelLabel={s.levelLabel} visible={visible} />

      <div className="tags">
        {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={`${styles.header} reveal`}>
        <p className="section-label">// what I work with</p>
        <h2 className="section-title">Skills &amp; Technologies</h2>
      </div>
      <div className={styles.grid}>
        {DATA.skills.map(s => <SkillCard key={s.name} s={s} />)}
      </div>
    </section>
  );
}