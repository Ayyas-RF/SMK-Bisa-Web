import React from "react";
import {
	BookOpen,
	Users,
	Award,
	Target,
	TrendingUp,
	CheckCircle,
	HandCoins,
	SquareChartGantt,
	Handshake
} from "lucide-react";
import { advantages, specialAdvantages } from "../data/websiteData";

const iconMap = {
	BookOpen: BookOpen,
	Users: Users,
	Award: Award,
	Target: Target,
	TrendingUp: TrendingUp,
	CheckCircle: CheckCircle,
	HandCoins: HandCoins,
	SquareChartGantt: SquareChartGantt,
	Handshake: Handshake
};

const About = () => {
	return (
		<>
			<section id="tentang" className="py-16 bg-gray-900">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12" data-aos="fade-up">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Tentang <span className="gradient-text">SMK Bisa</span>
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div data-aos="fade-right" data-aos-delay="200">
							<h3 className="text-2xl font-bold mb-6 text-orange-500">Visi</h3>
							<p className="text-gray-300 mb-6">
								Menjadi pusat pendidikan vokasi digital terdepan yang
								menghasilkan lulusan berkompeten tinggi dan siap menghadapi
								tantangan industri 4.0.
							</p>

							<h3 className="text-2xl font-bold mb-6 text-orange-500">Misi</h3>
							<ul className="text-gray-300 space-y-2">
								<li
									className="hover-scale"
									data-aos="fade-up"
									data-aos-delay="300"
								>
									• Menyediakan pendidikan vokasi digital berkualitas tinggi
								</li>
								<li
									className="hover-scale"
									data-aos="fade-up"
									data-aos-delay="400"
								>
									• Membangun jembatan antara dunia pendidikan dan industri
								</li>
								<li
									className="hover-scale"
									data-aos="fade-up"
									data-aos-delay="500"
								>
									• Mengembangkan karakter dan soft skill peserta didik
								</li>
								<li
									className="hover-scale"
									data-aos="fade-up"
									data-aos-delay="600"
								>
									• Menciptakan ekosistem pembelajaran yang inovatif
								</li>
							</ul>
						</div>

						<div
							className="bg-black/50 p-8 rounded-lg border border-orange-500/20 hover-lift card-3d"
							data-aos="fade-left"
							data-aos-delay="200"
						>
							<h3 className="text-2xl font-bold mb-6 text-orange-500 neon-glow">
								Profil Perusahaan
							</h3>
							<p className="text-gray-300">
								SMK Bisa Corp merupakan divisi edukasi vokasi digital dari ALC
								Group yang berfokus pada pengembangan talenta digital Indonesia.
								Kami berkomitmen untuk menciptakan lulusan yang tidak hanya
								memiliki keterampilan teknis, tetapi juga siap mental menghadapi
								dunia kerja yang sesungguhnya.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-black">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12" data-aos="fade-up">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Kenapa Memilih <span className="gradient-text">SMK Bisa?</span>
						</h2>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						{advantages.map((item, index) => {
							const IconComponent = iconMap[item.icon];
							return (
								<div
									key={index}
									className="bg-gray-900 p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover-lift"
									data-aos="zoom-in"
									data-aos-delay={index * 100}
								>
									{IconComponent && (
										<IconComponent className="text-orange-500 mb-4" size={48} />
									)}
									<h3 className="text-xl font-bold mb-3 hover-scale">
										{item.title}
									</h3>
									<p className="text-gray-300">{item.desc}</p>
								</div>
							);
						})}
					</div>

					<div
						className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 p-8 rounded-lg border border-orange-500/20"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<h3 className="text-2xl font-bold mb-6 text-orange-500">
							Keunggulan Khusus
						</h3>
						<div className="grid md:grid-cols-3 gap-6">
							{specialAdvantages.map((item, index) => {
								const IconComponent = iconMap[item.icon];
								return (
									<div
										key={index}
										className="bg-gray-900 p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover-lift"
										data-aos="zoom-in"
										data-aos-delay={index * 100}
									>
										{IconComponent && (
											<IconComponent
												className="text-orange-500 mb-4"
												size={48}
											/>
										)}
										<h3 className="text-xl font-bold mb-3 hover-scale">
											{item.title}
										</h3>
										<p className="text-gray-300">{item.desc}</p>
									</div>
								);
							})}
						</div>
					</div>

					<div className="text-center mt-8">
						<a
							href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20untuk%20bergabung%20dengan%20SMK%20Bisa"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block"
						>
							Gabung Sekarang
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
