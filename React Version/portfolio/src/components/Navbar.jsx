import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#475b6d] text-white rounded-full shadow-lg px-6 py-4 z-50 flex items-center justify-between w-[95%] max-w-5xl backdrop-blur border border-gray-700">
      <ul className="flex justify-center w-full space-x-16 font-bold text-md">
        <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
        <li><a href="#about" className="hover:text-blue-400 transition">Skills</a></li>
        <li><a href="#experience" className="hover:text-blue-400 transition">Experience</a></li>
        <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
        <li><a href="#blog" className="hover:text-blue-400 transition">Blog</a></li>
        <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
      </ul>


    </nav>
  );
}
