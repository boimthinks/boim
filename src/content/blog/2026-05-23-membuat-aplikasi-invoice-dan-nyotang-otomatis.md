---
feature_image: "/img/membuat-aplikasi-invoice-dan-nyotang-otomatis.webp"
slug: "membuat-aplikasi-invoice-dan-nyotang-otomatis"
title_short: "Invoice & Prediksi Angka"
title_seo: "Aplikasi Invoice Otomatis dan Prediksi Angka dengan AI"
description: "Kisah membuat aplikasi invoice sederhana dengan CLI, lalu iseng membuat web app prediksi angka menggunakan AI dan App Script. Proses trial-error dan kejutan yang ditemukan."
intro: "Suatu hari, seorang teman meminta bantuan membuat aplikasi invoice untuk rental mobilnya. Awalnya sederhana, tapi obrolan berujung pada hobi baru teman tersebut: meramal angka. Dari situ, sebuah eksperimen gila dimulai: membuat web app prediksi angka otomatis menggunakan AI dan App Script."
tags: "ai, appscript, coding, invoice, prediksi"
published_at: "23/05/2026 17:12:33"
status: "published"
---

## Perjalanan Eksperimen, Dari Invoice Sederhana ke Prediksi Angka Otomatis

Malam itu, suasana di rumah cukup hangat. Teman lama berkunjung, membawa serta cerita tentang bisnis rental mobilnya yang lumayan berjalan. Permasalahan yang sering ia hadapi adalah proses pembuatan invoice. Bayangkan, setiap kali ingin membuat invoice, ia harus menyalakan komputer, membuka Microsoft Word, dan mengisi data satu per satu. Proses yang terasa lambat dan merepotkan, apalagi jika harus melakukannya di luar kantor. 

“Kira-kira, kalau bisa bikin invoice langsung dari HP, lebih praktis nggak ya?” tanyanya sambil menyesap teh hangat.

Pertanyaan sederhana itu memicu ide. Tentu saja, sudah banyak aplikasi invoice di Play Store. Tapi, menurutnya, kebanyakan terlalu rumit dan penuh fitur yang tidak ia butuhkan. Di sinilah saya berpikir, memanfaatkan kekuatan *command-line interface* (CLI) andalan saya, OpenCode. 

### OpenCode: "Mempercepat Proses Pengembangan"

OpenCode, bagi saya, adalah *game changer*. Dengan hanya mengetikkan prompt yang jelas, ia mampu menghasilkan kode web app yang berfungsi dalam hitungan menit.  Saya memberikan prompt yang sederhana: "Buat web app untuk membuat invoice sederhana dengan input fields untuk nama pelanggan, nomor mobil, tanggal rental, dan total biaya."

Beberapa saat kemudian, OpenCode menghasilkan kode HTML, CSS, dan JavaScript yang cukup lengkap.  Saya langsung menguji coba dan ternyata berfungsi dengan baik!  Web app tersebut sangat ringan dan mudah digunakan.  Saya lalu mengunggahnya ke Netlify, platform *hosting* statis yang sangat praktis.  Sekarang, teman saya bisa membuat invoice langsung dari HP-nya tanpa perlu mengandalkan komputer dan Microsoft Word.  Sederhana, namun berdampak besar.

### Obrolan Ngalor Ngidul dan Hobi Baru

Setelah invoice selesai, obrolan kami berlanjut ke topik yang lebih ringan.  Tiba-tiba, teman saya mulai bercerita tentang hobinya yang baru: "memasang nomor, atau yang sering disebut \"nyotang\".  Ia mengaku senang mencoret-coret angka yang menurutnya berpotensi keluar berdasarkan angka yang sudah keluar sebelumnya."

"Wah, mulai suka judi nih?"  Saya bergumam dalam hati.  Sudah lama sekali terakhir kali saya bertemu dengan teman ini, dan ternyata ia sudah mulai menggali dunia perjudian.  Secara pribadi, saya sangat tidak menyukai aktivitas semacam itu.  Namun, entah kenapa, ide untuk membuat program otomatis yang bisa memprediksi angka nyotang muncul di benak saya.  Entah kenapa, rasa penasaran dan keinginan untuk bereksperimen mengalahkan prinsip anti perjudian saya.

### Web App Prediksi Angka: "Sebuah Eksperimen yang Menyenangkan (Meskipun Tidak Disarankan)"

"Nggak bisa kan kalau angka yang keluar itu cuma probabilitas?"  Saya bergumam pada diri sendiri.  "Mau dicoret-coret bagaimanapun, itu tetap masalah perbandingan peluang."  Meskipun saya pribadi sangat tidak mendukung aktivitas perjudian, saya merasa terdorong untuk membuat program ini.

Saya mulai membangun web app baru bernama `lacakangka.netlify.app`.  Web app ini dirancang untuk melakukan prediksi angka nyotang berdasarkan data historis.  Tentu saja, saya tidak ingin membuat aplikasi yang mendorong orang untuk berjudi.  Tujuan saya hanyalah untuk bereksperimen dengan teknologi dan AI.

Web app ini memiliki beberapa fitur utama:

*   **Prediksi Angka:**  Menggunakan empat metode prediksi: Regresi, Martingale, Klaster, dan Mystik.
*   **Catatan Angka Historis:**  Mencatat angka-angka yang sudah keluar selama 30 hari terakhir.
*   **Tafsir Mimpi:** ini juga kelanjutan saran si temen, karna suka bingung mimpi apa angka nya berapa (ada ada saja).

### Kekuatan App Script dan Gemini AI

Proses pengembangan web app ini tidaklah mudah.  Awalnya, saya kesulitan mencari cara untuk menyimpan data angka yang keluar secara otomatis ke dalam Google Sheet.  Saya berkonsultasi dengan Gemini AI untuk mencari solusi.  Ternyata, semua itu bisa dilakukan dengan menggunakan App Script!

Saya kemudian mulai mempelajari cara menggunakan App Script untuk:

1.  **Mengambil Data:** Mengambil data angka yang keluar dari sumber yang terpercaya (yang tentu saja harus berhati-hati dalam memilih sumber data).
2.  **Menyimpan Data:** Menyimpan data ke dalam Google Sheet.
3.  **Melakukan Perhitungan:**  Melakukan perhitungan matematis untuk masing-masing metode prediksi.
4.  **Menghasilkan Prediksi:**  Menghasilkan prediksi angka berdasarkan hasil perhitungan.
5.  **Menampilkan Data:**  Menampilkan data dalam format yang mudah dibaca dan dipahami.

Prosesnya adalah *trial and error* yang tak terhitung jumlahnya.  Ada banyak kode yang gagal, banyak error yang harus diperbaiki.  Namun, saya tidak menyerah.  Saya terus mencoba, terus belajar, dan terus memperbaiki kode saya.  

###  AI Agentic Coding: "Menjadi Mandor AI"

Yang paling menarik dari proses ini adalah bagaimana saya bisa memanfaatkan kekuatan *AI agentic coding*.  Dengan AI agentic coding, saya merasa seperti menjadi mandor yang mengawasi AI bekerja.  Saya memberikan instruksi yang jelas, dan AI akan mencoba untuk mengimplementasikannya.  Tentu saja, tidak selalu berhasil, tetapi seringkali hasilnya sangat mengejutkan.

Saya menemukan bahwa AI kadang-kadang bisa sangat pintar, tetapi kadang-kadang juga bisa sangat *halusinasi*.  Tugas kita sebagai pengembang adalah untuk mengendalikan AI, mengarahkan AI sesuai dengan keinginan dan tujuan kita.

###  Perbedaan dengan Pengembangan di WordPress

Saya menyadari bahwa pengembangan web app ini jauh lebih menyenangkan dibandingkan saat saya masih menggunakan WordPress.  Dulu, saya hanya berurusan dengan tema, plugin, dan beberapa error kecil.  Sekarang, dengan OpenCode dan AI agentic coding, saya bisa membuat website yang cantik ataupun web app yang berfungsi dalam hitungan jam bahkan menit (kalau tidak rumit).

Perbedaan yang paling signifikan adalah kemudahan dan kecepatan.  Dulu, saya harus menghabiskan berjam-jam bahkan berhari-hari untuk menyelesaikan tugas yang sekarang bisa diselesaikan dalam hitungan jam bahkan menit.  Ini adalah bukti nyata bahwa teknologi AI sedang mengubah cara kita mengembangkan perangkat lunak.

###  Kesimpulan: "Eksperimen yang Berharga"

Meskipun saya sangat tidak menyukai aktivitas perjudian, saya merasa bahwa eksperimen ini sangat berharga.  Saya belajar banyak hal tentang AI, App Script, dan *AI agentic coding*.  Saya juga belajar bahwa teknologi bisa digunakan untuk berbagai tujuan, bahkan untuk hal-hal yang tidak pantas.

Yang terpenting, saya belajar bahwa eksplorasi dan eksperimen adalah kunci untuk terus berkembang.  Jangan takut untuk mencoba hal-hal baru, jangan takut untuk gagal, dan jangan takut untuk belajar dari kesalahan.  Karena pada akhirnya, itulah yang akan membawa kita menuju kesuksesan.