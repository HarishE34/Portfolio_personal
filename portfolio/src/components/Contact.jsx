import { useState } from 'react';
import { DATA } from '../data';
import styles from './Contact.module.css';

const LINKS = [
  { icon: '📧', label: 'Email',    value: DATA.email,    href: `mailto:${DATA.email}` },
  { icon: '📱', label: 'Phone',    value: DATA.phone,    href: `tel:${DATA.phone}` },
  { icon: '📍', label: 'Location', value: DATA.location, href: 'https://maps.google.com/?q=Mayiladuthurai,Tamil+Nadu' },
  { icon: '🎓', label: 'College',  value: DATA.college,  href: 'https://www.rmkec.ac.in' },
  { icon: '💼', label: 'LinkedIn', value: DATA.linkedin, href: 'https://www.linkedin.com/in/harish-e-87a81a290' },
  { icon: '🐙', label: 'GitHub',   value: DATA.github,   href: 'https://github.com/HarishE34' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.msg) { alert('Please fill all fields.'); return; }
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: '', email: '', msg: '' });
        setTimeout(() => setSent(false), 4000);
      }
    } catch (err) {
      alert('Failed to send. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="reveal">
        <p className="section-label">// let's connect</p>
        <h2 className={styles.heading}>Open to<br />opportunities</h2>
        <p className={styles.sub}>
          Whether you have a project, internship offer, or just want to say hello — my inbox is always open.
        </p>
        <div className={styles.links}>
          {LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.label === 'Email' || l.label === 'Phone' ? '_self' : '_blank'}
              rel="noreferrer"
              className={styles.link}
            >
              <span className={styles.linkIcon}>{l.icon}</span>
              <div>
                <span className={styles.linkLabel}>{l.label}</span>
                <span className={styles.linkValue}>{l.value}</span>
              </div>
              <span className={styles.linkArrow}>↗</span>
            </a>
          ))}
        </div>
      </div>

      <div className={`${styles.form} reveal`}>
        <div className={styles.group}>
          <label>YOUR NAME</label>
          <input placeholder="John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        </div>
        <div className={styles.group}>
          <label>YOUR EMAIL</label>
          <input type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        </div>
        <div className={styles.group}>
          <label>MESSAGE</label>
          <textarea placeholder="Hey Harish, I'd love to collaborate on..." value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} />
        </div>
        <button className={styles.submit} onClick={handleSubmit} disabled={loading}>
          {loading ? 'Sending...' : 'Send Message →'}
        </button>
        {sent && <div className={styles.success}>✅ Message sent! I'll get back to you soon.</div>}
      </div>
    </section>
  );
}