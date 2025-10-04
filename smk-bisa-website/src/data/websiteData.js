import safwan from "../assets/safwan.png"
import dt from "../assets/dt.png"
import pas from "../assets/pas.png"
import ulbi from "../assets/ulbi.png"
import tt from "../assets/tt.svg"
import skinsol from "../assets/skinsol.png"

export const testimonials = [
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
		role: "Guru Pembimbing SMK Daarut Tauhiid",
		text: "Kolaborasi dengan SMK Bisa sangat membantu siswa kami mendapatkan pengalaman nyata di industri digital.",
		rating: 5
	}
];

export const partners = [
	{ name: 'Safwan Quran', image: safwan },
	{ name: 'SMK DT', image: dt },
	{ name: 'SMK Pasundan', image: pas },
	{ name: 'PT Skinsol', image: skinsol },
	{ name: 'ULBI', image: ulbi },
	{ name: 'TikTok Indonesia', image: tt }
];

export const faqs = [
	{
		question: "Siapa saja yang bisa ikut program ini?",
		answer:
			"Siswa SMK dari berbagai jurusan, terutama yang tertarik dengan dunia digital dan teknologi."
	},
	{
		question: "Bagaimana cara mendaftar?",
		answer:
			"Hubungi admin WhatsApp kami atau klik tombol 'Daftar Program' untuk informasi lebih lanjut."
	},
	{
		question: "Apakah ada biaya untuk mengikuti program?",
		answer:
			"Tidak ada biaya! Bahkan peserta mendapatkan uang saku selama program prakerin."
	},
	{
		question: "Berapa lama durasi program?",
		answer:
			"Program prakerin berlangsung selama 4,5 bulan, sedangkan Sekolah Affiliator AI selama 1 tahun."
	}
];

export const heroButtons = [
	{
		text: "Daftar Program",
		href: "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20program%20SMK%20Bisa",
		className:
			"bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover-lift hover-glow-strong animate-pulse-custom ripple text-center",
		target: "_blank"
	},
	{
		text: "Hubungi Kami",
		href: "#kontak",
		className:
			"border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover-lift hover-scale magnetic text-center"
	}
];

export const programs = {
	prakerin: {
		title: "Prakerin 4,5 Bulan",
		details: [
			{
				subtitle: "Jurusan yang Diterima:",
				text: "Semua jurusan SMK (prioritas: TKJ, MM, RPL, DKV)"
			},
			{
				subtitle: "Lokasi:",
				text: "Bandung, Jakarta, dan kota-kota besar lainnya"
			},
			{
				subtitle: "Benefit:",
				list: [
					"Uang saku bulanan",
					"Sertifikat kompetensi",
					"Pengalaman kerja nyata",
					"Networking industri"
				]
			}
		]
	},
	affiliator: {
		title: "Sekolah Affiliator AI",
		details: [
			{
				subtitle: "Semester 1:",
				list: [
					"Dasar Digital Marketing",
					"Content Creation",
					"Social Media Management",
					"Basic AI Tools"
				]
			},
			{
				subtitle: "Semester 2:",
				list: [
					"Advanced AI Marketing",
					"TikTok Ads Mastery",
					"Digital Entrepreneurship",
					"Project Portfolio"
				]
			}
		]
	}
};

export const advantages = [
	{
		icon: "BookOpen",
		title: "Kurikulum Kekinian",
		desc: "Pembelajaran mengikuti tren industri digital terbaru"
	},
	{
		icon: "Users",
		title: "Mentor Profesional",
		desc: "Dibimbing langsung oleh praktisi industri berpengalaman"
	},
	{
		icon: "Target",
		title: "Kolaborasi Fleksibel",
		desc: "Kerjasama dengan berbagai sekolah dan perusahaan"
	},
	{
		icon: "Award",
		title: "Budaya Disiplin",
		desc: "Membangun karakter professional dan bertanggung jawab"
	},
	{
		icon: "TrendingUp",
		title: "Fokus Dunia Kerja",
		desc: "Program dirancang sesuai kebutuhan industri nyata"
	},
	{
		icon: "CheckCircle",
		title: "Hasil Terukur",
		desc: "Track record siswa dengan pencapaian nyata"
	}
];

export const specialAdvantages = [
	{
		icon: "HandCoins",
		title: "Uang Saku",
		desc: "Peserta mendapat uang saku selama program"
	},
	{
		icon: "SquareChartGantt",
		title: "Project Real",
		desc: "Mengerjakan project nyata dari industri"
	},
	{
		icon: "Handshake",
		title: "Kolaborasi UMKM",
		desc: "Kesempatan berkolaborasi dengan UMKM"
	}
];
