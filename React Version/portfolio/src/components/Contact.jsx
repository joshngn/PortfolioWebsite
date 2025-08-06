import React from 'react';
import { FaGithub, FaGithubAlt, FaLinkedin, FaInstagram, FaFacebook, FaFacebookSquare, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white py-20 px-6">
            <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-12">
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl font-bold">Let's Connect!</h2>
                    <p className="text-gray-400">
                        Got a question, opportunity, want to collaborate, or just want to say hi? Feel free to reach out!
                    </p>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Full Name"
                            className="w-lg p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-lg p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Social Media Links */}
                    <div className="flex gap-4 mt-6">
                        <a href="mailto:joshn0814@gmail.com">
                            <FaEnvelope className="w-6 h-6 hover:text-blue-400" />
                        </a>

                        <a href="https://linkedin.com/in/joshngn" target="_blank" rel=" noreferrer">
                            <FaLinkedin className="w-6 h-6 hover:text-blue-400" />
                        </a>

                        <a href="https://github.com/joshngn" target="_blank" rel=" noreferrer">
                            <FaGithub className="w-6 h-6 hover:text-blue-400" />
                        </a>

                        <a href="https://instagram.com/joshngn" target="_blank" rel=" noreferrer">
                            <FaInstagram className="w-6 h-6 hover:text-blue-400" />
                        </a>

                        <a href="https://www.facebook.com/josh.nguyen.1004837/"
                            target="_blank" rel=" noreferrer">
                            <FaFacebookSquare className="w-6 h-6 hover:text-blue-400" />
                        </a>
                    </div>
                </div>



                {/* Map */}
                <div className="flex-1">
                    <div className="w-full h-80 md:h-120 rounded-2xl overflow-hidden shadow-lg border border-gray-700">
                        <iframe
                            title="UC Irvine ICS Building"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d936.5660125077209!2d-117.84256974386388!3d33.6438493928528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde0fc71458b7%3A0xa0ec499fc2759e5f!2sInformation%20and%20Computer%20Science%20I%20(ICS%201)!5e0!3m2!1sen!2sus!4v1749702860651!5m2!1sen!2sus"
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className="mt-4 bg-gray-900 rounded-lg p-4">
                        <p className="text-sm text-gray-400">Based in</p>
                        <p className="font-semibold">Irvine, CA</p>
                        <p className="text-sm mt-2 text-gray-400">Email</p>
                        <p className="text-blue-300">joshqn@uci.edu</p>
                        <p className="text-sm mt-2 text-gray-400">Phone</p>
                        <p>(408) 886-4596</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
