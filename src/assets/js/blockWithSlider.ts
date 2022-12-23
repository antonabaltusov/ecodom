import { baseSliderOptions } from "./slider-mobile";
import Swiper from "./swiper/swiper-bundle.min.js";

export function blockWithSlider() {
  const blocks = document.querySelectorAll(".block-with-slider");
  if (blocks.length) {
    blocks.forEach((block) => {
      const btnNext = block.querySelector(".button-next");
      const btnPrev = block.querySelector(".button-prev");
      const swiperEl = block.querySelector(".swiper");
      if (btnNext && btnPrev && swiperEl) {
        new Swiper(swiperEl, {
          ...baseSliderOptions,
          autoHeight: true,
          spaceBetween: 20,
          slidesPerView: "auto",
          breakpoints: {
            1000: {
              spaceBetween: 0,
              slidesPerView: 1,
              navigation: {
                nextEl: btnNext,
                prevEl: btnPrev,
              },
            },
          },
        });
      }
    });
  }
}
