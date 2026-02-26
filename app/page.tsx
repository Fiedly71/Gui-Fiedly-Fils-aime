import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Portfolio from '@/components/sections/Portfolio';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import ScrollToTopButton from '@/components/layout/ScrollToTopButton';
import InstallPrompt from '@/components/pwa/InstallPrompt';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <ScrollToTopButton />
      <InstallPrompt />
    </div>
  );
}
