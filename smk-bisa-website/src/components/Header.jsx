import React, { useState, useEffect } from "react";
import useScrollEffect from "../hooks/useScrollEffect";
import { Menu, X } from "lucide-react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isScrolled = useScrollEffect();

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				isScrolled
					? "bg-black/98 backdrop-blur-xl border-b border-orange-500/20 shadow-xl shadow-orange-500/10"
					: "bg-black/95 backdrop-blur-lg border-b border-orange-500/10 shadow-lg shadow-orange-500/5"
			}`}
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<div className="text-2xl font-bold tracking-tight logo-glow cursor-pointer">
							<span className="text-white">SMK</span>
							<span className="text-orange-500 ml-1">Bisa</span>
						</div>
						<div className="hidden sm:block ml-3 h-6 w-px bg-orange-500/30"></div>
						<span className="hidden sm:block ml-3 text-sm text-gray-400 font-medium">
							Digital Education
						</span>
					</div>

					<div className="hidden md:flex items-center space-x-1">
						{[
							"Beranda",
							"Tentang",
							"Program",
							"Mitra",
							"Testimoni",
							"Kontak"
						].map(item => (
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

					<button
						className="md:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-orange-500 transition-colors duration-200"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<div className="relative w-6 h-6">
							<span
								className={`absolute top-0 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
									isMenuOpen ? "rotate-45 translate-y-2.5" : ""
								}`}
							></span>
							<span
								className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
									isMenuOpen ? "opacity-0" : ""
								}`}
							></span>
							<span
								className={`absolute top-5 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
									isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
								}`}
							></span>
						</div>
					</button>
				</div>

				<div
					className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
						isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<div className="py-4 space-y-1 border-t border-orange-500/10">
						{[
							"Beranda",
							"Tentang",
							"Program",
							"Mitra",
							"Testimoni",
							"Kontak"
						].map((item, index) => (
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
	);
};

export default Header;
