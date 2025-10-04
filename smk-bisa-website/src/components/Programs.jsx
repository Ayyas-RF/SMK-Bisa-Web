import React from "react";
import {
  Clock,
  BookOpen,
  CheckCircle,
  School,
  BriefcaseBusiness
} from "lucide-react";
import { programs } from "../data/websiteData";

const Programs = () => {
  return (
    <>
      <section id="program" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Program <span className="gradient-text">Utama</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Prakerin 4.5 Bulan */}
            <div
              className="bg-black p-8 rounded-lg border border-orange-500/20 hover-lift"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-6">
                <Clock className="text-orange-500 mr-3" size={32} />
                <h3 className="text-2xl font-bold">
                  {programs.prakerin.title}
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                {programs.prakerin.details.map((detail, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-orange-500 mb-2">
                      {detail.subtitle}
                    </h4>
                    {detail.text && (
                      <p className="text-gray-300">{detail.text}</p>
                    )}
                    {detail.list && (
                      <ul className="text-gray-300 space-y-1">
                        {detail.list.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sekolah Affiliator AI */}
            <div
              className="bg-black p-8 rounded-lg border border-orange-500/20 hover-lift"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-6">
                <BookOpen className="text-orange-500 mr-3" size={32} />
                <h3 className="text-2xl font-bold">
                  {programs.affiliator.title}
                </h3>
              </div>

              <div className="space-y-4">
                {programs.affiliator.details.map((detail, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-orange-500 mb-2">
                      {detail.subtitle}
                    </h4>
                    <ul className="text-gray-300 space-y-1">
                      {detail.list.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Program Tambahan */}
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 p-8 rounded-lg border border-orange-500/20">
            <h3 className="text-2xl font-bold mb-6 text-orange-500">
              Program Tambahan
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <School />
                <h4 className="font-bold mb-3 mt-2">Guru Tamu Industri</h4>
                <p className="text-gray-300">
                  Sharing session dengan praktisi industri terkemuka
                </p>
              </div>
              <div>
                <BriefcaseBusiness />
                <h4 className="font-bold mb-3 mt-2">
                  PKWU (Prakarya dan Kewirausahaan)
                </h4>
                <p className="text-gray-300">
                  Pengembangan jiwa entrepreneur dan keterampilan bisnis
                </p>
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
                <div className="text-5xl font-bold text-orange-500 mb-4">
                  60 Juta /
                </div>
                <p className="text-xl text-gray-300 mb-2">Akun dalam 1 tahun</p>
                <p className="text-gray-400">
                  *Rata-rata pencapaian siswa terbaik
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-500">
                Skill Outcome:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Riset Produk",
                  "Produksi Konten",
                  "TikTok Ads",
                  "Digital Entrepreneurship",
                  "Social Media Strategy",
                  "Content Planning",
                  "Analytics & Reporting",
                  "Customer Engagement"
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
            <h3 className="text-2xl font-bold mb-6 text-orange-500 text-center">
              Prestasi Siswa
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  150+
                </div>
                <p className="text-gray-300">Siswa Lulus Program</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  85%
                </div>
                <p className="text-gray-300">Tingkat Keberhasilan</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  50+
                </div>
                <p className="text-gray-300">Akun TikTok Berhasil</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
