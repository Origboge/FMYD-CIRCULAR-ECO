// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".training-box").forEach(box => {
//     ScrollTrigger.create({
//         trigger: box,
//         start: "top 90%",
//         onEnter: () => {
//             gsap.fromTo(box, { x: gsap.utils.random(-100, 100), y: gsap.utils.random(-100, 100), opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.8, ease: "power4.out" });
//         },
//         onEnterBack: () => {
//             gsap.fromTo(box, { x: gsap.utils.random(-100, 100), y: gsap.utils.random(-100, 100), opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.8, ease: "power4.out" });
//         },
//     });
// });