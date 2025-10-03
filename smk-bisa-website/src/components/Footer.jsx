import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
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
              {['Tentang', 'Program', 'Testimoni', 'Kontak'].map((link, index) => (
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
  );
};

export default Footer;
