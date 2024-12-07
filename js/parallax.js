// parallax.js
// A simple parallax effect if desired. Adjust as needed.
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero-bg');
    if (hero) {
        let scrollPosition = window.pageYOffset;
        // Adjust the parallax speed as needed
        hero.style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';
    }
});
