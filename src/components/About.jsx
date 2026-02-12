import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 max-w-6xl mx-auto px-6 relative z-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-10 text-yellow-300 text-center"
      >
        👨‍💻 About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl"
      >
        <p className="text-lg leading-relaxed text-gray-200">
          I’m a <span className="text-yellow-400 font-semibold">Data Engineer</span> 
          with 3+ years of experience building scalable ETL/ELT pipelines,
          cloud-native data platforms, and analytics-ready datasets.
        </p>

        <p className="text-lg leading-relaxed text-gray-200 mt-6">
          I specialize in <span className="text-blue-400">Python</span>, 
          <span className="text-green-400"> SQL</span>, 
          <span className="text-purple-400"> AWS</span>, 
          <span className="text-pink-400"> Snowflake</span>, and 
          <span className="text-cyan-400"> dbt</span>.
        </p>

        <p className="text-lg leading-relaxed text-gray-200 mt-6">
          I love designing event-driven architectures, streaming pipelines,
          and transforming raw data into powerful business insights.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
