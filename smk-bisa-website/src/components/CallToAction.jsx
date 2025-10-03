import React from 'react';
import { Phone } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 p-8 rounded-lg border border-orange-500/20 hover-lift" data-aos="zoom-in" data-aos-delay="200">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-glow">
            Jangan Sampai <span className="gradient-text">Terlewat!</span>
          </h2>
          
          <div className="bg-red-500/20 border border-red-500/50 p-4 rounded-lg mb-6 animate-pulse-custom">
            <p className="text-lg font-bold text-red-400 mb-2 animate-bounce-in">⚠️ KUOTA TERBATAS ⚠️</p>
            <p className="text-gray-300">Hanya tersedia 50 slot untuk periode ini. Daftarkan diri Anda sekarang sebelum kehabisan!</p>
          </div>

          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up">
            Bergabunglah dengan ribuan siswa yang sudah merasakan dampak nyata dari program SMK Bisa. 
            Raih kesempatan emas untuk mengembangkan skill digital dan meraih penghasilan di usia muda!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover-lift hover-glow-strong animate-pulse-custom ripple liquid">
              Daftar Program Sekarang
            </button>
            <button className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover-lift hover-scale magnetic flex items-center justify-center">
              <Phone className="mr-2" size={20} />
              Hubungi Admin WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
