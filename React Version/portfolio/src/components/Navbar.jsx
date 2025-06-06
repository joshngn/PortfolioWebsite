import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#497192] text-white rounded-full shadow-lg px-6 py-2 z-50 flex items-center justify-between w-[95%] max-w-5xl backdrop-blur border border-gray-700">
      <ul className="flex space-x-6 font-semibold text-sm">
        <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
        <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
        <li><a href="#experience" className="hover:text-blue-400 transition">Experience</a></li>
        <li><a href="#portfolio" className="hover:text-blue-400 transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
      </ul>

      {/* Right resume download button */}
      <a
        href="/resume.pdf"
        download
        className="ml-6 flex items-center gap-2 text-sm text-white border border-blue-400 px-4 py-1.5 rounded-full hover:bg-blue-400 hover:text-black transition"
      >
        Download CV
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
          />
        </svg>
      </a>
    </nav>
  );
}
