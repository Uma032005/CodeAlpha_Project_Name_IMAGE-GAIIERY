document.addEventListener("DOMContentLoaded", function () {
    let homeSection = document.getElementById("home");
    let gallerySection = document.getElementById("gallery-section");
    let gridView = document.getElementById("grid-view");
    let sliderView = document.getElementById("slider-view");
    let sliderImg = document.getElementById("slider-img");

    // ✅ Include all images in the slider list
    let images = [
        "/images/download (1).jpeg", "/images/download (2).jpeg",
        "/images/download (3).jpeg", "/images/download (4).jpeg",
        "/images/download (6).jpeg", "/images/download (7).jpeg",
        "/images/download.jpeg", "/images/images (1).jpeg",
        "/images/images.jpeg", "/images/download 8.jpeg",
        "/images/download 9.jpeg", "/images/download 10.jpg",
        "/images/download 12.jpeg", "/images/download 13.jpeg",
        "/images/image grid and slider.jpg"
    ];
    
    let currentIndex = 0;

    function updateSlider() {
        if (sliderImg) {
            sliderImg.src = images[currentIndex];
        }
    }

    window.nextSlide = function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    };

    window.prevSlide = function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    };

    // ✅ Open slider from Grid View
    window.openSlider = function (index) {
        currentIndex = index;
        updateSlider();
        gridView.style.display = "none";
        sliderView.style.display = "flex";
    };

    // ✅ Show Gallery when clicking "Photo Gallery"
    window.showGallery = function () {
        homeSection.style.display = "none";
        gallerySection.style.display = "block";
        gridView.style.display = "grid";
        sliderView.style.display = "none";
    };

    // ✅ Show Home
    window.showHome = function () {
        gallerySection.style.display = "none";
        homeSection.style.display = "flex";
    };

    // ✅ Show Grid View manually
    window.showGrid = function () {
        gridView.style.display = "grid";
        sliderView.style.display = "none";
    };

    // ✅ Show Slider View manually
    window.showSlider = function () {
        gridView.style.display = "none";
        sliderView.style.display = "flex";
        updateSlider();
    };

    updateSlider();
});
