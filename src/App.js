import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <div className="relative bg-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Sections */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
