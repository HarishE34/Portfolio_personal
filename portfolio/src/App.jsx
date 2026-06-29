import { useEffect, useRef } from 'react';
import { useReveal, useCursorGlow, useActiveSection } from './hooks';
import Nav      from './components/Nav';
import Hero     from './components/Hero';
import About    from './components/About';
import Skills   from './components/Skills';
import Projects from './components/Projects';
import Contact  from './components/Contact';
import Footer   from './components/Footer';

const ICONS = [
  // edges
  { icon: 'react',    color: '#61DAFB', x: 3,  y: 6,   size: 60, speed: 0.4,  drift: 0.3 },
  { icon: 'js',       color: '#F7DF1E', x: 88, y: 5,   size: 54, speed: 0.25, drift: 0.5 },
  { icon: 'node',     color: '#68A063', x: 91, y: 40,  size: 58, speed: 0.35, drift: 0.2 },
  { icon: 'java',     color: '#ED8B00', x: 2,  y: 42,  size: 56, speed: 0.3,  drift: 0.4 },
  { icon: 'html',     color: '#E44D26', x: 4,  y: 78,  size: 54, speed: 0.45, drift: 0.3 },
  { icon: 'css',      color: '#264DE4', x: 87, y: 75,  size: 52, speed: 0.2,  drift: 0.6 },
  { icon: 'ts',       color: '#3178C6', x: 12, y: 92,  size: 52, speed: 0.4,  drift: 0.3 },
  { icon: 'mysql',    color: '#00758F', x: 80, y: 92,  size: 54, speed: 0.35, drift: 0.5 },
  // center spread
  { icon: 'git',      color: '#F05032', x: 42, y: 18,  size: 50, speed: 0.5,  drift: 0.25 },
  { icon: 'firebase', color: '#FFCA28', x: 68, y: 22,  size: 52, speed: 0.3,  drift: 0.4  },
  { icon: 'react',    color: '#61DAFB', x: 22, y: 28,  size: 46, speed: 0.28, drift: 0.35 },
  { icon: 'ts',       color: '#3178C6', x: 55, y: 42,  size: 50, speed: 0.38, drift: 0.3  },
  { icon: 'node',     color: '#68A063', x: 30, y: 52,  size: 48, speed: 0.22, drift: 0.45 },
  { icon: 'js',       color: '#F7DF1E', x: 72, y: 55,  size: 52, speed: 0.42, drift: 0.28 },
  { icon: 'java',     color: '#ED8B00', x: 45, y: 65,  size: 48, speed: 0.32, drift: 0.38 },
  { icon: 'mysql',    color: '#00758F', x: 18, y: 68,  size: 46, speed: 0.26, drift: 0.5  },
  { icon: 'html',     color: '#E44D26', x: 62, y: 78,  size: 50, speed: 0.44, drift: 0.32 },
  { icon: 'git',      color: '#F05032', x: 35, y: 82,  size: 46, speed: 0.36, drift: 0.42 },
];

function getSVG(type, color, size) {
  const s = size;
  const svgs = {
    react: `<svg width="${s}" height="${s}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="9" fill="${color}"/>
      <ellipse cx="50" cy="50" rx="46" ry="17" fill="none" stroke="${color}" stroke-width="3.5"/>
      <ellipse cx="50" cy="50" rx="46" ry="17" fill="none" stroke="${color}" stroke-width="3.5" transform="rotate(60 50 50)"/>
      <ellipse cx="50" cy="50" rx="46" ry="17" fill="none" stroke="${color}" stroke-width="3.5" transform="rotate(120 50 50)"/>
    </svg>`,

    js: `<svg width="${s}" height="${s}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="14" fill="${color}" opacity=".18" stroke="${color}" stroke-width="3"/>
      <text x="50" y="66" text-anchor="middle" font-size="46" font-weight="bold" fill="${color}" font-family="monospace">JS</text>
    </svg>`,

    node: `<svg width="${s}" height="${s}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,6 92,28 92,72 50,94 8,72 8,28" fill="none" stroke="${color}" stroke-width="3.5"/>
      <text x="50" y="56" text-anchor="middle" font-size="16" fill="${color}" font-family="monospace" font-weight="bold">NODE</text>
      <text x="50" y="72" text-anchor="middle" font-size="13" fill="${color}" font-family="monospace" opacity=".7">.JS</text>
    </svg>`,

    java: `<svg width="${s}" height="${s}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M38 72 Q32 54 48 43 Q37 60 52 66 Q67 60 56 43 Q72 54 62 72" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M30 83 Q50 76 70 83" fill="none" stroke="${color}" stroke-width="3"/>
      <path d="M35 92 Q50 86 65 92" fill="none" stroke="${color}" stroke-width="2.5" opacity=".6"/>
      <text x="50" y="32" text-anchor="middle" font-size="15" fill="${color}" font-family="monospace" font-weight="bold">JAVA</text>
    </svg>`,

    html: `<svg width="${s}" height="${s}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="12,4 88,4 80,90 50,98 20,90" fill="none" stroke="${color}" stroke-width="3.5"/>
      <text x="50" y="58" text-anchor="middle" font-size="20" fill="${color}" font-family="monospace" font-weight="bold">HTML</text>
      <text x="50" y="76" text-anchor="middle" font-size="14" fill="${color}" font-family="monospace" opacity=".6">5</text>
    </svg>`,

    css: `<svg width="${s}" height="${s}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="12,4 88,4 80,90 50,98 20,90" fill="none" stroke="${color}" stroke-width="3.5"/>
      <text x="50" y="58" text-anchor="middle" font-size="22" fill="${color}" font-family="monospace" font-weight="bold">CSS</text>
      <text x="50" y="76" text-anchor="middle" font-size="14" fill="${color}" font-family="monospace" opacity=".6">3</text>
    </svg>`,

    git: `<svg width="${s}" height="${s}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="76" cy="24" r="13" fill="none" stroke="${color}" stroke-width="3.5"/>
      <circle cx="76" cy="76" r="13" fill="none" stroke="${color}" stroke-width="3.5"/>
      <circle cx="24" cy="76" r="13" fill="none" stroke="${color}" stroke-width="3.5"/>
      <line x1="76" y1="37" x2="76" y2="63" stroke="${color}" stroke-width="3"/>
      <path d="M24 63 Q24 38 63 27" fill="none" stroke="${color}" stroke-width="3"/>
    </svg>`,

    firebase: `<svg width="${s}" height="${s}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="28,92 8,56 34,18 44,46" fill="none" stroke="${color}" stroke-width="3.5" stroke-linejoin="round"/>
      <polygon points="72,92 92,56 66,18 56,46" fill="none" stroke="${color}" stroke-width="3.5" stroke-linejoin="round"/>
      <polygon points="28,92 72,92 50,8" fill="none" stroke="${color}" stroke-width="2.5" opacity=".5" stroke-linejoin="round"/>
    </svg>`,

    ts: `<svg width="${s}" height="${s}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="14" fill="${color}" opacity=".18" stroke="${color}" stroke-width="3"/>
      <text x="50" y="66" text-anchor="middle" font-size="46" font-weight="bold" fill="${color}" font-family="monospace">TS</text>
    </svg>`,

    mysql: `<svg width="${s}" height="${s}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="24" rx="38" ry="13" fill="none" stroke="${color}" stroke-width="3.5"/>
      <rect x="12" y="24" width="76" height="52" fill="none" stroke="${color}" stroke-width="3.5"/>
      <ellipse cx="50" cy="76" rx="38" ry="13" fill="none" stroke="${color}" stroke-width="3.5"/>
      <ellipse cx="50" cy="50" rx="38" ry="13" fill="none" stroke="${color}" stroke-width="2.5" opacity=".5"/>
    </svg>`,
  };
  return svgs[type];
}

export default function App() {
  const active = useActiveSection();
  const scrollRef = useRef(0);
  useReveal();
  useCursorGlow();

  useEffect(() => {
    // create container
    const container = document.createElement('div');
    container.id = 'bg-icons';
    container.style.cssText = `
      position: fixed; inset: 0;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
    `;
    document.body.appendChild(container);

    // create each icon element
    const elements = ICONS.map(ic => {
      const wrapper = document.createElement('div');
     wrapper.style.cssText = `
  position: absolute;
  left: ${ic.x}%;
  top: ${ic.y}%;
  opacity: 0.25;
  will-change: transform;
  filter: drop-shadow(0 0 6px ${ic.color}90) drop-shadow(0 0 14px ${ic.color}50);
  transition: opacity .3s;
`;
      wrapper.innerHTML = getSVG(ic.icon, ic.color, ic.size);
      container.appendChild(wrapper);
      return { el: wrapper, ...ic };
    });

    // scroll handler
    const onScroll = () => {
      const sy = window.scrollY;
      scrollRef.current = sy;
      elements.forEach((ic, i) => {
        const rot   = sy * ic.speed * 0.06;
        const driftY = Math.sin(sy * 0.004 + i) * 14;
        const driftX = Math.cos(sy * 0.003 + i) * 8;
        ic.el.style.transform = `rotate(${rot}deg) translate(${driftX}px, ${driftY}px)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      container.remove();
    };
  }, []);

  return (
    <>
      <div id="cursor-glow" />
      <Nav active={active} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}