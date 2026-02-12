import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const generateMockData = () => ({
  users: Math.floor(Math.random() * 500 + 500),
  revenue: Math.floor(Math.random() * 5000 + 10000),
  errors: Math.floor(Math.random() * 20),
  time: new Date().toLocaleTimeString().slice(3, 8),
});

const otherProjects = [
  {
    name: "GenAI Loan Application Bot",
    description: "Locally hosted GenAI assistant for loan eligibility checks and queries.",
    link: "https://github.com/neeldave10/GenAI-Loan-Application-bot"
  },
  {
    name: "MedLaunch – Facility Metrics Pipeline",
    description: "Built a serverless AWS analytics pipeline using S3, Athena, and Lambda to ingest nested facility JSON data, normalize it via CTAS into Parquet, and generate state-level healthcare metrics for analytics and reporting.",
    link: "https://github.com/neeldave10/medlaunch-data-engineer"
  },
  {
    name: "Customer Sentiment Analysis for Service Feedback",
    description: "Built a speech-to-text sentiment analysis pipeline using Python to process customer feedback, extracting satisfaction scores and categorizing customers into High Satisfaction, Neutral, and Upset segments.",
    link: "https://github.com/neeldave10/Customer-Engagement-Improver"
  }
];

const Projects = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = generateMockData();
      setDashboardData((prev) => [...prev.slice(-9), newData]);
      setParticles((prev) => [...prev, { id: Math.random() }]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => prev.slice(1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-6 relative z-10">
      <h2 className="text-4xl font-bold mb-12 text-yellow-300 text-center">
        Projects
      </h2>

      {/* FEATURED PROJECT */}
      <div className="bg-gradient-to-r from-purple-800 via-pink-700 to-indigo-900 p-10 rounded-3xl shadow-2xl mb-20 relative overflow-hidden">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row items-center gap-10"
        >
          <div className="flex-1">
            <h3 className="text-4xl font-bold text-yellow-400 mb-4">
              🚀 Hommies - AI Roommate Finder
            </h3>
            <p className="text-white text-lg mb-6">
              AI-powered mobile app helping you find compatible roommates with smart matching algorithms, chat, house comparisons, and gamified interactions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/neeldave10/hommies"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:scale-105 transition"
              >
                View on GitHub
              </a>
              <button
                onClick={() => alert("Live demo coming soon!")}
                className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:scale-105 transition"
              >
                Live Demo
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://via.placeholder.com/250x500.png?text=Hommies+App"
              className="rounded-xl shadow-lg animate-bounce"
              alt="Hommies App Preview"
            />
          </div>
        </motion.div>
      </div>

      {/* PIPELINE SECTION */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-black p-10 rounded-3xl shadow-2xl mb-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-black/40 p-8 rounded-xl shadow-2xl"
        >
          <div className="flex items-center justify-between flex-col lg:flex-row gap-10">
            {/* DATA SOURCE */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold text-white mb-4">Data Source</h3>
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                API
              </div>
            </div>

            {/* PIPELINE FLOW */}
            <div className="relative w-full lg:w-[600px] h-48">
              <svg width="100%" height="100%" viewBox="0 0 600 150" className="overflow-visible">
                <path
                  d="M0 75 Q150 0 300 75 Q450 150 600 75"
                  stroke="#555"
                  strokeWidth="40"
                  strokeLinecap="round"
                  fill="transparent"
                />

                {particles.map((p, i) => (
                  <motion.circle
                    key={p.id}
                    r="8"
                    fill="#34D399"
                    initial={{ offsetDistance: "0%" }}
                    animate={{ offsetDistance: "100%" }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.3
                    }}
                    style={{
                      offsetPath:
                        "path('M0 75 Q150 0 300 75 Q450 150 600 75')"
                    }}
                  />
                ))}
              </svg>
            </div>

            {/* DASHBOARD */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold text-white mb-4">Dashboard</h3>
              <div className="w-72 h-72 bg-white rounded-lg shadow p-4">
                <p className="text-gray-800 font-semibold">
                  Latest Users: {dashboardData[dashboardData.length - 1]?.users || 0}
                </p>
                <p className="text-gray-800 font-semibold">
                  Latest Revenue: ${dashboardData[dashboardData.length - 1]?.revenue || 0}
                </p>
                <p className="text-gray-800 font-semibold">
                  Errors: {dashboardData[dashboardData.length - 1]?.errors || 0}
                </p>
                <LineChart
                  width={260}
                  height={160}
                  data={dashboardData}
                  margin={{ top: 10, right: 10, bottom: 0, left: -10 }}
                >
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="users" stroke="#8884d8" />
                  <Line type="monotone" dataKey="revenue" stroke="#34D399" />
                </LineChart>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* OTHER PROJECTS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherProjects.map((proj, i) => (
          <motion.a
            key={i}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/30 p-6 rounded-lg shadow-lg hover:scale-105 transition flex flex-col justify-between"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-yellow-300">
              {proj.name}
            </h3>
            <p className="text-white mb-4">{proj.description}</p>
            <span className="text-blue-400 font-bold">View on GitHub</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
