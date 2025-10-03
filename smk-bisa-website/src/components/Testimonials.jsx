import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/websiteData';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimoni" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apa Kata <span className="gradient-text">Siswa & Guru</span>
          </h2>
        </div>

        <div className="relative" data-aos="zoom-in" data-aos-delay="200">
          <div className="bg-gray-900 p-8 rounded-lg border border-orange-500/20 hover-lift transition-all duration-500">
            <div className="flex items-center mb-6">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="text-orange-500 fill-current animate-bounce-in"
                  size={24}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            
            <p className="text-xl text-gray-300 mb-6 italic animate-fade-in-up">
              "{testimonials[activeTestimonial].text}"
            </p>
            
            <div className="flex items-center animate-fade-in-left">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 animate-pulse-custom">
                <span className="text-white font-bold">
                  {testimonials[activeTestimonial].name.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-white">{testimonials[activeTestimonial].name}</h4>
                <p className="text-gray-400">{testimonials[activeTestimonial].role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover-scale ${
                  activeTestimonial === index ? 'bg-orange-500 animate-pulse-custom' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8" data-aos="fade-up" data-aos-delay="400">
          <a href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20untuk%20bergabung%20dengan%20SMK%20Bisa" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover-lift hover-glow inline-block">
            Gabung Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
