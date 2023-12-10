import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logo = document.querySelector(".case-0-logo-tibet");
const caseDeux = document.querySelector(".case-0-logo-tibet");

// --------------------------------------
// Header
// --------------------------------------

gsap.to("#js-logo-tibet", {
  scrollTrigger: {
    trigger: "#js-logo-tibet",
    start: "top top",
    end: "bottom+=200px 70%",
    scrub: true,
    // markers: true,
    id: "logo",
    // toggleActions: "start",
  },
  opacity: 0,
});

gsap.to("#js-background-mountain", {
  scrollTrigger: {
    trigger: "#js-logo-tibet",
    start: "top top",
    end: "bottom+=300px 70%",
    // markers: true,
    scrub: true,
    id: "header-background",
    // toggleActions: "start",
  },
  opacity: 0,
});

// --------------------------------------
// Case-2 Moine
// --------------------------------------
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-case-2",
    start: "top+=100px top+=100px",
    end: "bottom+=1000px top",
    pin: true,
    scrub: true,
    // markers: true,
    id: "case2",
  },
});

tl3.to("#js-case-2-moine-1", {
  opacity: 0,
  duration: 5,
});
tl3.from("#js-case-2-moine-1", {
  opacity: 0,
  duration: 5,
});
tl3.to("#js-case-2-moine-2", {
  x: -100,
  opacity: 0,
  duration: 10,
});

gsap.to("#js-case-2-moine-2-vole", {
  y: -100,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});
// gsap.from("#js-case-2-moine-1", {
//   scrollTrigger: {
//     trigger: "#js-case-2-moine-1",
//     start: "top+=-300px center",
//     end: "top+=-100px 10%",
//     scrub: true,

//     // markers: true,
//     id: "case2",
//   },
//   opacity: 0,
//   duration: 20,
// });

// gsap.to("#js-case-2-moine-1", {
//   scrollTrigger: {
//     trigger: "#js-case-2-moine-1",
//     start: "top 25%",
//     end: "bottom 50%",
//     scrub: true,
//     // markers: true,
//     id: "case2-out",
//   },
//   opacity: 0,
//   duration: 10,
// });

// gsap.to("#js-case-2-moine-2", {
//   y: -100,
//   duration: 2,
//   repeat: -1,
//   yoyo: true,
//   ease: "power1.inOut",
// });

// --------------------------------------
// Case-3 Moine2
// --------------------------------------
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-case-3",
    start: "center center",
    end: "bottom+=480px top",
    // markers: true,
    pin: true,
    scrub: true,
    // id: "case2à3",
  },
});
tl.from("#js-case-3-moine", {
  x: -100,
  opacity: 0,
  duration: 10,
});

tl.to("#js-case-2-moine-1", {
  opacity: 0,
  duration: 30,
  ease: "power1.inOut",
});

gsap.to("#js-case-3-moine", {
  y: -100,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});
// --------------------------------------
// Case-4 bulle
// --------------------------------------
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-case-4",
    start: "center center",
    end: "bottom+=1000px top",
    // markers: true,
    pin: true,
    scrub: true,
    id: "case4",
  },
});
tl4.from("#js-case-4-bulle", {
  y: -100,
  opacity: 0,
  duration: 1,
});

// --------------------------------------
// Case-5 avalanche
// --------------------------------------

gsap.from("#js-case-5-avalanche", {
  scrollTrigger: {
    trigger: ".main-case-5",
    start: "50px 65%",
    end: "bottom+=100px 100%",
    // markers: true,
    scrub: true,
    id: "avalanche",
  },
  x: -100,
  y: -100,
  duration: 5,
  // yoyo: true,
  ease: "power1.inOut",
});
// --------------------------------------
// Case-8 journal
// --------------------------------------
const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-case-8",
    start: "center center",
    end: "bottom+=1000px top",
    // markers: true,
    pin: true,
    scrub: true,
    id: "case8",
  },
});
tl5.from("#js-case-8-journal", {
  y: 100,
  duration: 7,
});
tl5.to("#js-case-8-journal", {
  scale: 1.5,
  duration: 3,
});

// --------------------------------------
// Case-9 haddock
// --------------------------------------
const tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-case-9",
    start: "center center",
    end: "bottom+=1000px top",
    // markers: true,
    pin: true,
    scrub: true,
    id: "case9",
  },
});
tl6.from("#js-case-9-capitaine", {
  x: -100,
  duration: 7,
});
// --------------------------------------
// Case-10 pierre bulle
// --------------------------------------
const tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-case-10",
    start: "center center",
    end: "bottom+=1000px top",
    // markers: true,
    pin: true,
    scrub: true,
    id: "case9",
  },
});
tl7.to("#js-case-10-pierre-bulle", {
  scale: 1.5,
  transformOrigin: "right bottom",
  duration: 10,
});

// --------------------------------------
// Case-11 jumelle
// --------------------------------------
const jumelleImage = document.getElementById("js-case-11-jumelle");
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: jumelleImage,
    start: "top bottom",
    end: "bottom+=-300px center",
    scrub: true,
    // markers: true,
    id: "jumelle",
  },
});

// Ajoutez l'animation de flou à netteté à la timeline
timeline.from(jumelleImage, {
  duration: 1,
  filter: "blur(10px)",
  ease: "power2.inOut",
});
// gsap.from("#js-case-11-jumelle", {
//   scrollTrigger: {
//     trigger: "#js-case-11-jumelle",
//     start: "top center",
//     end: "bottom 10%",
//     scrub: true,

//     markers: true,
//     id: "case-11",
//   },
//   filter: "blur(3)",
//   ease: "power2.inOut",
//   duration: 3,
// });

// --------------------------------------
// Case-16 crac
// --------------------------------------
const tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-case-12-13",
    start: "center center",
    end: "bottom+=1000px top",
    // markers: true,
    pin: true,
    scrub: true,
    id: "case13",
  },
});
tl8.to("#js-case-13-crac", {
  y: 100,
  opacity: 0,

  duration: 9,
});
// --------------------------------------
// Case-14 boum
// --------------------------------------
const tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-case-14",
    start: "center center",
    end: "bottom+=1000px top",
    // markers: true,
    pin: true,
    scrub: true,
    id: "case14",
  },
});
tl9.to("#js-case-14-moine-boum", {
  scale: 1.5,
  transformOrigin: "left bottom",
  duration: 10,
});

// --------------------------------------
// Case-15 tintin et milou
// --------------------------------------
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-case-15",
    start: "top+=-100px -10%",
    end: "bottom top",
    pin: true,
    scrub: true,
    // markers: true,
    id: "tintinMilou",
  },
});

tl2.to("#js-case-15-tintin-milou", {
  scale: 1.5,
});
