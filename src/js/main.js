import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logo = document.querySelector(".case-0-logo-tibet");

gsap.to(logo, {
  scrollTrigger: {
    trigger: logo,
    start: "100px 20%",
    end: "bottom 100px",
    markers: true,
    // toggleActions: "start",
  },
  y: "500px",
  duration: 2,
});
