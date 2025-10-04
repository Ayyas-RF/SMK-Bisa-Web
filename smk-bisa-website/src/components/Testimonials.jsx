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
          {/* Main container with consistent height */}
          <div className="bg-gray-900 p-8 rounded-lg border border-orange-500/20 hover-lift transition-all duration-500 min-h-[350px] md:min-h-[300px] flex flex-col justify-center">
            {/* Wrapper for the testimonials that will be stacked */}
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  // This is the core logic:
                  // The active testimonial is visible, others are hidden but still occupy space in a layer.
                  // The transition makes the change smooth.
                  className={`transition-opacity duration-700 ease-in-out ${
                    activeTestimonial === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 w-full'
                  }`}
                >
                  {/* We only render the content if it's the active testimonial to avoid invisible elements from being interactive */}
                  {activeTestimonial === index && (
                    <div>
                      <div className="flex items-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="text-orange-500 fill-current"
                            size={24}
                          />
                        ))}
                      </div>

                      <p className="text-xl text-gray-300 mb-6 italic">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{testimonial.name}</h4>
                          <p className="text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover-scale ${
                  activeTestimonial === index ? 'bg-orange-500' : 'bg-gray-600 hover:bg-gray-500'
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
