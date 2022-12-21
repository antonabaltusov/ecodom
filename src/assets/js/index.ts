import "./jquery3-6-0";
import "./viewport";
import focusBlur from "./focusBlur";
import select from "./select";
import search from "./search";
import mobileMenu from "./mobile-menu";
import "./polifils";
import startVideo from "./video";
import popupFunc from "./popup";
import productHover from "./product-hover";
import sliderMobile, { sliderMemory } from "./slider-mobile";
import slider from "./slider";
import "./video-popup";
import AOS from "aos";
import Rellax from "rellax";
import { blockWithSlider } from "./blockWithSlider";
import "./map";
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: "ease-in-out", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  // focusBlur();

  // search();
  mobileMenu();
  // startVideo();
  popupFunc();
  sliderMobile();
  slider();
  sliderMemory();
  blockWithSlider();
});
window.onload = () => {
  select();
  AOS.refresh();
  new Rellax(".rellax", {
    center: true,
  });
  if (document.documentElement.clientWidth > 500) {
    new Rellax(".rellax-not-mob", {
      center: true,
    });
  }
};
document.querySelectorAll(".smooth-scroll").forEach((el) => {
  el.addEventListener("click", () => {
    const id = el.getAttribute("data-link");
    if (id) {
      const yOffset = -10;
      const targetEl = document.querySelector(id);
      if (targetEl) {
        const y =
          targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  });
});
