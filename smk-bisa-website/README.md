# SMK Bisa Website

Sebuah website modern untuk SMK Bisa Corp yang menampilkan program prakerin dan pendidikan vokasi digital.

## Fitur Website

### ✨ Fitur Utama
- **Loading Screen** dengan animasi yang menarik
- **Navigation** responsif dengan mobile menu
- **Hero Section** dengan particle animation
- **Scroll Animations** untuk pengalaman yang smooth
- **Testimoni Carousel** yang auto-rotate
- **FAQ Section** yang informatif
- **Contact Forms** yang terintegrasi dengan WhatsApp

### 📱 Responsive Design
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

### 🎨 Animasi & Efek
- Fade in animations
- Hover effects
- Particle background
- Gradient text animations
- Loading animations
- Scroll reveal animations

## Cara Menjalankan

### Prerequisites
- Node.js (v16 atau lebih baru)
- npm atau yarn

### Instalasi
1. Clone repository ini
2. Masuk ke folder `smk-bisa-website`
3. Install dependencies:
   ```bash
   npm install
   ```

### Development
```bash
npm run dev
```
Website akan berjalan di `http://localhost:5173`

### Build untuk Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Struktur Folder

```
smk-bisa-website/
├── public/
│   ├── favicon.ico
│   └── vite.svg
├── src/
│   ├── App.jsx          # Komponen utama website
│   ├── main.jsx         # Entry point
│   └── index.css        # Styles dan animations
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

## Teknologi yang Digunakan

- **React 19** - UI Framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library
- **CSS Animations** - Custom animations

## Kontak & Links

- **WhatsApp**: +62 812-3456-7890
- **Email**: info@smkbisa.com
- **Website**: [SMK Bisa](https://smkbisa.com)

## Customization

### Mengubah Konten
1. Edit file `src/App.jsx` untuk mengubah teks, gambar, atau struktur
2. Ubah data testimoni, FAQ, atau partner di bagian atas komponen

### Mengubah Styling
1. Edit `src/index.css` untuk custom animations
2. Gunakan Tailwind classes di JSX untuk styling cepat
3. Ubah `tailwind.config.js` untuk custom colors atau breakpoints

### Menambah Halaman
1. Buat komponen baru di folder `src/`
2. Import dan gunakan di `App.jsx`
3. Tambahkan routing jika diperlukan

## Performance Tips

- Semua animasi menggunakan CSS transforms untuk performa optimal
- Images di-lazy load secara default
- Bundle size dioptimasi dengan Vite
- Responsive images untuk berbagai device

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 SMK Bisa Corp. All rights reserved.