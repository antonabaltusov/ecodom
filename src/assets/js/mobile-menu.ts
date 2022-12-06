export default function mobileMenu() {
  const openButton = document.querySelector('.btn-menu-mob') as HTMLButtonElement;
  const closeButton = document.querySelector('.btn-menu-mob-close') as HTMLButtonElement;
  const body = document.querySelector('body') as HTMLElement;

  openButton.addEventListener('click',  () => {
    body.classList.add('open-menu-mob');
  })
  closeButton.addEventListener('click',  () => {
    body.classList.remove('open-menu-mob');
  })

}
