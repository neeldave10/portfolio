import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-20 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400">Neel Dave</h1>
        <ul className="flex space-x-6 font-semibold">
          <li><a href="#about" className="hover:text-yellow-300">About</a></li>
          <li><a href="#skills" className="hover:text-yellow-300">Skills</a></li>
          <li><a href="#experience" className="hover:text-yellow-300">Experience</a></li>
          <li><a href="#projects" className="hover:text-yellow-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
