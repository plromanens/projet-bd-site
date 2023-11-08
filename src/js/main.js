import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const logo = document.querySelector(".case-0-logo-tibet");
// const caseDeux = document.querySelector(".case-0-logo-tibet");

gsap.to("#js-logo", {
  scrollTrigger: {
    trigger: "#js-logo",
    start: "top top",
    end: "bottom+=200px 70%",
    // markers: true,
    scrub: true,
    id: "logo",
    // toggleActions: "start",
  },
  opacity: 0,
  duration: 5,
});

gsap.to(caseDeux, {
  scrollTrigger: {
    trigger: caseDeux,
    start: "top top",
    end: "bottom+=200px 70%",
    // markers: true,
    scrub: true,
    id: "case2",
  },
  opacity: 100,
  duration: 5,
});
