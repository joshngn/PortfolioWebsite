import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';


export default function App() {
  return (
    <div className="font-sans scroll-smooth bg-[#3b3b3b] text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Contact />



      {/* Add more sections later */}
      <footer className="text-center text-sm text-gray-500 py-10">
        © 2025 Josh Nguyen. All rights reserved.
      </footer>
    </div>
  );
}
