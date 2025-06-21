import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center relative z-10 pt-28 px-6"
    >
      <img
        src="/dj-developer-portrait.jpg"
        alt="DJ"
        className="w-32 h-32 rounded-full border-4 border-violet-500 shadow-xl mb-6 animate-slide-up-fade"
      />
      <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r text-transparent bg-clip-text from-violet-400 to-indigo-500 animate-fade-in-up tracking-tight drop-shadow-md">
        Hey, I'm DJ 👋
      </h2>
      <p className="text-xl md:text-2xl mt-4 font-light animate-fade-in-up delay-200">Full Stack Web Developer</p>
      <div className="mt-10 animate-bounce-float">
        <a href="#about" className={`${darkMode ? "text-violet-400" : "text-indigo-600"} text-4xl`}>
          ↓
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
