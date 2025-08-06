import React from "react";
import { FaHtml5, FaJava, FaPython, FaReact, FaCss3Alt, FaGithub, FaJs, FaFigma } from "react-icons/fa";

export default function Experience() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Python", icon: <FaPython className="text-yellow-300" /> },
    { name: "Java", icon: <FaJava className="text-red-600" /> },
    { name: "Git", icon: <FaGithub className="text-orange-700" /> },
    { name: "Figma", icon: <FaFigma className="text-blue-500" /> }
  ]
  return (
    <section id="about" className="bg-gray-950 text-white py-20 px-6 border-t border-gray-800">
    <div className="max-w-5xl mx-auto space-y-16">

        {/* About Me */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-[#a6a6a6] text-md md:text-lg max-w-3xl mx-auto">
            Nice to meet you! I'm Josh Nguyen, a software engineer based in California with a passion for clean UI, intuitive UX,
            and building full-stack applications that make a difference. Outside of coding, I enjoy exploring new cuisines,
            attending music festivals, and adventuring.
          </p>
        </div>

        {/* Skills Grid */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="text-5xl">{skill.icon}</div>
                <p className="text-sm text-gray-300">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
