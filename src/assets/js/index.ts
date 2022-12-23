import "./viewport";
import select from "./select";
import mobileMenu from "./mobile-menu";
import "./polifils";
// import popupFunc from "./popup";
import sliderMobile, { sliderMemory } from "./slider-mobile";
import slider from "./slider";
import "./video-popup";
import AOS from "../../../node_modules/aos/dist/aos";
import Rellax from "../../../node_modules/rellax/rellax";
import { blockWithSlider } from "./blockWithSlider";
import "./map";
document.addEventListener("DOMContentLoaded", () => {
  aosInit();
  initScrolto();
  mobileMenu();
  // popupFunc();
  sliderMobile();
  slider();
  sliderMemory();
  blockWithSlider();
});
window.onload = () => {
  select();
  AOS.refresh();
  if (document.documentElement.clientWidth > 500) {
    new Rellax(".rellax", {
      center: true,
    });
  }
};
function initScrolto() {
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
}
function aosInit() {
  AOS.init({
    offset: 100,
    delay: 0,
    duration: 500,
    easing: "ease-in-out",
    once: true,
    mirror: false,
    anchorPlacement: "top-bottom",
    disable: "mobile",
  });
}
