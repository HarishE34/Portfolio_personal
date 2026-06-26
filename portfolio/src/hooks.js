import { useState, useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting)
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
      });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export function useCursorGlow() {
  useEffect(() => {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;
    const move = e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    };
    document.addEventListener('mousemove', move);
    return () => document.removeEventListener('mousemove', move);
  }, []);
}

export function useActiveSection() {
  const [active, setActive] = useState('');
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const onScroll = () => {
      let cur = '';
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return active;
}

export function useTypewriter(words, speed = 100) {
  const [text, setText]       = useState('');
  const [wIdx, setWIdx]       = useState(0);
  const [cIdx, setCIdx]       = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, cIdx + 1));
        if (cIdx + 1 === word.length) setTimeout(() => setDeleting(true), 1400);
        else setCIdx(c => c + 1);
      } else {
        setText(word.slice(0, cIdx - 1));
        if (cIdx - 1 === 0) {
          setDeleting(false);
          setWIdx(w => (w + 1) % words.length);
          setCIdx(0);
        } else {
          setCIdx(c => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, wIdx, cIdx, deleting, words, speed]);

  return text;
}
