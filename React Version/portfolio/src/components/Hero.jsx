import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';


export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white px-6 text-center relative overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0"></div>

      <img
        src="/joshPhoto.jpeg"
        alt="Josh Nguyen"
        className="relative z-10 w-36 h-36 rounded-full mb-6 border-4 border-blue-400 shadow-lg object-cover"
      />

      <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold mb-4 tracking-tigeht">
        Hey, I'm Josh Nguyen
      </h1>

      <p className="relative z-10 text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
        I’m a Full Stack software engineer passionate about building elegant, high-performance web apps that solve real-world problems and create seamless user experiences.
      </p>

      <div className="relative z-10 flex flex-wrap justify-center gap-4">
        <a
          href="/JoshResume.pdf"
          download
          className="flex items-center gap-2 text-sm text-white border border-blue-400 px-5 py-2 rounded-full hover:bg-blue-400 hover:text-black transition"
        >
          Download Resumé
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
          <FaGithub className="w-6 h-6" />
        </a>

        <a
          href="https://linkedin.com/in/joshngn"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1e293b] hover:bg-blue-500 p-2 rounded-full transition"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>

        <a
          href="https://www.instagram.com/joshngn?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1e293b] hover:bg-blue-500 p-2 rounded-full transition"
        >
          <FaInstagram className="w-6 h-6" />
        </a>

        <a
          href="https://www.facebook.com/josh.nguyen.1004837/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1e293b] hover:bg-blue-500 p-2 rounded-full transition"
        >
          <FaFacebook className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
