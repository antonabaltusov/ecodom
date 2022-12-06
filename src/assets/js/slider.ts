import { baseSliderOptions } from "./slider-mobile.ts";
import Swiper from "./swiper/swiper-bundle.min.js";

export default function slider() {
  const swiperEl = document.querySelector(
    ".news__gallery .swiper"
  ) as HTMLElement;
  const navigation = document.querySelector(".navigation") as HTMLElement;
  const imgs = swiperEl?.querySelectorAll(".swiper-slide img");
  function renderNav(swiper, current, total) {
    const names: string[] = [];
    imgs.forEach((img) => {
      names.push(img.getAttribute("imgmini"));
    });
    let text = "<ul>";
    for (let i = 0; i < total; i++) {
      if (current - 1 == i) {
        text += `<li class="swiper-pagination-bullet active"><div class="img-wrapper"><img src="${names[i]}"></div class="img-wrapper"></li>`;
      } else {
        text += `<li class="swiper-pagination-bullet"><div class="img-wrapper"><img src="${names[i]}"></div class="img-wrapper"></li>`;
      }
    }
    text += "</ul>";

    return text;
  }

  if (swiperEl && document.documentElement.clientWidth > 1250) {
    const swiper = new Swiper(swiperEl, {
      ...baseSliderOptions,
      spaceBetween: 10,
      pagination: {
        el: navigation,
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
        type: imgs.length > 5 ? "bullets" : "custom",
        renderCustom: imgs.length > 5 ? null : renderNav,
      },
    });
  }
}
