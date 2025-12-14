/**
 * ==========================================================
 * HUIFA WEB - main.js (LOCAL MODE)
 * ==========================================================
 * Kamu tidak perlu Google Sheets.
 *
 * CARA EDIT PRODUK (tanpa ubah logic):
 * - Edit array HUIFA_PRODUCTS di bawah ini:
 *   - title : nama produk
 *   - desc  : deskripsi singkat
 *   - img   : path gambar (mis: assets/img/product-01.jpg)
 *
 * CARA GANTI FOTO:
 * - Simpan semua foto produk di: assets/img/
 * - Ubah path img sesuai nama file foto yang kamu pakai.
 * ==========================================================
 */

/* =========================
   // DATA PRODUK (EDIT DI SINI)
   ========================= */
const HUIFA_PRODUCTS = [
  { title: "Fish Flavoured Roll", highlight: false, desc: "Soft fish roll with a savory aroma—ideal for hotpot, soup, or stir-fry.", img: "assets/img/1-Fish-Flavoured Roll (2).jpg" },
  { title: "Shrimp Flavor Roll", highlight: false, desc: "Shrimp-infused roll with a springy bite—great for hotpot and noodle bowls.", img: "assets/img/2-Shrimp Flavor Roll (2).jpg" },
  { title: "Stuffed Meatball", highlight: true, desc: "Juicy stuffed meatball with a rich filling—perfect for boiling or pan-frying.", img: "assets/img/3-Stuffed Meatball (2).jpg" },
  { title: "Fish Flavor Ball", highlight: false, desc: "Classic fish ball—bouncy, mild, and perfect for soups or skewers.", img: "assets/img/4-Fish Flavor Ball (1).jpg" },
  { title: "Chicken Tempura", highlight: true, desc: "Crispy chicken tempura bites—fry or air-fry for a quick snack.", img: "assets/img/5-Chicken Tempura (2).jpg" },
  { title: "Sandwiched Crab Flavor Fish Cake", highlight: false, desc: "Layered fish cake with crab flavor—an easy add-on for hotpot.", img: "assets/img/6-Sandwiched Crab Flavor Fish Cake (1).jpg" },
  { title: "Meat Beefball", highlight: false, desc: "Hearty beef ball with a satisfying chew—ideal for soups and BBQ skewers.", img: "assets/img/7-Meat Beefball (2).jpg" },
  { title: "Shrimp Flavor Ball", highlight: true, desc: "Shrimp-flavored ball with springy texture—best in hotpot and ramen.", img: "assets/img/8-Shrimp Flavor Ball (1).jpg" },
  { title: "Cuttlefish Flavor Fish Ball", highlight: false, desc: "Cuttlefish-flavored fish ball with deeper seafood taste—great for stews.", img: "assets/img/9-Cuttlefish Flavor Fish Ball (1).jpg" },
  { title: "Flower Shaped Sausage", highlight: false, desc: "Fun flower-shaped sausage slices—perfect for bento, soup, or stir-fry.", img: "assets/img/10-Flower Shaped Sausage (2).jpg" },
  { title: "Cuttlefish Flavor Fish Cake", highlight: false, desc: "Savory cuttlefish fish cake—pan-fry lightly or simmer in broth.", img: "assets/img/11-Cuttlefish Flavor Fish Cake (1).jpg" },
  { title: "Premium Braised Meatball", highlight: true, desc: "Premium braised-style meatball with rich taste—ready for quick cooking.", img: "assets/img/12-Premium Braised Meatball(1).jpg" },
  { title: "Crispy Fish Nugget", highlight: false, desc: "Golden crispy fish nuggets—air-fryer friendly and great for sharing.", img: "assets/img/13-Crispy Fish Nugget  (2).jpg" },
  { title: "Chicken Breast Meatball", highlight: false, desc: "Juicy chicken breast meatball—perfect for soup, noodles, or hotpot.", img: "assets/img/14-Chicken Breast Meatball (2).jpg" },
  { title: "Mini Sausage (Chicken)", highlight: false, desc: "Mini chicken sausages—great for breakfast, bento, or grilling.", img: "assets/img/15-Mini Sausage (Chicken) (2).jpg" },
  { title: "Spinach Flavored Ball", highlight: false, desc: "Spinach-flavored ball with a light veggie note—adds color to hotpot.", img: "assets/img/16-Spinach Flavored Ball (1).jpg" },
  { title: "Colorful Mini Dumplings", highlight: false, desc: "Assorted mini dumplings—bite-sized, colorful, and easy to boil.", img: "assets/img/17-Colorful Mini Dumplings.jpg" },
  { title: "Tofu Slice", highlight: true, desc: "Smooth tofu slices—ideal for hotpot, soup, or quick stir-fry.", img: "assets/img/18-Tofu Slice (2).jpg" },
  { title: "Fish Tofu", highlight: true, desc: "Soft fish tofu cubes that absorb broth well—great for hotpot and soups.", img: "assets/img/19-Fish Tofu (1).jpg" },
  { title: "Stuffed Shrimp Ball", highlight: false, desc: "Stuffed shrimp ball with a juicy center—delicious in hotpot or deep-fried.", img: "assets/img/20-Stuffed Shrimp Ball (2).jpg" },
  { title: "Stuffed Lobster Flavor Patty", highlight: false, desc: "Lobster-flavored stuffed patty—crispy outside when pan-fried.", img: "assets/img/21-Stuffed Lobster Flavor Patty (2).jpg" },
  { title: "Stuffed Fish Cake", highlight: false, desc: "Stuffed fish cake with savory filling—perfect for simmering or frying.", img: "assets/img/22-Stuffed Fish Cake  (1).jpg" },
  { title: "Rainbow Fish Roll", highlight: false, desc: "Rainbow fish roll—colorful slices that look great on hotpot platters.", img: "assets/img/23-Rainbow Fish Roll (2).jpg" },
  { title: "Chicken Meatball with Cartilage", highlight: false, desc: "Chicken meatball with cartilage for extra crunch—great for soup or grill.", img: "assets/img/24-Chicken Meatball with Cartilage(2).jpg" },
  { title: "Fish Roll with Fish Roe", highlight: false, desc: "Fish roll topped with fish roe—adds a pop of texture to hotpot.", img: "assets/img/25-Fish Roll with Fish Roe (2).jpg" },
  { title: "Imitation Lobster Ball with Fish Roe", highlight: false, desc: "Imitation lobster ball with fish roe—seafood taste with crunchy roe bites.", img: "assets/img/26-Imitation Lobster Ball with Fish Roe (2).jpg" },
  { title: "Codfish Pie with Egg Yolk", highlight: false, desc: "Codfish pie with egg yolk center—rich bite, great for frying.", img: "assets/img/27-Codfish Pie with Egg Yolk.jpg" },
  { title: "Handmade Beef Meatball", highlight: false, desc: "Handmade-style beef meatball with classic chew—perfect for soup or noodles.", img: "assets/img/28-Handmade Beef Meatball (2).jpg" },
  { title: "Golden Fried Fish Ball", highlight: false, desc: "Golden fried fish balls—reheat quickly for snacks or side dishes.", img: "assets/img/29-Golden Fried Fish Ball (2).jpg" },
  { title: "Chicken Nugget", highlight: false, desc: "Classic chicken nuggets—quick to fry or air-fry for any time snack.", img: "assets/img/49-Chicken Nugget  (1).jpg" },
  { title: "Chicken Patty with Vermicelli", highlight: false, desc: "Chicken patty with vermicelli—crispy outside, soft inside.", img: "assets/img/50-Chicken Patty with Vermicelli (2).jpg" },
  { title: "Three Fresh Meatballs", highlight: false, desc: "Assorted fresh meatballs—mix and match for hotpot, soup, or noodles.", img: "assets/img/51-Three Fresh Meatballs (1).jpg" },
  { title: "Frozen Potato", highlight: false, desc: "Frozen potato bites—crisp up fast in a fryer or air-fryer.", img: "assets/img/52-Frozen Potato (1).jpg" },
  { title: "Hotpot Egg Dumplings", highlight: false, desc: "Egg dumplings made for hotpot—silky texture and satisfying bite in broth.", img: "assets/img/53-Hotpot Egg Dumplings (2).jpg" },
  { title: "Fish Sausage", highlight: false, desc: "Fish sausage—slice and stir-fry, grill, or add to noodles.", img: "assets/img/54-Fish Sausage (2).jpg" }
];


/* =========================
   // PREMIUM UI EFFECTS
   ========================= */
function setupNavbarScroll(){
  // // NAVBAR: add shadow when scrolling
  const nav = document.querySelector(".huifa-nav");
  if(!nav) return;

  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 10);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setupBackToTop(){
  // // BACK TO TOP
  const btn = document.getElementById("backToTop");
  if(!btn) return;

  const onScroll = () => {
    if(window.scrollY > 500) btn.classList.add("show");
    else btn.classList.remove("show");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function refreshAOS(){
  // AOS perlu refresh kalau konten di-render via JS (product grid / carousel)
  if(typeof AOS !== "undefined" && AOS && typeof AOS.refreshHard === "function"){
    AOS.refreshHard();
  }else if(typeof AOS !== "undefined" && AOS && typeof AOS.refresh === "function"){
    AOS.refresh();
  }
}

/* =========================
   // UTIL
   ========================= */
function chunk(arr, size){
  const out = [];
  for(let i=0;i<arr.length;i+=size) out.push(arr.slice(i, i+size));
  return out;
}

function setActiveNav(){
  // // NAV ACTIVE STATE
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".huifa-nav .nav-link").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if(href === path) a.classList.add("active");
  });
}

/* =========================
   // HOME: PRODUCT HIGHLIGHTS (10 produk pertama)
   ========================= */
function renderProductHighlights(){
  const root = document.querySelector("#productHighlightsCarousel .carousel-inner");
  if(!root) return;

  // // HOME HIGHLIGHTS:
// - Set `highlight: true` di produk yang ingin tampil di Home.
// - Maksimal tampil 10 item.
const preferred = HUIFA_PRODUCTS.filter(p => p.highlight === true);
const highlights = (preferred.length ? preferred : HUIFA_PRODUCTS).slice(0, 10);
  const slides = chunk(highlights, 3);

  root.innerHTML = slides.map((group, idx) => {
    const cards = group.map((p) => `
      <div class="col-12 col-md-4">
        <div class="card huifa-card">
          <img src="${p.img}" class="card-img-top" alt="${p.title}">
          <div class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text">${p.desc}</p>
          </div>
        </div>
      </div>
    `).join("");

    const fillers = group.length < 3
      ? Array.from({length: 3 - group.length}).map(() => `<div class="d-none d-md-block col-md-4"></div>`).join("")
      : "";

    return `
      <div class="carousel-item ${idx === 0 ? "active" : ""}">
        <div class="row g-3 justify-content-center">
          ${cards}
          ${fillers}
        </div>
      </div>
    `;
  }).join("");

  refreshAOS();
}

/* =========================
   // PRODUCT PAGE: GRID CARD BESAR
   ========================= */
function renderProductGrid(){
  const grid = document.getElementById("productGrid");
  if(!grid) return;

  const qEl = document.getElementById("productSearch");
  const query = (qEl && qEl.value ? qEl.value : "").toLowerCase().trim();

  const items = HUIFA_PRODUCTS.filter(p => {
    if(!query) return true;
    return (p.title || "").toLowerCase().includes(query) || (p.desc || "").toLowerCase().includes(query);
  });

  grid.innerHTML = items.map((p, idx) => `
    <div class="col-12 col-lg-6">
      <button class="product-card-btn" type="button" data-product-index="${idx}">
        <div class="product-card">
          <div class="media">
            <!-- // FOTO PRODUK -->
            <img src="${p.img}" alt="${p.title}">
            <div>
              <!-- // NAMA PRODUK -->
              <div class="title">${p.title}</div>
              <!-- // DESKRIPSI SINGKAT -->
              <p class="desc">${p.desc}</p>

              <div class="meta">
                <div class="hint"><i class="bi bi-arrows-fullscreen me-1"></i>Click to zoom</div>
                <div class="btn btn-sm btn-success btn-view">View</div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  `).join("");

  if(items.length === 0){
    grid.innerHTML = `<div class="col-12"><div class="alert alert-light border">Tidak ada produk yang cocok.</div></div>`;
  }

  refreshAOS();
}

function setupProductModal(){
  const modalEl = document.getElementById("productModal");
  const grid = document.getElementById("productGrid");
  if(!modalEl || !grid) return;
  if(typeof bootstrap === "undefined") return;

  const modal = new bootstrap.Modal(modalEl);

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-product-index]");
    if(!btn) return;

    const idx = Number(btn.getAttribute("data-product-index"));
    const p = HUIFA_PRODUCTS[idx];
    if(!p) return;

    modalEl.querySelector("[data-modal-title]").textContent = p.title;
    modalEl.querySelector("[data-modal-desc]").textContent = p.desc;

    const img = modalEl.querySelector("[data-modal-img]");
    img.src = p.img;
    img.alt = p.title;

    modal.show();
  });
}

function setupProductSearch(){
  const qEl = document.getElementById("productSearch");
  if(!qEl) return;
  qEl.addEventListener("input", () => renderProductGrid());
}

/* =========================
   // INIT
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  setupNavbarScroll();
  setupBackToTop();
  setActiveNav();

  // Render pages (safe: only runs if elements exist)
  renderProductHighlights();
  renderProductGrid();
  setupProductSearch();
  setupProductModal();
});
