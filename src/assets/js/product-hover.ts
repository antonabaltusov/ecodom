
export default function productHover() {
  const buttons = document.querySelectorAll('.shop__list .product-info .button-yellow');
  if (buttons.length) {
    buttons.forEach(button => {
      button.addEventListener('mouseover', (e) => {
        const el = e.target as HTMLElement;
        el?.closest('.product')?.classList.add('not-hover');
      })
      button.addEventListener('mouseout', (e) => {
        const el = e.target as HTMLElement;
        el?.closest('.product')?.classList.remove('not-hover');
      })
    })
  }
}
