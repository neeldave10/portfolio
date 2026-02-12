import React from "react";

const skills = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Snowflake", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/snowflake/snowflake-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kafka", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-6 relative z-10">
      <h2 className="text-4xl font-bold mb-10 text-yellow-300 text-center">
        ⚡ Technical Arsenal
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white/10 backdrop-blur-lg p-6 rounded-2xl 
                       hover:scale-110 hover:shadow-2xl transition duration-300"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-16 h-16 mb-4"
            />
            <span className="text-white font-semibold text-lg">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
