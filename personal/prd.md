# Product Requirements Document (PRD)

## Website Portofolio Pribadi PKL — Siswa RPL

| Informasi | Detail |
| --- | --- |
| Produk | Website portofolio pribadi untuk tugas PKL |
| Pengguna utama | Siswa SMK jurusan Rekayasa Perangkat Lunak (RPL) |
| Platform | Website responsif untuk desktop, tablet, dan ponsel |
| Teknologi | HTML5, CSS3, dan Vanilla JavaScript |
| Status | Siap dikustomisasi dengan data pribadi dan dipublikasikan |

## 1. Latar Belakang

Siswa RPL membutuhkan media profesional untuk mendokumentasikan kemampuan teknis, pengalaman selama Praktik Kerja Lapangan (PKL), serta proyek yang pernah dibuat. Website ini menjadi representasi digital yang dapat digunakan sebagai tugas PKL, lampiran laporan, dan portofolio awal saat melamar kerja atau magang.

## 2. Tujuan Produk

- Menampilkan profil, minat, dan target karier siswa secara profesional.
- Mendokumentasikan kegiatan dan hasil pembelajaran selama PKL.
- Memperlihatkan kemampuan teknis melalui daftar skill dan proyek.
- Memudahkan pembimbing, guru, atau calon rekruter menghubungi pemilik portofolio.
- Memberikan pengalaman visual modern tanpa ketergantungan pada framework.

## 3. Target Pengguna

| Pengguna | Kebutuhan |
| --- | --- |
| Siswa pemilik | Memperbarui profil, skill, pengalaman, dan tautan proyek dengan mudah. |
| Guru/pembimbing PKL | Meninjau aktivitas, perkembangan, dan hasil karya siswa. |
| Calon rekruter/klien | Memahami kemampuan dan melihat karya siswa dengan cepat. |

## 4. Ruang Lingkup

### Termasuk

- Halaman satu layar (*single-page*) dengan navigasi antarbagian.
- Bagian Beranda, Tentang Saya, Skills, Pengalaman PKL, Project, dan Kontak.
- Tema gelap dan terang yang tersimpan pada browser pengguna.
- Animasi ringan untuk meningkatkan pengalaman pengguna.
- Form kontak dengan validasi sisi klien.
- Desain responsif dan aksesibel dasar.

### Tidak termasuk

- Sistem login atau dashboard admin.
- Penyimpanan data/database.
- Pengiriman email langsung dari form tanpa integrasi layanan/backend.
- Bagian sertifikat dan galeri dokumentasi.

## 5. Struktur Halaman dan Kebutuhan Fungsional

| Bagian | Tujuan | Kebutuhan utama |
| --- | --- | --- |
| Navbar | Memudahkan navigasi | Sticky, transparan saat awal, blur saat scroll, menu mobile, serta tombol ganti tema. |
| Hero / Beranda | Membuat kesan pertama | Nama placeholder, profesi dengan typing animation, CTA portofolio/kontak/CV, foto profil placeholder, partikel halus. |
| Tentang Saya | Memperkenalkan pemilik | Perkenalan, pendidikan, tujuan PKL, minat teknologi, target karier, dan statistik. |
| Skills | Menampilkan kemampuan teknis | Card berikon dan progress bar animatif untuk teknologi yang dikuasai. |
| Pengalaman PKL | Menjelaskan aktivitas PKL | Timeline mingguan dengan kegiatan, teknologi, dan hasil pekerjaan. |
| Project | Menampilkan hasil karya | Minimal enam kartu proyek berisi gambar, deskripsi, teknologi, dan tautan Demo/GitHub/Detail. |
| Kontak | Memudahkan komunikasi | Email, WhatsApp, GitHub, lokasi, serta form kontak tervalidasi. |
| Footer | Menutup halaman | Nama pemilik, tahun otomatis, sosial media, dan kredit teknologi. |

## 6. Kebutuhan Desain

- Gaya visual: modern, premium, minimalis, dan profesional.
- Lebar maksimal konten: 1200px.
- Palet utama: navy gelap (`#0F172A`), biru (`#3B82F6`), ungu (`#8B5CF6`), dan cyan (`#06B6D4`).
- Menggunakan Poppins sebagai font utama serta Inter sebagai font cadangan.
- Card memakai efek glassmorphism: transparansi ringan, border lembut, dan blur.
- Layout menggunakan CSS Grid dan Flexbox.
- Mendukung tampilan mobile mulai lebar layar 600px dan tablet mulai 900px.

## 7. Interaksi dan Animasi

- Smooth scroll pada navigasi.
- Loading screen saat halaman dimuat.
- Scroll progress bar di bagian atas halaman.
- Efek reveal/fade/slide saat section masuk ke viewport.
- Counter untuk statistik dan progress animation untuk skill.
- Typing animation pada profesi di hero.
- Hover lift pada kartu proyek dan skill.
- Cursor glow pada perangkat dengan mouse/pointer presisi.
- Tombol kembali ke atas setelah pengguna melakukan scroll.

## 8. Kebutuhan Nonfungsional

| Area | Ketentuan |
| --- | --- |
| Performa | Menggunakan JavaScript ringan tanpa framework; aset gambar dapat diganti dan dioptimalkan sebelum publikasi. |
| Responsif | Tampilan dan navigasi harus dapat digunakan di ponsel, tablet, serta desktop. |
| Aksesibilitas | Menggunakan elemen semantik, `alt` pada gambar, label form, dan `aria-label` pada tombol/tautan ikon. |
| SEO | Memiliki judul halaman, meta description, struktur heading yang teratur, dan HTML semantik. |
| Kompatibilitas | Mendukung browser modern seperti Chrome, Edge, Firefox, dan Safari versi terbaru. |

## 9. Data yang Perlu Diganti Pemilik

Sebelum dipublikasikan, ganti semua nilai placeholder berikut di `index.html`:

- `[Nama Lengkap]`, `[Nama Sekolah]`, `[Kota, Indonesia]`.
- Foto profil placeholder.
- Email, nomor WhatsApp, dan tautan GitHub, LinkedIn, Instagram.
- File/tautan tombol Download CV.
- Isi statistik, skill, detail pengalaman PKL, dan enam proyek.
- Gambar placeholder proyek dengan screenshot atau desain proyek asli.

## 10. Kriteria Penerimaan

- [ ] Seluruh menu navbar menuju section yang benar.
- [ ] Website tampil baik pada layar ponsel, tablet, dan desktop.
- [ ] Dark mode dan light mode dapat diubah serta tersimpan setelah halaman dimuat ulang.
- [ ] Animasi scroll, typing, counter, dan progress bar berjalan tanpa error.
- [ ] Enam kartu proyek tersedia dan memiliki tautan placeholder yang dapat diganti.
- [ ] Form tidak dapat dikirim bila ada kolom wajib yang kosong atau email tidak valid.
- [ ] Bagian sertifikat dan galeri tidak tampil pada halaman atau navbar.
- [ ] Seluruh data pribadi masih berupa placeholder yang mudah ditemukan dan diperbarui.

## 11. Pengembangan Lanjutan (Opsional)

- Integrasikan form kontak dengan Formspree, EmailJS, atau backend sendiri.
- Hubungkan proyek dengan repository GitHub dan demo asli.
- Tambahkan halaman detail untuk setiap proyek.
- Optimalkan gambar ke format WebP/AVIF dan host aset secara lokal.
- Tambahkan analitik sederhana setelah website dipublikasikan.
