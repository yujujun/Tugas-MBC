MBC Laboratory merupakan pusat riset dan konsultasi teknologi yang bergerak di bidang Cybersecurity, Big Data Analytics, Game Technology, serta Geographic Information System (GIS). Untuk menunjang identitas digital yang profesional, telah dikembangkan sebuah website landing page resmi yang dapat diakses publik melalui internet.

Website ini terdiri dari:
    Frontend: HTML5 dan CSS3 
        Backend: Node.js 
Deployment: Menggunakan  Azure App Service, yang secara otomatis menyediakan HTTPS dan sertifikat SSL 

Struktur folder utama dari proyek ini adalah sebagai berikut:

    /landingpage
    ├── index.html         # Halaman utama landing page
    ├── style.css          # File CSS 
    ├── server.js          # File backend 
    ├── package.json       # Konfigurasi proyek 
    ├── package-lock.json  # Kunci versi dependensi


Untuk menjalankan proyek ini di komputer lokal:

    - Clone repositori dari GitHub
    Jalankan perintah berikut di terminal:

    git clone https://github.com/username/mbc-landingpage.git
    cd mbc-landingpage

    -Install dependensi
    Setelah masuk ke folder proyek, install dependensi Node.js:

    npm install


    -Jalankan server lokal
    Jalankan aplikasi menggunakan perintah:

    node server.js

    -akses website
    Buka browser dan akses http://localhost:3000 untuk melihat hasilnya secara lokal.




Cara Deployment ke Azure
Langkah-langkahnya sebagai berikut:

    Pastikan sudah login ke akun Azure di VS Code

    Buka folder proyek (landingpage)

    Masuk ke tab Azure di sidebar (ikon petir)

    Klik kanan pada nama App Service (misal: TUGASMBC)

    Pilih Deploy to Web App

    Tunggu hingga proses selesai

    Website akan dapat diakses melalui URL, contoh:
    https://tugasmbc.azurewebsites.net

    Azure secara otomatis menyediakan sertifikat SSL gratis




Konfigurasi Backend dan Endpoint
Backend dikembangkan menggunakan Express dengan bantuan middleware body-parser. Tujuan utamanya adalah menangani pengiriman data dari form kontak.

    Endpoint:
    POST /kirim-pesan

    Input:
    nama (string)

    email (string)

    pesan (string)

    Output:
    Menampilkan pesan sukses di browser

    Menampilkan log data form di terminal lokal atau di Azure Log Stream
