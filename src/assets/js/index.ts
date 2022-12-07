import "./jquery3-6-0";
import "./viewport";
import focusBlur from "./focusBlur";
import swither from "./swither";
import search from "./search";
import mobileMenu from "./mobile-menu";
import "./polifils";
import startVideo from "./video";
import popupFunc from "./popup";
import productHover from "./product-hover";
import sliderMobile, { sliderMemory } from "./slider-mobile";
import slider from "./slider";
import "./video-popup";
const windowWidth = document.documentElement.clientWidth;
// if (windowWidth < 1200 && windowWidth >= 390) {
//   const viewport = document.querySelector("meta[name=viewport]");
//   viewport!.setAttribute('content', 'width=1200, initial-scale=1');
// }
if (windowWidth < 390) {
  const viewport = document.querySelector("meta[name=viewport]");
  viewport!.setAttribute("content", "width=390, initial-scale=1");
}

document.addEventListener("DOMContentLoaded", () => {
  // focusBlur();
  // swither();
  // search();
  mobileMenu();
  // startVideo();
  popupFunc();
  sliderMobile();
  slider();
  sliderMemory();
});
