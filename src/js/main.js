import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const img1 = document.querySelector(".scroll-1");
const img2 = document.querySelector(".scroll-2");
const img3 = document.querySelector(".scroll-3");
const img4 = document.querySelector(".scroll-4");
const img5 = document.querySelector(".scroll-5");
const img6 = document.querySelector(".scroll-6");
const img7 = document.querySelector(".scroll-7");
const img8 = document.querySelector(".scroll-8");

gsap.to(img1, {
  scrollTrigger: {
    trigger: img1,
    start: "top 70%",
    scrub: true,
  },
  y: 40,
  opacity: 1,
});

gsap.to(img2, {
  scrollTrigger: {
    trigger: img2,
    markers: true,
    start: "top 90%",
    scrub: true,
  },
  y: 40,
  opacity: 1,
});

gsap.to(img3, {
  scrollTrigger: {
    trigger: img3,
    start: "top 75%",
    scrub: true,
  },
  y: 40,
  opacity: 1,
});

gsap.to(img4, {
  scrollTrigger: {
    trigger: img4,
    start: "top 80%",
    scrub: true,
  },
  y: 40,
  opacity: 1,
});

gsap.to(img5, {
  scrollTrigger: {
    trigger: img5,
    start: "top 95%",
    scrub: true,
  },
  y: 40,
  opacity: 1,
});

gsap.to(img6, {
  scrollTrigger: {
    trigger: img6,
    start: "top 95%",
    scrub: true,
  },
  y: 40,
  opacity: 1,
});

gsap.to(img7, {
  scrollTrigger: {
    trigger: img7,
    start: "top 95%",
    scrub: true,
  },
  y: 40,
  opacity: 1,
});

gsap.to(img8, {
  scrollTrigger: {
    trigger: img8,
    start: "top 70%",
    scrub: true,
  },
  y: 40,
  opacity: 1,
});
