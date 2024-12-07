// // fadeInOnScroll.js
// // Observes elements with class .fade-in and adds .fade-in-visible when in view.

// document.addEventListener('DOMContentLoaded', () => {
//     const faders = document.querySelectorAll('.fade-in');
//     const options = { threshold: 0.2 };

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('fade-in-visible');
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, options);

//     faders.forEach(fader => {
//         observer.observe(fader);
//     });
// });
// fadeInOnScroll.js
// Uses Intersection Observer to add 'visible' class to .fade-in-on-scroll elements

document.addEventListener('DOMContentLoaded', function() {
    const faders = document.querySelectorAll('.fade-in-on-scroll');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(
        entries, appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
