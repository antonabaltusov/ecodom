import focusBlur from "./focusBlur";
import swither from "./swither";
import search from "./search";
import mobileMenu from "./mobile-menu";
import "./polifils";
import slider from "./slider";
import startVideo from "./video";
import popupFunc from "./popup";
import productHover from "./product-hover";
const windowWidth = document.documentElement.clientWidth;
// if (windowWidth < 1200 && windowWidth >= 390) {
//   const viewport = document.querySelector("meta[name=viewport]");
//   viewport!.setAttribute('content', 'width=1200, initial-scale=1');
// }
if (windowWidth < 390) {
  const viewport = document.querySelector("meta[name=viewport]");
  viewport!.setAttribute('content', 'width=390, initial-scale=1');
}

document.addEventListener("DOMContentLoaded", () => {
  // focusBlur();
  // swither();
  // search();
  // mobileMenu();
  //slider();
  // startVideo();
  popupFunc();
});
