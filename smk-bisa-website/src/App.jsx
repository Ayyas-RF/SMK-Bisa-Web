import React, { useState } from 'react';
import { ChevronDown, Users, Award, Target, BookOpen, Phone, Mail, MapPin, Star, Clock, TrendingUp, CheckCircle, Menu, X } from 'lucide-react';

const SMKBisaWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-orange-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">
              <span className="text-white">SMK</span>
              <span className="text-orange-500">Bisa</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Beranda', 'Tentang', 'Program', 'Mitra', 'Testimoni', 'Kontak'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-orange-500 transition-colors">
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-orange-500/20">
              {['Beranda', 'Tentang', 'Program', 'Mitra', 'Testimoni', 'Kontak'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="block py-2 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-orange-900/20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">SMK Bisa:</span><br />
            <span className="text-orange-500">Jembatan Nyata SMK</span><br />
            <span className="text-white">dan Industri Digital</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Mencetak lulusan siap kerja, adaptif, unggul di era digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Daftar Program
            </button>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tentang <span className="text-orange-500">SMK Bisa</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-500">Visi</h3>
              <p className="text-gray-300 mb-6">
                Menjadi pusat pendidikan vokasi digital terdepan yang menghasilkan lulusan berkompeten tinggi dan siap menghadapi tantangan industri 4.0.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-orange-500">Misi</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Menyediakan pendidikan vokasi digital berkualitas tinggi</li>
                <li>• Membangun jembatan antara dunia pendidikan dan industri</li>
                <li>• Mengembangkan karakter dan soft skill peserta didik</li>
                <li>• Menciptakan ekosistem pembelajaran yang inovatif</li>
              </ul>
            </div>
            
            <div className="bg-black/50 p-8 rounded-lg border border-orange-500/20">
              <h3 className="text-2xl font-bold mb-6 text-orange-500">Profil Perusahaan</h3>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kenapa Memilih <span className="text-orange-500">SMK Bisa?</span>
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
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/50 transition-colors">
                <item.icon className="text-orange-500 mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 p-8 rounded-lg border border-orange-500/20">
            <h3 className="text-2xl font-bold mb-6 text-orange-500">Keunggulan Khusus</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">💰</div>
                <h4 className="font-bold mb-2">Uang Saku</h4>
                <p className="text-gray-300">Peserta mendapat uang saku selama program</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">🚀</div>
                <h4 className="font-bold mb-2">Project Real</h4>
                <p className="text-gray-300">Mengerjakan project nyata dari industri</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">🤝</div>
                <h4 className="font-bold mb-2">Kolaborasi UMKM</h4>
                <p className="text-gray-300">Kesempatan berkolaborasi dengan UMKM</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Gabung Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Program Utama */}
      <section id="program" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Program <span className="text-orange-500">Utama</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Prakerin 4.5 Bulan */}
            <div className="bg-black p-8 rounded-lg border border-orange-500/20">
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
            <div className="bg-black p-8 rounded-lg border border-orange-500/20">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Apa Kata <span className="text-orange-500">Siswa & Guru</span>
            </h2>
          </div>

          <div className="relative">
            <div className="bg-gray-900 p-8 rounded-lg border border-orange-500/20">
              <div className="flex items-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-orange-500 fill-current" size={24} />
                ))}
              </div>
              
              <p className="text-xl text-gray-300 mb-6 italic">
                "{testimonials[activeTestimonial].text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
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
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeTestimonial === index ? 'bg-orange-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Gabung Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              FAQ <span className="text-orange-500">Pertanyaan Umum</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-orange-500/20">
                <h3 className="text-xl font-bold mb-3 text-orange-500">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ajakan Bergabung */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 p-8 rounded-lg border border-orange-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Jangan Sampai <span className="text-orange-500">Terlewat!</span>
            </h2>
            
            <div className="bg-red-500/20 border border-red-500/50 p-4 rounded-lg mb-6">
              <p className="text-lg font-bold text-red-400 mb-2">⚠️ KUOTA TERBATAS ⚠️</p>
              <p className="text-gray-300">Hanya tersedia 50 slot untuk periode ini. Daftarkan diri Anda sekarang sebelum kehabisan!</p>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              Bergabunglah dengan ribuan siswa yang sudah merasakan dampak nyata dari program SMK Bisa. 
              Raih kesempatan emas untuk mengembangkan skill digital dan meraih penghasilan di usia muda!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Daftar Program Sekarang
              </button>
              <button className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center">
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
                  <span className="text-gray-400">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-orange-500 mr-3" size={20} />
                  <span className="text-gray-400">info@smkbisa.com</span>
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