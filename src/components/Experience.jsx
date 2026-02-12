import React from "react";

const experiences = [
  {
    title: "Data Engineer - Intercultural Programs at UTD",
    duration: "May 2025 - Present",
    points: [
      "Analyzed 5,000+ student engagement records using SQL and Power BI.",
      "Built interactive Tableau dashboards, improving strategy and resource allocation by 25%.",
      "Built fault-tolerant ETL workflows reducing analytics inconsistencies by 30%."
    ]
  },
  {
    title: "Digital Data Engineer - Infosys Limited",
    duration: "June 2022 – August 2024",
    points: [
      "Designed and deployed 30+ RESTful APIs using Spring MVC and AWS.",
      "Built event-driven microservices with RabbitMQ & AWS Kinesis.",
      "Modeled data in Snowflake using dbt, implementing CI/CD pipelines.",
      "Built batch and streaming data pipelines for real-time analytics."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 max-w-6xl mx-auto px-6 relative z-10">
      <h2 className="text-4xl font-bold mb-6 text-yellow-300 text-center">
  Work Experience
</h2>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, i) => (
          <div key={i} className="bg-black/30 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
            <p className="text-yellow-400 mb-3">{exp.duration}</p>
            <ul className="list-disc pl-5 space-y-1">
              {exp.points.map((p, idx) => <li key={idx}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
