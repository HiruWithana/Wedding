gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth > 768) {
    const bgImages = [
        'url(images/couple1.jpg)', // Image for the event div
        'url(images/couple2.jpg)', // Image for the story div
        'url(images/couple3.jpg)', // Image for the tidbits div
        'url(images/couple4.jpg)' // Image for the seeYou div
    ];

    const sections = document.querySelectorAll('.right-side > div');

    sections.forEach((section, index) => {
        ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onEnter: () => changeBackgroundImage(index),
            onEnterBack: () => changeBackgroundImage(index),
            markers: false
        });
    });

    function changeBackgroundImage(index) {
        document.querySelector('.left-side').style.backgroundImage = bgImages[index];
    }

    ScrollTrigger.create({
        trigger: ".right-side",
        start: "top top",
        end: "bottom 90%",
        pin: ".left-side",
        markers: false
    });
}
