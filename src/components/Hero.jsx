import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4 text-yellow-300"
      >
        Neel Rakesh Dave
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl max-w-2xl mb-6"
      >
        Data Engineer | Full-Stack Developer | AI & Analytics Enthusiast
      </motion.p>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1, duration: 1 }}
        className="flex space-x-6"
      >
        <a href="mailto:neeldave77@gmail.com" className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:scale-105 transition">Email Me</a>
        <a href="https://github.com/neeldave10" target="_blank" className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:scale-105 transition">GitHub</a>
        <a href="https://linkedin.com/in/neel-rakesh-dave" target="_blank" className="px-6 py-3 bg-blue-700 text-white font-bold rounded-lg hover:scale-105 transition">LinkedIn</a>
      </motion.div>
    </section>
  );
};

export default Hero;
