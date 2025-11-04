import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const smoothScroll = (e: MouseEvent) => {
        const target = e.target as HTMLAnchorElement;
        if (target.matches('a[href^="#"]')) {
          e.preventDefault();
          const id = target.getAttribute('href');
          if (id === '#') return;
          
          const element = document.querySelector(id!);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            
            // Update URL without adding to history
            if (id !== '#home') {
              window.history.pushState({}, '', id);
            } else {
              window.history.pushState({}, '', '/');
            }
          }
        }
      };

      document.addEventListener('click', smoothScroll);
      return () => document.removeEventListener('click', smoothScroll);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
