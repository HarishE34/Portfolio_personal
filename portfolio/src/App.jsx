import { useEffect } from 'react';
import { useReveal, useCursorGlow, useActiveSection } from './hooks';
import Nav      from './components/Nav';
import Hero     from './components/Hero';
import About    from './components/About';
import Skills   from './components/Skills';
import Projects from './components/Projects';
import Contact  from './components/Contact';
import Footer   from './components/Footer';

export default function App() {
  const active = useActiveSection();
  useReveal();
  useCursorGlow();

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
