import Swiper from "./swiper/swiper-bundle.min.js";
export const baseSliderOptions = {
  speed: 800,
  touchRatio: 2,
  slidesPerView: 1,
  spaceBetween: 20,
  preloadImages: false,
  autoHeight: true,
  enabled: true,
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 3,
  },
};
export default function sliderMobile() {
  const swiperEl = document.querySelector(
    ".swiper.slider-mobile"
  ) as HTMLElement;
  if (swiperEl) {
    new Swiper(swiperEl, {
      ...baseSliderOptions,
      loop: true,
      loopAdditionalSlides: 2,
      navigation: {
        nextEl: swiperEl.querySelector(".swiper-button-next"),
        prevEl: swiperEl.querySelector(".swiper-button-prev"),
      },
      breakpoints: {
        768: {
          spaceBetween: 40,
        },
        1100: {
          spaceBetween: 100,
        },
      },
    });
  }
}
export function sliderMemory() {
  const swiperEl = document.querySelector(".memory .swiper") as HTMLElement;
  console.log(swiperEl);

  if (swiperEl && document.documentElement.clientWidth < 1250) {
    new Swiper(swiperEl, {
      ...baseSliderOptions,
      spaceBetween: 30,
      slidesPerView: "auto",
    });
  }
}
