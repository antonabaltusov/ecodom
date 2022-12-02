import debounce from "./debounce";

export default function search() {
  const input = document.querySelector(
    "input[name=search]"
  ) as HTMLInputElement;
  const searcList: {
    element: HTMLElement;
    value: string | undefined | null;
  }[] = [];
  const arrayEl = document.querySelectorAll(
    ".search-list > *"
  ) as unknown as HTMLElement[];
  arrayEl.forEach((el) => {
    searcList.push({
      element: el,
      value: el.querySelector("h2")?.textContent,
    });
  });
  const filter = () => {
    const value = input.value;
    searcList.forEach((el) => {
      if (el.value?.toLowerCase().includes(value.toLowerCase())) {
        el.element.hidden = false;
        console.log(1);
      } else {
        console.log(2);
        el.element.hidden = true;
      }
    });
  };
  if (input && searcList.length) {
    input.addEventListener("keyup", filter);
  }
}
