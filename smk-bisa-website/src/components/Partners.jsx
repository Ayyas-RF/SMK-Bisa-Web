import React from "react";
import { partners } from "../data/websiteData";
import "./Partners.css";

const Partners = () => {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="mitra" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mitra & <span className="text-orange-500">Kolaborasi</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Dipercaya oleh berbagai institusi dan perusahaan terkemuka
          </p>
        </div>

        {/* Marquee container with infinite scroll */}
        <div className="marquee-container mb-12">
          <div className="marquee">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="partner-card bg-white p-6 rounded-lg border border-orange-500/20 flex items-center justify-center hover:border-orange-500/50 transition-colors"
              >
                {/* Changed from <span> to <img> */}
                <img
                  src={partner.image}
                  alt={`${partner.name} Logo`}
                  className="max-h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 p-8 rounded-lg border border-orange-500/20 text-center">
          <h3 className="text-2xl font-bold mb-4 text-orange-500">
            Bergabunglah dengan Kami!
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            Sekolah dan industri yang ingin berkolaborasi, silakan hubungi kami
            untuk membangun ekosistem pendidikan digital yang lebih kuat.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Ajukan Kerjasama
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
