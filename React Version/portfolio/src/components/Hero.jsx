import React from 'react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-white px-6 text-center"
    >
      <img
        src="/joshPhoto.jpeg"
        alt="Josh Nguyen"
        className="w-36 h-36 rounded-full mb-6 border-4 border-blue-400 shadow-md object-cover"
      />

      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
        Hey, I'm Josh Nguyen
      </h1>

      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
        I’m a software engineer passionate about building elegant, high-performance web apps that solve real-world problems and create seamless user experiences.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 text-sm text-white border border-blue-400 px-5 py-2 rounded-full hover:bg-blue-400 hover:text-black transition"
        >
          Download Resume
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

        <a
          href="https://github.com/joshngn"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1e293b] hover:bg-blue-500 p-2 rounded-full transition"
        >
          <img src="/github-icon.svg" className="w-6 h-6" alt="GitHub" />
        </a>

        <a
          href="https://linkedin.com/in/joshngn"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1e293b] hover:bg-blue-500 p-2 rounded-full transition"
        >
          <img src="/linkedin-icon.svg" className="w-6 h-6" alt="LinkedIn" />
        </a>
      </div>
    </section>
  );
}
