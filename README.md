# CMLabs Frontend Fulltime Test

Ini adalah proyek yang dibuat sebagai tanggapan terhadap tes frontend fulltime dari CMLabs. Proyek ini menggunakan framework Next.js dan memenuhi semua kriteria yang diminta.

## Daftar Isi
- [Instruksi Penggunaan](#instruksi-penggunaan)
- [Struktur Proyek](#struktur-proyek)
- [Fitur](#fitur)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Cara Menjalankan Proyek](#cara-menjalankan-proyek)
- [Cara Deploy](#cara-deploy)
- [Tangkapan Layar](#tangkapan-layar)

## Instruksi Penggunaan

1. **Halaman Ingredients**
   - Menampilkan list data ingredients berdasarkan endpoint "List of Ingredients".
   - Ketika list ingredient dipilih, akan redirect menuju halaman Ingredients Detail.
   - Terdapat fitur pencarian ingredients berdasarkan nama di sisi front-end.

2. **Halaman Ingredients Detail**
   - Parameter: `ingredient-name`.
   - Menampilkan list data meal berdasarkan data ingredient yang dipilih, menggunakan endpoint "Filter by Ingredients".
   - Jika data meal dipilih, akan redirect menuju halaman Meals Detail.
   - Terdapat fitur pencarian meal berdasarkan nama di sisi front-end.

3. **Halaman Meals Detail (Optional)**
   - Parameter: `meal-id`.
   - Menampilkan detail meal berdasarkan list yang dipilih, menggunakan endpoint "Detail Meal".
   - Terdapat komponen: Gambar Meal, Judul/Nama Meal, Desksripsi/Tutorial, Recipe, Youtube Embedded.

## Struktur Proyek

Struktur proyek ini mengikuti pola umum dari proyek Next.js, dengan tambahan direktori dan file untuk komponen, halaman, dan logika bisnis.

## Fitur

- [x] List Ingredients
- [x] Search Ingredients
- [x] List Meals based on selected Ingredient
- [x] Search Meals
- [ ] Meals Detail (Optional)

## Teknologi yang Digunakan

Proyek ini menggunakan teknologi-teknologi berikut:

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Cara Menjalankan Proyek

1. Pastikan Node.js telah terinstal di komputer Anda.
2. Clone repositori ini: `git clone https://github.com/rafmasloman/cmlabs-frontend-fulltime-test.git`
3. Masuk ke direktori proyek: `cd cmlabs-frontend-fulltime-test`
4. Install dependencies: `npm install`
5. Jalankan proyek: `npm run dev`
6. Buka browser dan akses [http://localhost:3000](http://localhost:3000)
