export function refreshHeightWhatSend(el: HTMLElement) {
  const list = el.closest(".what-send__list") as HTMLElement;
  console.log(el);

  list.style.minHeight = `${
    (el.querySelector(".what-send__content") as HTMLElement)?.offsetHeight
  }`;
}
export default function select() {
  const listArray = document.querySelectorAll("[select-list]");

  if (listArray.length) {
    listArray.forEach((list) => {
      const itemArray = Array.from(list.querySelectorAll("[select-item]"));
      let activeItem = itemArray.find((item) =>
        item.classList.contains("active")
      );

      if (activeItem?.classList.contains("what-send__item")) {
        refreshHeightWhatSend(activeItem as HTMLElement);
      }
      itemArray.forEach((item) => {
        item
          .querySelector("[select-button]")
          ?.addEventListener("click", (e) => {
            e.preventDefault();

            if (activeItem === item) {
              if (
                activeItem.classList.contains("what-send__item") &&
                window.innerWidth > 375
              ) {
                item.classList.add("active");
              } else {
                item.classList.toggle("active");
              }
            } else {
              if (activeItem?.classList.contains("what-send__item")) {
                activeItem?.classList.remove("active");
                item.classList.add("active");
              } else {
                item.classList.toggle("active");
              }
              activeItem = item;
            }
            // if (
            //   activeItem.classList.contains("what-send__item") &&
            //   window.innerWidth <= 375
            // ) {
            //   const yOffset = -10;
            //   const y =
            //     activeItem.getBoundingClientRect().top +
            //     window.pageYOffset +
            //     yOffset;
            //   window.scrollTo({ top: y, behavior: "smooth" });
            // }
            if (activeItem?.classList.contains("what-send__item")) {
              refreshHeightWhatSend(activeItem as HTMLElement);
            }
          });
      });
    });
  }
}
