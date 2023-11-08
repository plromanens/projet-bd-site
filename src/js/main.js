import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const logo = document.querySelector(".case-0-logo-tibet");
// const caseDeux = document.querySelector(".case-0-logo-tibet");

gsap.to("#js-logo-tibet", {
  scrollTrigger: {
    trigger: "#js-logo-tibet",
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

gsap.from("#js-case-2-moine-1", {
  scrollTrigger: {
    trigger: "#js-case-2-moine-1",
    start: "top 65%",
    end: "bottom+=100px 100%",
    markers: true,
    scrub: true,
    id: "case2",
  },
  opacity: 0,
  duration: 5,
});

gsap.to("#js-case-2-moine-2", {
  // scrollTrigger: {
  //   trigger: "#case-2-moine-2",
  //   start: "top 65%",
  //   end: "bottom+=100px 100%",
  //   // markers: true,
  //   scrub: true,
  //   id: "case2",
  // },
  y: -100,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});
