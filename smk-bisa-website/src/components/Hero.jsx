import React from "react";
import { heroButtons } from "../data/websiteData";

const Hero = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-orange-900/20 particle-bg"
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-white" data-aos="fade-up" data-aos-delay="200">
            SMK Bisa:
          </span>
          <br />
          <span
            className="gradient-text"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Jembatan Nyata SMK
          </span>
          <br />
          <span className="text-white" data-aos="fade-up" data-aos-delay="600">
            dan Industri Digital
          </span>
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Mencetak lulusan siap kerja, adaptif, unggul di era digital
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          {heroButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              target={button.target}
              rel={
                button.target === "_blank" ? "noopener noreferrer" : undefined
              }
              className={button.className}
            >
              {button.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
