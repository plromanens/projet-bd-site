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

gsap.from("#js-case-2-moine-1", {
  scrollTrigger: {
    trigger: "#js-case-2-moine-1",
    start: "top 65%",
    end: "bottom+=100px 100%",
    // markers: true,
    scrub: true,
    id: "case2",
  },
  opacity: 0,
  duration: 5,
});

gsap.to("#js-case-2-moine-2", {
  y: -100,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

// --------------------------------------
// Case-3 Moine2
// --------------------------------------
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#js-case-2-moine-1",
    start: "center+=100px 65%",
    end: "bottom+=500px 90%",
    markers: true,
    scrub: true,
    id: "case2à3",
  },
});

tl.to("#js-case-2-moine-1", {
  opacity: 0,
  duration: 10,
  ease: "power1.inOut",
});
tl.from("#js-case-3-général", {
  opacity: 0,
  duration: 3,
  ease: "power1.inOut",
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
  duration: 2,
  // yoyo: true,
  ease: "power1.inOut",
});
