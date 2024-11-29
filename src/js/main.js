import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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
    start: "top 70%",
    scrub: true,
  },
  y: 40,
  opacity: 1,
});

gsap.to(img3, {
  scrollTrigger: {
    trigger: img3,
    start: "top 70%",
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
    start: "top 10%",
    scrub: true,
  },
  y: 40,
  opacity: 1,
});

const titleheader = document.querySelector("header");
const titleImg = document.querySelector(".header-title-intro");
const butterfly = document.querySelector(".header-butterfly");

var tl = gsap.timeline({
  onComplete: () => (
    (document.body.style.overflowY = "auto"),
    document.querySelector("main.is-diseaper").classList.remove("is-diseaper")
  ),
});
tl.to(titleImg, { opacity: 1 });
tl.to(titleImg, { duration: 3, opacity: 0 });
tl.to(titleImg, { x: "100%", duration: 0.5, ease: "expo.out" });
tl.fromTo(
  butterfly,
  { x: "-100%", ease: "expo.out", delay: 0 },
  { x: "100", ease: "expo.out", delay: 0 }
);
tl.to(butterfly, { x: 200, y: -20 });
tl.to(butterfly, { x: 300, y: -40 });
tl.to(butterfly, { x: 450, y: -30 });
tl.to(butterfly, { scale: 1.5 });
tl.to(butterfly, { scale: 1 });
tl.to(butterfly, { scale: 1.5 });
tl.to(butterfly, { scale: 1 });
tl.to(butterfly, { scale: 1.5 });
tl.to(butterfly, { scale: 1 });
tl.to(butterfly, { scale: 1.5 });
tl.to(butterfly, { scale: 1 });
tl.to(butterfly, { x: 500, y: -60, delay: 0 });
tl.to(butterfly, { x: 600, y: 0, delay: 0 });
tl.to(butterfly, { x: 900, y: -50, delay: 0 });
tl.to(butterfly, { x: 1100, y: 40, delay: 0 });
tl.to(butterfly, { x: 1500, y: -200, delay: 0 });
tl.to(titleheader, { x: "100%", duration: 2, ease: "expo.out" });

ScrollTrigger.addEventListener(
  "refreshInit",
  () => (document.body.style.overflowY = "auto")
);
ScrollTrigger.addEventListener("refresh", () => {
  if (tl.progress() < 1) {
    document.body.style.overflowY = "hidden";
  }
});

gsap.registerPlugin("ScrollTo");

var btnBefore = document.querySelector("#js-btn-before");
var btnNow = document.querySelector("#js-btn-now");
const btnChoisePresent = document.querySelector("#js-btn-choise-present");
const btnChoisePast = document.querySelector("#js-btn-choise-past");

var storyBefore = document.querySelector(".story-before");
var storyNow = document.querySelector(".story-now");
var choise = document.querySelector(".chose");

btnBefore.addEventListener("click", function () {
  storyBefore.classList.remove("is-hidden");
  storyNow.classList.add("is-hidden");
  gsap.to(window, { duration: 1, scrollTo: ".story-before" });
});

btnNow.addEventListener("click", function () {
  storyNow.classList.remove("is-hidden");
  storyBefore.classList.add("is-hidden");
  gsap.to(window, { duration: 1, scrollTo: ".story-now" });
});

btnChoisePresent.addEventListener("click", function () {
  storyNow.classList.add("is-hidden");
  storyBefore.classList.add("is-hidden");
  gsap.to(window, { scrollTo: ".chose" });
});

btnChoisePast.addEventListener("click", function () {
  storyNow.classList.add("is-hidden");
  storyBefore.classList.add("is-hidden");
  gsap.to(window, { scrollTo: ".chose" });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  gsap.to(".scroll-container-view", {
    scrollTrigger: {
      trigger: ".intro",
      start: "top top",
      end: "+=600",
      scrub: true,
    },
    x: "-350vw",
  });

  gsap.to(".scroll-train", {
    scrollTrigger: {
      trigger: ".intro",
      start: "top top",
      end: "+=600",
      scrub: true,
    },
    x: "210vw",
    duration: 3,
  });

  gsap.to(".scroll-bloc-horizontal-butterfly", {
    scrollTrigger: {
      trigger: ".intro",
      start: "top top",
      end: "+=600",
      scrub: true,
    },
    x: "100vw",
  });
});
