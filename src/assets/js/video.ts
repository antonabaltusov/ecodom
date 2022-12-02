export default function startVideo() {
  
  const videoEl = document.querySelector('video') as HTMLVideoElement;
  if (videoEl) {
    Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
      get: function () {
          return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
      }
    });
    videoEl.addEventListener('canplaythrough', (e) => {
      if (!videoEl.playing) {
        videoEl.play();
      }
    },{once: true})
    videoEl.addEventListener('play', () => {
      videoEl.classList.add('show');
    },{once: true})
  }
  
}
