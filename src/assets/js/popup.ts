import slider from "./slider";

function openPopup(overlay: HTMLElement, modal: HTMLElement) {
  const copyModal = modal.cloneNode(true);
  overlay.append(copyModal);
  document.body.classList.add('modal-active');
  slider(overlay);
  overlay.querySelector('.btn-close-modal')?.addEventListener('click', () => {
    modal.classList.remove('active')
    closePopup(overlay);
  })
}
function closePopup(overlay: HTMLElement) {
  document.body.classList.remove('modal-active');
  document.querySelector('.modal.active')?.classList.remove('active');
  overlay.replaceChildren();
}

export default function popupFunc() {
  const modalList = document.querySelectorAll('.modal-wrapper');
  const overlay = document.querySelector('.modal-overlay') as HTMLElement;
  if (modalList.length) {
    modalList.forEach(modalWrap => {
      const openButton = modalWrap.querySelector('.btn-open-modal') as HTMLElement;
      const modal = modalWrap.querySelector('.modal') as HTMLElement;
      if (openButton && modal) {
        openButton.addEventListener('click', () => {
          openPopup(overlay, modal);
        })
      }
    })
    overlay.addEventListener('click', (e) => {
      const el = e.target as HTMLElement;
      if(el.classList.contains('modal-overlay') || el.classList.contains('close-btn') || el.closest('.close-btn')) {
        closePopup(overlay);
      }
    })
  }
}
