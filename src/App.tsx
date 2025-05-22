import { useScrollEffects } from './hooks/useScrollEffects';
import { useFormAndScroll } from './hooks/useFormAndScroll';
// import { useImagePreload } from './hooks/useImagePreload'; // Module not found
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Gallery } from './components/sections/Gallery';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { useImagePreload } from './hooks/useImagePreload';

function App() {
  useScrollEffects();
  useFormAndScroll();
  useImagePreload();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;