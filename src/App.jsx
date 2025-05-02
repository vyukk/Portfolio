import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans scroll-smooth bg-black text-white min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content - Add padding top to avoid navbar overlap */}
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
