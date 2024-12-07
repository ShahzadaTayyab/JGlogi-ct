// document.addEventListener('DOMContentLoaded', () => {
//     const navToggle = document.getElementById('navToggle');
//     const mobileMenu = document.getElementById('mobileMenu');
  
//     navToggle.addEventListener('click', () => {
//       mobileMenu.classList.toggle('open');
//       navToggle.classList.toggle('active');
//     });
  
//     // Fade-in on scroll
//     const faders = document.querySelectorAll('.fade-in');
//     const options = { threshold: 0.2 };
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('fade-in-visible');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, options);
  
//     faders.forEach(fader => {
//       observer.observe(fader);
//     });
  
//     // Parallax effect for hero text (optional)
//     window.addEventListener('scroll', () => {
//       const heroContent = document.querySelector('.hero-content');
//       if(heroContent){
//         const scrollY = window.scrollY;
//         heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
//       }
//     });
//   });
  // navigation.js
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    navToggle.addEventListener('click', () => {
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });
});
