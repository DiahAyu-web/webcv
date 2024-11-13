document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector(".hero");

    // Efek Parallax
    window.addEventListener("scroll", function() {
        const offset = window.pageYOffset;
        hero.style.backgroundPositionY = offset * 0.7 + "px";
    });
});
// Fungsi untuk memulai animasi fade-in pada elemen dengan class 'fade'
window.onload = function() {
    const elements = document.querySelectorAll('.fade');
    elements.forEach(element => {
        element.classList.add('show');
    });
};
// Deteksi elemen yang muncul saat digulir
window.onscroll = function() {
    const elements = document.querySelectorAll('.slide-up');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            element.classList.add('show');
        }
    });
};

// Aktifkan animasi pada elemen yang ada
window.onload = function() {
    const elements = document.querySelectorAll('.slide-up');
    elements.forEach(element => {
        element.classList.add('show');
    });
    // Deteksi perangkat dan panggil deteksi animasi referensi
    function detectDevice() {
        if (window.innerWidth <= 767) {
            console.log("Menggunakan perangkat seluler");
        } else if (window.innerWidth <= 1023) {
            console.log("Menggunakan perangkat tablet");
        } else {
            console.log("Menggunakan perangkat desktop");
        }
    }
    detectDevice();
    window.onresize = detectDevice;

    // Fungsi untuk animasi fade-in referensi
    function animateReferences() {
        const references = document.querySelectorAll('.reference');
        references.forEach(reference => {
            const position = reference.getBoundingClientRect().top;
            if (position < window.innerHeight) {
                reference.classList.add('show'); // Tambahkan kelas untuk animasi
            }
        });
    }

    window.addEventListener("scroll", animateReferences); // Panggil saat menggulir
    animateReferences(); // Panggil saat pertama kali dimuat
};
