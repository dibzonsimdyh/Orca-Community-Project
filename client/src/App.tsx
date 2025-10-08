import { Outlet } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';

import './index.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import Stats from './components/Stats';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <div>
      <Navbar />
        <Hero />
        <AboutSection />
        <Stats />
        <Testimonials />
        <Outlet />
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default App;
