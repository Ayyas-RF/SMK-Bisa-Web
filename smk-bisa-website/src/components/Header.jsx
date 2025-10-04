import React, { useState, useEffect } from "react";
import useScrollEffect from "../hooks/useScrollEffect";
import { Menu, X } from "lucide-react";
import logo from "../../public/photo.jpg"; // Make sure your logo path is correct

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isScrolled = useScrollEffect();

	// Close the menu if the user resizes the window to desktop
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsMenuOpen(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Lock scroll on body when menu is open
	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isMenuOpen]);

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
						<a href="/" className="flex items-center">
							<img src={logo} alt="SMK Bisa Logo" className="h-10 mr-2" />
							<div className="hidden sm:block h-6 w-px bg-orange-500/30"></div>
							<span className="hidden sm:block ml-3 text-sm text-gray-400 font-medium">
								Digital Education
							</span>
						</a>
					</div>

					{/* Desktop Menu */}
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

					{/* Mobile Menu Toggle Button */}
					<button
						className="md:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-orange-500 transition-colors duration-200 z-50"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? (
							<X className="w-6 h-6 transition-transform duration-300" />
						) : (
							<Menu className="w-6 h-6 transition-transform duration-300" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden absolute top-16 w-full transition-all duration-300 ease-in-out z-40 ${
					isMenuOpen
						? "opacity-100 translate-y-0 visible"
						: "opacity-0 -translate-y-full invisible"
				}`}
			>
				{/* Changed mobile menu background to a more visible gray */}
				<div className="bg-gray-900/95 backdrop-blur-lg border-b border-orange-500/50 shadow-xl shadow-orange-500/20 py-6">
					<div className="px-6 space-y-2">
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
								className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-orange-500/10 rounded-lg transition-all duration-300 transform"
								onClick={() => setIsMenuOpen(false)}
								style={{ transitionDelay: `${index * 50}ms` }}
							>
								{item}
							</a>
						))}
					</div>
					<div className="px-6 pt-6">
						<a
							href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20program%20SMK%20Bisa"
							target="_blank"
							rel="noopener noreferrer"
							className="block w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300"
							onClick={() => setIsMenuOpen(false)}
						>
							Daftar Sekarang
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
