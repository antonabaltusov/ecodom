export default function mobileMenu() {
  const openButton = document.querySelector('.btn-open-menu') as HTMLButtonElement;
  const closeButton = document.querySelector('.btn-close-menu') as HTMLButtonElement;
  const header = document.querySelector('.header') as HTMLElement;

  openButton.addEventListener('click',  () => {
    header.classList.add('open-mobile-menu');
  })
  closeButton.addEventListener('click',  () => {
    header.classList.remove('open-mobile-menu');
  })

}
