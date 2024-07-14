// Ensure GSAP and ScrollTrigger are loaded
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    const scrollSections = document.querySelectorAll('.scrollSection');
    const photos = document.querySelectorAll('.photo');

    scrollSections.forEach((section, index) => {
        gsap.to(photos[index], {
            scrollTrigger: {
                trigger: section,
                start: "top center",
                end: "bottom center",
                onEnter: () => gsap.to(photos[index], { opacity: 1, duration: 0.5 }),
                onLeave: () => gsap.to(photos[index], { opacity: 0, duration: 0.5 }),
                onEnterBack: () => gsap.to(photos[index], { opacity: 1, duration: 0.5 }),
                onLeaveBack: () => gsap.to(photos[index], { opacity: 0, duration: 0.5 }),
            },
        });
    });

    // Pin the image container
    ScrollTrigger.create({
        trigger: '.left',
        start: "top top",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false
    });
});
