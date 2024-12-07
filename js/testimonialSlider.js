// testimonialSlider.js
// Simple slider that cycles through testimonials

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.testimonial-card');
    const prev = document.querySelector('.prev-slide');
    const next = document.querySelector('.next-slide');

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = (i === index) ? '1' : '0';
            slide.style.position = (i === index) ? 'relative' : 'absolute';
        });
    }

    // Show first slide initially
    showSlide(currentIndex);

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    next.addEventListener('click', () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });

    // Optional: Auto-play every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }, 5000);
});
