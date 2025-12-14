# Huifa Web (Bootstrap)

## File Halaman
- `index.html` (Home)
- `company.html`
- `product.html`
- `contact.html`

## Cara Run (VS Code + Live Server)
1. Extract zip
2. Buka folder `huifa-web/` di VS Code
3. Klik kanan `index.html` → **Open with Live Server**
4. Navigasi menu akan jalan (Home/Company/Product/Contact)

## Edit Produk (Manual)
Edit file: `js/main.js` bagian `HUIFA_PRODUCTS`

Contoh:
```js
{ title: "Nama Produk", desc: "Deskripsi singkat", img: "assets/img/product-01.jpg" }
```

## Ganti Gambar
- Home banner: `assets/img/banner.jpg`
- Company hero: `assets/img/company-hero.jpg`
- Product hero: `assets/img/product-hero.jpg`
- Company about image: `assets/img/company-about.jpg`
- Produk 1..35: `assets/img/product-01.jpg` s/d `product-35.jpg`

## Premium Feel
- Scroll animation menggunakan AOS (CDN)
- Navbar punya shadow saat scroll
- Card hover: naik sedikit + shadow
- Tombol punya efek shine halus
- Back-to-top button muncul setelah scroll

## Home - Product Highlights (Pilih Produk)
Home tidak lagi mengambil 10 produk pertama.

Cara memilih produk highlight:
- Buka `js/main.js`
- Pada produk yang ingin ditampilkan di Home, ubah:
  - `highlight: false` → `highlight: true`

Catatan:
- Maksimal yang tampil di Home = 10 produk.
- Kalau tidak ada yang `highlight: true`, maka otomatis pakai 10 produk pertama.
