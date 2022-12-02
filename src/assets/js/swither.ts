export default function swither() {
  let activeButton = document.querySelector(".select-switcher button.active");
  const historyBalanceList = document.querySelector(".select-list");

  if (activeButton && historyBalanceList) {
    document.querySelectorAll(".select-switcher button").forEach((button) => {
      button.addEventListener("click", (e) => {
        const button = e.target as HTMLButtonElement;
        historyBalanceList.setAttribute("data-type", button.id);
        activeButton?.classList.remove("active");
        button.classList.add("active");
        activeButton = button;
      });
    });
  }
}
