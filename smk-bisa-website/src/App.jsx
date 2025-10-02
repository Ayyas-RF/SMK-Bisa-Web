import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Users, Award, Target, BookOpen, Phone, Mail, MapPin, Star, Clock, TrendingUp, CheckCircle, Menu, X } from 'lucide-react';

// Try to import AOS, fallback to null if not available
let AOS = null;
try {
  AOS = require('aos');
  require('aos/dist/aos.css');
} catch (error) {
  console.log('AOS not available, using fallback animations');
}

const SMKBisaWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [isScrolled, setIsScrolled] = useState(false);
  const observerRef = useRef(null);

  // AOS handles scroll animations now - old observer removed

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Ensure content is visible after loading
      document.body.classList.add('loaded');
    }, 1500); // Reduced from 2000ms to 1500ms
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize AOS with fallback
  useEffect(() => {
    if (AOS) {
      AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 0,
        anchorPlacement: 'top-bottom',
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
      });

      // Refresh AOS when component mounts
      AOS.refresh();
    } else {
      // Fallback: Add CSS class to enable fallback animations
      document.body.classList.add('aos-fallback');
    }
  }, []);

  // Debug: Log when component mounts
  useEffect(() => {
    console.log('SMK Bisa Website loaded successfully');
    console.log('Sections available:', ['beranda', 'tentang', 'program', 'mitra', 'testimoni', 'kontak']);
  }, []);

  const testimonials = [
    {
      name: "Andi Pratama",
      role: "Siswa SMK Telkom Bandung",
      text: "Program prakerin di SMK Bisa benar-benar mengubah cara pandang saya tentang dunia digital. Sekarang akun TikTok saya sudah tembus 50 juta dalam 5 bulan!",
      rating: 5
    },
    {
      name: "Siti Nurhaliza",
      role: "Siswa SMK Pasundan",
      text: "Mentor-mentornya profesional banget, dan uang sakunya juga membantu. Yang paling penting, skill yang didapat langsung applicable di dunia kerja.",
      rating: 5
    },
    {
      name: "Budi Santoso",
      role: "Guru Pembimbing SMK DT Aa Gym",
      text: "Kolaborasi dengan SMK Bisa sangat membantu siswa kami mendapatkan pengalaman nyata di industri digital.",
      rating: 5
    }
  ];

  const partners = [
    "Safwan Qur'an", "SMK DT Aa Gym", "SMK Pasundan", "PT Skinsol", "ULBI", "TikTok Indonesia"
  ];

  const faqs = [
    {
      question: "Siapa saja yang bisa ikut program ini?",
      answer: "Siswa SMK dari berbagai jurusan, terutama yang tertarik dengan dunia digital dan teknologi."
    },
    {
      question: "Bagaimana cara mendaftar?",
      answer: "Hubungi admin WhatsApp kami atau klik tombol 'Daftar Program' untuk informasi lebih lanjut."
    },
    {
      question: "Apakah ada biaya untuk mengikuti program?",
      answer: "Tidak ada biaya! Bahkan peserta mendapatkan uang saku selama program prakerin."
    },
    {
      question: "Berapa lama durasi program?",
      answer: "Program prakerin berlangsung selama 4,5 bulan, sedangkan Sekolah Affiliator AI selama 1 tahun."
    }
  ];

  // Loading Screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold mb-4">
            <span className="text-white">SMK</span>
            <span className="gradient-text">Bisa</span>
          </div>
          <div className="text-xl text-gray-300 loading-dots">Loading</div>
          <div className="mt-8 w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-shimmer"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/98 backdrop-blur-xl border-b border-orange-500/20 shadow-xl shadow-orange-500/10' 
          : 'bg-black/95 backdrop-blur-lg border-b border-orange-500/10 shadow-lg shadow-orange-500/5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold tracking-tight logo-glow cursor-pointer">
                <span className="text-white">SMK</span>
                <span className="text-orange-500 ml-1">Bisa</span>
              </div>
              <div className="hidden sm:block ml-3 h-6 w-px bg-orange-500/30"></div>
              <span className="hidden sm:block ml-3 text-sm text-gray-400 font-medium">Digital Education</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {['Beranda', 'Tentang', 'Program', 'Mitra', 'Testimoni', 'Kontak'].map((item, index) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 group-hover:w-full transition-all duration-300 ease-out"></span>
                  <span className="absolute inset-0 bg-orange-500/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 ease-out -z-10"></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20program%20SMK%20Bisa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
              >
                Daftar Sekarang
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-orange-500 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-0 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute top-5 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-4 space-y-1 border-t border-orange-500/10">
              {['Beranda', 'Tentang', 'Program', 'Mitra', 'Testimoni', 'Kontak'].map((item, index) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-orange-500/10 rounded-lg mx-2 transition-all duration-200 transform hover:translate-x-1"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="flex items-center">
                    <span className="w-1 h-1 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {item}
                  </span>
                </a>
              ))}
              <div className="px-2 pt-4">
                <a 
                  href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20program%20SMK%20Bisa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-center px-4 py-3 rounded-lg font-semibold transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-orange-900/20 particle-bg">
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Floating Particles */}
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
            <span className="text-white" data-aos="fade-up" data-aos-delay="200">SMK Bisa:</span><br />
            <span className="gradient-text" data-aos="fade-up" data-aos-delay="400">Jembatan Nyata SMK</span><br />
            <span className="text-white" data-aos="fade-up" data-aos-delay="600">dan Industri Digital</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="800">
            Mencetak lulusan siap kerja, adaptif, unggul di era digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="1000">
            <a href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20program%20SMK%20Bisa" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover-lift hover-glow-strong animate-pulse-custom ripple text-center">
              Daftar Program
            </a>
            <a href="#kontak" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover-lift hover-scale magnetic text-center">
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tentang <span className="gradient-text">SMK Bisa</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-delay="200">
              <h3 className="text-2xl font-bold mb-6 text-orange-500 animate-glow">Visi</h3>
              <p className="text-gray-300 mb-6">
                Menjadi pusat pendidikan vokasi digital terdepan yang menghasilkan lulusan berkompeten tinggi dan siap menghadapi tantangan industri 4.0.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-orange-500 animate-glow">Misi</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="hover-scale" data-aos="fade-up" data-aos-delay="300">• Menyediakan pendidikan vokasi digital berkualitas tinggi</li>
                <li className="hover-scale" data-aos="fade-up" data-aos-delay="400">• Membangun jembatan antara dunia pendidikan dan industri</li>
                <li className="hover-scale" data-aos="fade-up" data-aos-delay="500">• Mengembangkan karakter dan soft skill peserta didik</li>
                <li className="hover-scale" data-aos="fade-up" data-aos-delay="600">• Menciptakan ekosistem pembelajaran yang inovatif</li>
              </ul>
            </div>
            
            <div className="bg-black/50 p-8 rounded-lg border border-orange-500/20 hover-lift card-3d" data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-2xl font-bold mb-6 text-orange-500 neon-glow">Profil Perusahaan</h3>
              <p className="text-gray-300">
                SMK Bisa Corp merupakan divisi edukasi vokasi digital dari ALC Group yang berfokus pada pengembangan talenta digital Indonesia. Kami berkomitmen untuk menciptakan lulusan yang tidak hanya memiliki keterampilan teknis, tetapi juga siap mental menghadapi dunia kerja yang sesungguhnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tujuan & Keunggulan */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kenapa Memilih <span className="gradient-text">SMK Bisa?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: BookOpen, title: "Kurikulum Kekinian", desc: "Pembelajaran mengikuti tren industri digital terbaru" },
              { icon: Users, title: "Mentor Profesional", desc: "Dibimbing langsung oleh praktisi industri berpengalaman" },
              { icon: Target, title: "Kolaborasi Fleksibel", desc: "Kerjasama dengan berbagai sekolah dan perusahaan" },
              { icon: Award, title: "Budaya Disiplin", desc: "Membangun karakter professional dan bertanggung jawab" },
              { icon: TrendingUp, title: "Fokus Dunia Kerja", desc: "Program dirancang sesuai kebutuhan industri nyata" },
              { icon: CheckCircle, title: "Hasil Terukur", desc: "Track record siswa dengan pencapaian nyata" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-900 p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover-lift" 
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <item.icon className="text-orange-500 mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3 hover-scale">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 p-8 rounded-lg border border-orange-500/20" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-bold mb-6 text-orange-500">Keunggulan Khusus</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center" data-aos="flip-up" data-aos-delay="300">
                <div className="text-3xl font-bold text-orange-500 mb-2">💰</div>
                <h4 className="font-bold mb-2">Uang Saku</h4>
                <p className="text-gray-300">Peserta mendapat uang saku selama program</p>
              </div>
              <div className="text-center" data-aos="flip-up" data-aos-delay="400">
                <div className="text-3xl font-bold text-orange-500 mb-2">🚀</div>
                <h4 className="font-bold mb-2">Project Real</h4>
                <p className="text-gray-300">Mengerjakan project nyata dari industri</p>
              </div>
              <div className="text-center" data-aos="flip-up" data-aos-delay="500">
                <div className="text-3xl font-bold text-orange-500 mb-2">🤝</div>
                <h4 className="font-bold mb-2">Kolaborasi UMKM</h4>
                <p className="text-gray-300">Kesempatan berkolaborasi dengan UMKM</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20untuk%20bergabung%20dengan%20SMK%20Bisa" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block">
              Gabung Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Program Utama */}
      <section id="program" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Program <span className="gradient-text">Utama</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Prakerin 4.5 Bulan */}
            <div className="bg-black p-8 rounded-lg border border-orange-500/20 hover-lift" data-aos="fade-right" data-aos-delay="200">
              <div className="flex items-center mb-6">
                <Clock className="text-orange-500 mr-3" size={32} />
                <h3 className="text-2xl font-bold">Prakerin 4,5 Bulan</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-bold text-orange-500 mb-2">Jurusan yang Diterima:</h4>
                  <p className="text-gray-300">Semua jurusan SMK (prioritas: TKJ, MM, RPL, DKV)</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-orange-500 mb-2">Lokasi:</h4>
                  <p className="text-gray-300">Bandung, Jakarta, dan kota-kota besar lainnya</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-orange-500 mb-2">Benefit:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Uang saku bulanan</li>
                    <li>• Sertifikat kompetensi</li>
                    <li>• Pengalaman kerja nyata</li>
                    <li>• Networking industri</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sekolah Affiliator AI */}
            <div className="bg-black p-8 rounded-lg border border-orange-500/20 hover-lift" data-aos="fade-left" data-aos-delay="200">
              <div className="flex items-center mb-6">
                <BookOpen className="text-orange-500 mr-3" size={32} />
                <h3 className="text-2xl font-bold">Sekolah Affiliator AI</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-orange-500 mb-2">Semester 1:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Dasar Digital Marketing</li>
                    <li>• Content Creation</li>
                    <li>• Social Media Management</li>
                    <li>• Basic AI Tools</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-orange-500 mb-2">Semester 2:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Advanced AI Marketing</li>
                    <li>• TikTok Ads Mastery</li>
                    <li>• Digital Entrepreneurship</li>
                    <li>• Project Portfolio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Program Tambahan */}
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 p-8 rounded-lg border border-orange-500/20">
            <h3 className="text-2xl font-bold mb-6 text-orange-500">Program Tambahan</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">👨‍🏫 Guru Tamu Industri</h4>
                <p className="text-gray-300">Sharing session dengan praktisi industri terkemuka</p>
              </div>
              <div>
                <h4 className="font-bold mb-3">💼 PKWU (Prakarya dan Kewirausahaan)</h4>
                <p className="text-gray-300">Pengembangan jiwa entrepreneur dan keterampilan bisnis</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Lihat Detail Program
            </button>
          </div>
        </div>
      </section>

      {/* Output Program */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Output <span className="text-orange-500">Program</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-8 rounded-lg border border-orange-500/20">
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-500 mb-4">60 Juta</div>
                <p className="text-xl text-gray-300 mb-2">Per akun dalam 6 bulan kedua</p>
                <p className="text-gray-400">*Rata-rata pencapaian siswa terbaik</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-500">Skill Outcome:</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Riset Produk", "Produksi Konten", "TikTok Ads", "Digital Entrepreneurship",
                  "Social Media Strategy", "Content Planning", "Analytics & Reporting", "Customer Engagement"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-orange-500 mr-2" size={20} />
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-900 p-8 rounded-lg border border-orange-500/20">
            <h3 className="text-2xl font-bold mb-6 text-orange-500 text-center">Prestasi Siswa</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">150+</div>
                <p className="text-gray-300">Siswa Lulus Program</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">85%</div>
                <p className="text-gray-300">Tingkat Keberhasilan</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                <p className="text-gray-300">Akun TikTok Berhasil</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mitra & Kolaborasi */}
      <section id="mitra" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mitra & <span className="text-orange-500">Kolaborasi</span>
            </h2>
            <p className="text-gray-300 text-lg">Dipercaya oleh berbagai institusi dan perusahaan terkemuka</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {partners.map((partner, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-orange-500/20 flex items-center justify-center hover:border-orange-500/50 transition-colors">
                <span className="text-center font-semibold text-gray-300">{partner}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 p-8 rounded-lg border border-orange-500/20 text-center">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Bergabunglah dengan Kami!</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Sekolah dan industri yang ingin berkolaborasi, silakan hubungi kami untuk membangun ekosistem pendidikan digital yang lebih kuat.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Ajukan Kerjasama
            </button>
          </div>
        </div>
      </section>

      {/* Testimoni */}
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              FAQ <span className="gradient-text">Pertanyaan Umum</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-black p-6 rounded-lg border border-orange-500/20 hover-lift" 
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold mb-3 text-orange-500 hover-scale">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ajakan Bergabung */}
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

      {/* Footer */}
      <footer id="kontak" className="bg-gray-900 py-12 border-t border-orange-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">SMK</span>
                <span className="text-orange-500">Bisa</span>
              </div>
              <p className="text-gray-400 mb-4">
                Divisi edukasi vokasi digital ALC Group yang berkomitmen mencetak talenta digital Indonesia.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                  <span className="text-white font-bold">TT</span>
                </div>
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                  <span className="text-white font-bold">IG</span>
                </div>
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                  <span className="text-white font-bold">YT</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">Quick Links</h3>
              <ul className="space-y-2">
                {['Tentang Kami', 'Program Utama', 'Testimoni', 'Kontak'].map((link, index) => (
                  <li key={index}>
                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-orange-500 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">Kontak</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="text-orange-500 mr-3" size={20} />
                  <span className="text-gray-400">Jl. Contoh No. 123, Bandung, Jawa Barat</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-orange-500 mr-3" size={20} />
                  <a href="tel:+6281234567890" className="text-gray-400 hover:text-orange-500 transition-colors">+62 812-3456-7890</a>
                </div>
                <div className="flex items-center">
                  <Mail className="text-orange-500 mr-3" size={20} />
                  <a href="mailto:info@smkbisa.com" className="text-gray-400 hover:text-orange-500 transition-colors">info@smkbisa.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-orange-500/20 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 SMK Bisa Corp. All rights reserved. | 
              <a href="#" className="text-orange-500 hover:text-orange-400 ml-2">Kebijakan Privasi</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SMKBisaWebsite;