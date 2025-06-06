import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience'; // Make sure this is now a default export

export default function App() {
  return (
    <div className="font-sans scroll-smooth bg-[#3b3b3b] text-white">
      <Navbar />
      <Hero />
      <Experience />

      {/* Add more sections later */}
      <footer className="text-center text-sm text-gray-500 py-10">
        © 2025 Josh Nguyen. All rights reserved.
      </footer>
    </div>
  );
}
