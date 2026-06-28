---
feature_image: "/img/scraper-google-maps-untuk-data-bisnis-palembang.webp"
slug: "scraper-google-maps-untuk-data-bisnis-palembang"
title_short: "Scraper Google Maps untuk Data Bisnis Palembang"
title_seo: "Bagaimana Saya Membuat Scraper Google Maps untuk Dapatkan 3000+ Data Bisnis di Palembang"
description: "Dokumentasi jujur tentang trial and error membuat scraper Google Maps untuk ambil data toko, alamat, dan WhatsApp di Palembang. Dari kegagalan hari pertama hingga temuan Playwright."
intro: "Pernah ditanya teman untuk ambil data semua bengkel las di Palembang? Saya jawab: 'Bisa'. Tapi ternyata, jalan ninja tidak semudah itu."
tags: "scraping, google maps, playwright, python, data, palembang, bisnis"
published_at: "28/06/2026 16:30:00"
status: "draft"
---

## Pernah merasa data bisnis lokal susah didapat?

Malam itu, saya sedang asyik ngoprek laptop sambil minum kopi. Tiba-tiba, teman lama dari Sriwijayagrafika — website yang saya urus — menanyakan sesuatu yang sederhana tapi membuat otak saya langsung panas.

Halo semuanya, Boim di sini. Sebagai orang yang suka ngoprek data, saya langsung bilang: "Bisa!" Tapi ternyata, saya terlalu naif.

## Awal mula ide gila: ambil semua data bengkel las di Palembang

Teman saya, pemilik Sriwijayagrafika, bertanya: "Boim, bisa nggak kita dapetin data semua bengkel las di Palembang? Nama, alamat, nomor WhatsApp-nya?"

Saya langsung tergiur. Bayangkan, kalau bisa ambil semua data toko di Palembang, bisa jadi senjata ampuh untuk bisnis. Apalagi dengan nomor WhatsApp — ini seperti memiliki kunci untuk menghubungi siapa pun.

Jujur saja, saya langsung bilang "Bisa" tanpa berpikir panjang. Padahal, saya belum pernah coba scraping Google Maps sebelumnya. Tapi dengan semangat **Carpe Diem — lakukan sekarang, hajar aja dulu!**, saya langsung mulai.

## Hari pertama: kegagalan total karena instruksi yang tidak jelas

Saya langsung memanggil AI agent kesayangan saya. "Buatkan script untuk ambil data toko dari Google Maps," kata saya dengan percaya diri.

Hasilnya? **Total kegagalan.**

AI agent bingung. Script error. Browser nge-hang. Data yang didapat tidak lengkap. Saya habiskan hari pertama dengan **trial and error** yang tidak produktif.

Nah, disini saya belajar pelajaran pertama: **Instruksi yang tidak jelas = waktu terbuang.** Saya meminta AI untuk "ambil data toko", tapi tidak menjelaskan:
- Bagaimana cara mendeteksi elemen di halaman Google Maps?
- Bagaimana menghindari CAPTCHA?
- Bagaimana menyimpan data dengan efisien?

Saya seperti orang yang meminta AI untuk "buatkan mobil", tapi tidak menjelaskan apakah mobil itu untuk balap, untuk keluarga, atau untuk angkut barang.

![Playwright](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVfpPRx1JMCD-fYhhLFiNPiQoPWPfWgkTpPfXQRGhyphenhyphenROE6zCmZQJ5Uj5v8rZexXi8jjzEAkeYALyjltHcGxp-etUNnc-X8xLgQa0EPMbFjkw05z18-kvK7YfpFeqT031SW3rXxDXLe8LoBirrfYXnm29rSYzzZ9uuWI8ExdymfylJ0cX0N7nAgxTg8kGvk/s600/Screenshot%202026-06-28%20165912.webp)

## Hari kedua: temuan Playwright dan simulasi perilaku manusia

Keesokan harinya, saya sadar: saya perlu lebih spesifik. Saya mulai riset dan menemukan **Playwright** — tools otomatisasi browser yang powerful.

Saya instruksikan AI agent: "Buatkan script Python dengan Playwright untuk:
1. Buka Google Maps
2. Cari 'bengkel las Palembang'
3. Scroll halaman sampai semua hasil muncul
4. Ambil nama, alamat, dan nomor telepon
5. Simpan ke file"

AI agent langsung bekerja. Script pertama berhasil buka browser dan cari data. Tapi... **Google Maps memblokir kami.**

Ternyata, Google punya sistem anti-bot yang canggih. Setiap kali script berjalan terlalu cepat, Google langsung menampilkan CAPTCHA. Saya harus memikirkan cara untuk **mensimulasikan perilaku manusia**.

Solusinya:
- Tambah **delay** antara aksi (1-3 detik)
- **Scroll** halaman perlahan
- **Random click** di area kosong untuk menipu sistem
- **User agent** yang berbeda-beda

Dengan trik ini, script akhirnya bisa berjalan tanpa diblokir. Data mulai berdatangan.

![Project Scraping Google Maps](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQr2m-cTN_BbKb-5b8ynxCD8YXCsAaSsKwr0jzZTiIC4XebNwfI5ZA0EZzQYs3batVPzyduJc52hnpBEjrnnQwe-PSvAzz1GqF_pl6TuxAlbHgA8SVMa9RwopARfOiYyIxCaklLuUVp3vD5pcqqh5YWGPOZjpJRp28GbWjUt3pvyCiamkZjTiD4d7hslai/s600/Screenshot%202026-06-28%20170117.webp)

## Evolusi penyimpanan data: dari JSON ke SQLite

Awalnya, saya simpan data di file JSON. Sederhana, mudah dimengerti. Tapi saat data sudah mencapai **1000+ entries**, JSON mulai lambat.

Saya sadar: **JSON tidak efisien untuk data besar.** Setiap kali ingin cari data tertentu, saya harus memuat seluruh file dan parsing manual. Ribet.

Akhirnya, saya pindah ke **SQLite**. Database ringan yang perfect untuk proyek kecil seperti ini. Keuntungannya:
- Query cepat
- Bisa filter data dengan mudah
- Skalabel untuk ribuan data

Sekarang, saya punya database SQLite dengan **3000+ entries** data bisnis di Palembang. Setiap entry berisi:
- Nama toko/bisnis
- Alamat lengkap
- Nomor WhatsApp (sudah difilter)
- Kategori (bengkel las, toko, jasa, dll)

Terkait nomor WhatsApp, saya punya logika khusus agar data yang masuk benar-benar berkualitas. Jujur saja, ini yang paling saya pusingkan. Saya tidak mau database penuh dengan nomor telepon rumah yang tidak berguna. Logikanya begini:

1. Jika nomor kontak di Google Maps tidak ada, abaikan.
2. Jika nomor kontaknya berformat telepon rumah (07xx), abaikan dan jangan tulis ke database.
3. Jika nomor kontaknya berformat seluler (08xx), ubah menjadi format internasional (628xx) lalu tulis ke database.

Dengan filter ini, saya hanya mengambil kontak yang benar-benar berpotensi memiliki WhatsApp.

## Kebodohan-kébodohan yang saya lakukan

Saya bukan expert, tapi saya belajar dari kesalahan. Inilah kebodohan-kébodohan yang saya lakukan selama proyek ini:

### Kebodohan #1: Berpikir Google Maps gampang discrape

Saya awalnya berpikir: "Google Maps cuma website biasa, pasti gampang discrape."

Kenyataan: **Google Maps adalah salah satu website paling sulit untuk discrape.** Mereka punya:
- CAPTCHA yang muncul tiba-tiba
- Rate limiting yang ketat
- Sistem deteksi bot yang canggih

Saya harus belajar cara **mensimulasikan perilaku manusia** dengan sempurna.

### Kebodohan #2: Tidak memikirkan skalabilitas dari awal

Saya mulai dengan JSON karena sederhana. Tapi saat data sudah besar, JSON jadi lambat.

Pelajaran: **Selalu pikirkan skalabilitas dari awal.** Kalau proyek berpotensi jadi besar, gunakan database dari awal.

### Kebodohan #3: Lupa backup data

Ini benar, dan itu momen yang sangat menyakitkan. Alhasil, saya membangun sistem `scrape_progress` — semacam log yang menyimpan status ke database SQLite. Jadi, jika satu tugas scraping selesai, sistem otomatis mencatatnya dan berlanjut ke tugas berikutnya. Kalaupun script crash, saya tinggal jalankan ulang dan sistem akan meneruskan dari titik terakhir.

## Data dan bukti: 3000+ bisnis di Palembang

Saat artikel ini ditulis, saya sudah mengumpulkan **3000+ data bisnis** di Palembang. Berikut detailnya:

- **Waktu pengembangan**: 2 hari (dengan trial and error)
- **Jumlah data**: 3000+ entries
- **Tools yang digunakan**:
  - Python (logika utama)
  - Playwright (otomatisasi browser)
  - SQLite (database)
  - AI Agent (bantu debug & optimasi)

Contoh data yang didapat:
```json
{
  "nama": "Bengkel Las Maju Mundur",
  "alamat": "Jl. Panglima Polim Raya No.12, Palembang",
  "whatsapp": "6281234567890",
  "kategori": "Bengkel Las"
}
```

Saya juga punya dokumentasi visual dari hasil kerja keras ini. Berikut adalah dashboard SQLite dan log yang saya gunakan untuk memantau proses scraping:

![Dashboard Hasil Scraping](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_HzMsTbXRuxqXc7KFbmcw41Le9yQv2VEje0IA7h7E6j4RHU09UxjlUsgiCjmW_bfwTfd2ymqrFvUvsf46Zrk9i0JFQ4ND3AcWvWiOvGTugyRDaNCyQA9IHVqm-eIrVbXtDVFmIw8dTSKKCNOB1mqgwm7q16cng9uXYWWDUe42i9Pw1YDdLOyj2lTAEP1u/s600/Screenshot%202026-06-28%20165408.webp)


![Log Scraping](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyJhUC181mLBBoD9SqiiriKWI52ABwlpZq1EC0NmZLHeBxjJTP969brjoMrQBiqodMvveXFeYgq7jP9LL0qe35S6sItm__xgdsWA_dgFtTp52t4py1RSeXEEUL762o2YcPCPgh3p0IkrT-cPjbDA-obmYNEoM4u48xrXzF0fnUP5RxV38NWwnTPEFIDiHu/s600/Screenshot%202026-06-28%20165609.webp)
*(Gambar: Log proses scraping yang sedang berjalan)*

## Untuk apa data ini?

Jujur, saya belum tahu pasti. Tapi saya yakin data ini **akan sangat berguna di masa depan.**

Beberapa ide yang saya pikirkan:
- **Database bisnis lokal**: Bisa jadi referensi untuk siapa pun yang butuh data bisnis di Palembang.
- **Analisis kompetitor**: Bisa lihat sebaran bisnis di area tertentu.
- **Proyek AI**: Bisa jadi dataset untuk chatbot, rekomendasi, atau analisis lain.
- **Pemasaran target**: Bisa gunakan untuk promosi bisnis (tapi ini harus hati-hati, ya!)

Saya sekarang menikmati dulu proses scraping data. Mau diapain di kemudian hari, saya pikirkan nanti.

## Refleksi: pelajaran dari proyek ini

Proyek ini mengajarkan saya banyak hal:

1. **Instruksi yang jelas adalah kunci**: AI agent butuh instruksi yang spesifik untuk menghasilkan script yang baik.
2. **Google Maps tidak ramah untuk scraping**: Butuh trik dan kesabaran untuk bisa ambil data dari sana.
3. **Selalu backup data**: Jangan sampai kehilangan data karena crash.
4. **Pikirkan skalabilitas dari awal**: Jangan sampai terlambat untuk pindah ke sistem yang lebih baik.

Saya bukan expert, tapi saya belajar dari **trial and error.** Dan itulah yang membuat proyek ini menyenangkan.

## Penutup: Carpe Diem!

Nah, bapak-bapak digital, itulah cerita saya membuat scraper Google Maps untuk data bisnis di Palembang. Proyek yang awalnya terlihat sederhana, ternyata penuh dengan tantangan.

Kalau kamu punya ide untuk data ini, atau punya pengalaman serupa, kasih tahu ya. Saya senang belajar dari kalian.

Carpe Diem — lakukan sekarang, hajar aja dulu!

Sampai jumpa di artikel berikutnya!