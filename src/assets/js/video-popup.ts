const overlay = document.querySelector(".modal-overlay") as HTMLElement;
overlay.addEventListener("click", () => {
  closePopup();
});
const buttons = document.querySelectorAll(".button-video").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const videoId = (e.target as HTMLElement)
      .closest("[video-id]")
      ?.getAttribute("video-id");
    const frame = `
    <div class="adaptive_youtube-wrapper">
    <div class="spinner"></div>
    <div class="adaptive_youtube">
    <iframe width="560" height="315" autoplay 
    src="https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>`;
    openPopupVideo(frame);
  });
});

function openPopupVideo(frame: string) {
  overlay.insertAdjacentHTML("afterbegin", frame);
  document.body.classList.add("modal-active");
  overlay.querySelector(".close-btn")?.addEventListener("click", () => {
    closePopup();
  });
}
function closePopup() {
  document.body.classList.remove("modal-active");
  document.querySelector(".modal.active")?.classList.remove("active");
  overlay.querySelector(".adaptive_youtube-wrapper")?.remove();
}
