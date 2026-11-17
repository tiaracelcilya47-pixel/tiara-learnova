/* =====================================
   LUMISPACE - JAVASCRIPT
===================================== */


/* =====================================
   1. DARK MODE & LIGHT MODE
===================================== */

// Ambil tombol tema
const themeToggle = document.getElementById("themeToggle");

// Ambil tema yang tersimpan
const savedTheme = localStorage.getItem("lumiTheme");

// Terapkan tema saat halaman dibuka
if (savedTheme === "dark") {
    document.documentElement.classList.add("dark-mode");
    document.body.classList.add("dark-mode");
} else {
    document.documentElement.classList.remove("dark-mode");
    document.body.classList.remove("dark-mode");
}


// Atur ikon tombol sesuai tema
function updateThemeIcon() {
    if (!themeToggle) return;

    const isDark = document.body.classList.contains("dark-mode");

    themeToggle.textContent = isDark ? "☀️" : "🌙";

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Aktifkan Light Mode" : "Aktifkan Dark Mode"
    );
}

updateThemeIcon();


// Fungsi mengganti tema
if (themeToggle) {
    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");
        document.documentElement.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        // Simpan pilihan tema
        localStorage.setItem(
            "lumiTheme",
            isDark ? "dark" : "light"
        );

        // Perbarui ikon tombol
        updateThemeIcon();

    });
}


/* =====================================
   2. ANIMASI SAAT SCROLL
===================================== */

const animatedElements = document.querySelectorAll(
    ".category-card, .tip-card, .about-card, .detail-card"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show-element");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    animatedElements.forEach(function (element) {
        element.classList.add("hidden-element");
        observer.observe(element);
    });

}


/* =====================================
   3. TAHUN OTOMATIS DI FOOTER
===================================== */

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {
    footerYear.textContent = footerYear.textContent.replace(
        "2026",
        new Date().getFullYear()
    );
}


/* =====================================
   4. TOMBOL KEMBALI KE ATAS
===================================== */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }

    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

}


/* =====================================
   5. CONSOLE INFORMATION
===================================== */

console.log("✦ Welcome to LumiSpace!");
console.log("Your little space to learn, grow, and shine.");
