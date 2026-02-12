import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden px-6">
      {/* Animated background circles */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-yellow-400 opacity-20 rounded-full animate-spin-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400 opacity-20 rounded-full animate-pulse-slow"></div>

      {/* Main Card */}
      <div className="relative bg-gray-900/90 backdrop-blur-lg rounded-3xl shadow-2xl p-12 max-w-md w-full text-center transform transition duration-500 hover:scale-105">
        <h2 className="text-5xl font-extrabold mb-8 text-yellow-400 animate-fadeInDown">
          Contact Me
        </h2>

        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-3 text-white animate-fadeInUp delay-100">
            <FaEnvelope className="text-yellow-400 w-6 h-6 animate-bounce-slow" />
            <a
              href="mailto:neeldave77@gmail.com"
              className="text-blue-400 hover:underline transition-transform duration-300"
            >
              neeldave77@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center space-x-3 text-white animate-fadeInUp delay-200">
            <FaPhone className="text-yellow-400 w-6 h-6 animate-bounce-slow" />
            <a
              href="tel:+12149403092"
              className="text-blue-400 hover:underline transition-transform duration-300"
            >
              +1 214-940-3092
            </a>
          </div>

          <div className="flex items-center justify-center space-x-3 text-white animate-fadeInUp delay-300">
            <FaGithub className="text-yellow-400 w-6 h-6 animate-bounce-slow" />
            <a
  href="https://github.com/neeldave10"
  target="_blank"
  rel="noopener noreferrer"
>
              github.com/neeldave10
            </a>
          </div>

          <div className="flex items-center justify-center space-x-3 text-white animate-fadeInUp delay-400">
            <FaLinkedin className="text-yellow-400 w-6 h-6 animate-bounce-slow" />
            <a
  href="https://linkedin.com/in/neel-rakesh-dave"
  target="_blank"
  rel="noopener noreferrer"
>
              linkedin.com/in/neel-rakesh-dave
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
