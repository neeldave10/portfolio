import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/50 text-gray-800 p-5 flex justify-between items-center border-b border-gray-300">
      <h1 className="text-2xl font-extrabold tracking-wider text-blue-600">Neel Rakesh Dave</h1>
      <nav className="space-x-6 text-sm uppercase tracking-widest">
        <a href="#skills" className="hover:text-pink-500 transition">Skills</a>
        <a href="#experience" className="hover:text-purple-500 transition">Experience</a>
        <a href="#projects" className="hover:text-yellow-500 transition">Projects</a>
        <a href="#pipeline" className="hover:text-green-500 transition">Pipeline</a>
        <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
      </nav>
    </header>
  );
}
