// src/components/ParticlesBackground.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import cloud from "../assets/cloud.png";

const ParticlesBackground = ({ darkMode }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = darkMode
    ? {
        fullScreen: { enable: false },
        background: { color: "#0d1117" },
        particles: {
          number: { value: 100 },
          color: { value: "#ffffff" },
          shape: { type: "star" },
          opacity: { value: 0.7 },
          size: { value: { min: 1, max: 2 } },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }
    : {
        fullScreen: { enable: false },
        background: { color: "#ffffff" },
        particles: {
          number: { value: 12 },
          shape: {
            type: "image",
            image: {
              src: cloud,
              width: 128,
              height: 128,
            },
          },
          opacity: { value: 0.3 },
          size: { value: 80 },
          move: {
            enable: true,
            speed: 0.6,
            direction: "right",
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      };

  return (
    <Particles
      key={darkMode ? "dark" : "light"} // force re-render on mode toggle
      init={particlesInit}
      options={particlesOptions}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default ParticlesBackground;
