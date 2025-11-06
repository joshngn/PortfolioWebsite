import React from 'react';

export default function Experience() {
  const experiences = [
    {
      role: "Technological Support Specialist",
      company: "AAXA Technologies",
      location: "Irvine, CA",
      period: "September 2023 - Present",
      description: [
        "Provided level 1 technical support for customers, resolving warranty and hardware/software issues across consumer electronics and IT equipment.",
        "Handled end-to-end RMA logistics: receiving, processing, and prepping returns with firmware reflashes, hardware port testing, and optical verification.",
        "Utilized Intuit QuickBooks for inventory tracking and processed real-time product updates using spreadsheets and internal databases."
      ],
      skills: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      role: "Automation Intern",
      company: "Adobe",
      location: "Remote / San Jose, CA",
      period: "June 2022 - September 2022",
      description: [
        "Designed and implemented a Slack extension in Python to streamline team communication and improve workflow efficiency.",
        "Gained valuable mentorship from senior developers, receiving practical guidance on clean coding practices, debugging strategies, and scalable design.",
      ],
      skills: ["Python", "Flask", "Figma"]
    },
    {
      role: "Volunteer",
      company: "CompTechS",
      location: "Cupertino, CA",
      period: "October 2021 - September 2023",
      description: [
        "Collaborated with an on-campus organization specializing in refurbishing computers donated by large tech companies (Apple, Google, Intel) surrounding De Anza College. These refurbished computers are later donated to local elementary schools or libraries, enhancing digital access in underserved communities.",
        "Developed strong troubleshooting and software diagnostic skills while learning to work efficiently in a team-oriented setting.",
    
      ],
      skills: ["Refurbishing", "Troubleshooting", "Teamwork"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">{exp.role}</h3>
                  <p className="text-xl text-blue-400 mb-2">{exp.company}</p>
                </div>
                <div className="text-gray-400 text-sm space-y-1">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skills, i) => (
                  <span 
                    key={i}
                    className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/20"
                  >
                    {skills}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}