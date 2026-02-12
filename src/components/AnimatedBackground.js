import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const AnimatedBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-20"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // disable full screen because we use absolute positioning
        background: {
          color: { value: "#0f172a" }, // dark blue background
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" }, // click adds particles
            resize: true,
          },
          modes: {
            repulse: { distance: 150, duration: 0.4 },
            push: { quantity: 5 },
          },
        },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: ["#facc15", "#22c55e", "#3b82f6", "#f472b6"] },
          shape: {
            type: ["circle", "triangle", "square", "image"],
            image: [
              {
                src: "https://cdn-icons-png.flaticon.com/512/744/744921.png",
                width: 32,
                height: 32,
              },
              {
                src: "https://cdn-icons-png.flaticon.com/512/4333/4333603.png",
                width: 32,
                height: 32,
              },
            ],
          },
          opacity: { value: 0.7, random: true },
          size: { value: { min: 6, max: 14 }, random: true },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
            attract: { enable: false },
          },
          links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.1, width: 1 },
        },
        detectRetina: true,
      }}
    />
  );
};

export default AnimatedBackground;
