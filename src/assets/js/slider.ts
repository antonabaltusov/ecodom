import Swiper from "./swiper/swiper-bundle.min.js";


export default function slider(slider: HTMLElement) {
  const swiperEl = slider.querySelector('.swiper') as HTMLElement;
  const navigation = slider.querySelector('.navigation') as HTMLElement;
  if (slider) {
    const swiper = new Swiper(slider.querySelector('.swiper'), {
      speed: 800,
      touchRatio: 2,
      slidesPerView: 1,
      spaceBetween: 10,
      preloadImages: false,
      lazy: {
        loadPrevNext: true,
      },
      pagination: {
        el: navigation,
        clickable: true,
        type: "custom",
        renderCustom: function(swiper, current, total) {
          const names:string[] = [];
          swiperEl.querySelectorAll(".swiper-slide img").forEach((img) => {
              names.push(img.getAttribute('imgmini'));
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
      }
    });
  }
}
