export default class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.closeBtn = this.overlay.querySelector(".close");
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: "100%",
      width: '100%',
      videoId: `${url}`,
      events: {
        'onStateChange': this.onPlayerStateChange
      }
    });
    this.overlay.style.display = "flex";
  }

  bindCloseBtn() {
    this.closeBtn.addEventListener("click", ()=>{
      this.player.stopVideo();
      this.overlay.style.display = "none";
    });
  }

  bindTriggers() {
    this.btns.forEach((btn, i) => {
      try {
        const blockedElem = btn.closest(".module__video-item").nextElementSibling;
        if (i % 2) {
          blockedElem.setAttribute("data-disabled", "true");
        }
      }catch(e){}

      if (!btn.closest(".module__video-item") || btn.closest(".module__video-item").getAttribute("data-disabled") !== "true") {
        btn.addEventListener("click", () => {
          this.activeBtn = btn;

          if (document.querySelector("iframe#frame")) {
            this.overlay.style.display = "flex";
            if (this.path !== btn.getAttribute("data-url")) {
              this.path = btn.getAttribute("data-url");
              this.player.loadVideoById({ videoId: this.path });
            }
          } else {
            this.path = btn.getAttribute("data-url");
            this.createPlayer(this.path);
          }
        });
      }
    });
  }

  onPlayerStateChange(state) {
    try {
      const blockedElem = this.activeBtn.closest(".module__video-item").nextElementSibling;
      const playBtn = this.activeBtn.querySelector("svg").cloneNode(true);

      if (state == 0) {
        if (blockedElem.querySelector(".play__circle").classList.contains("closed")) {
          blockedElem.querySelector(".play__circle").classList.remove("closed");
          blockedElem.querySelector("svg").remove();
          blockedElem.querySelector(".play__circle").append(playBtn);
          blockedElem.querySelector("play__text").textContent = "play video";
          blockedElem.querySelector("play__text").classList.remove("attention");
          blockedElem.style.opacity = "1";
          blockedElem.style.filter = "none";

          blockedElem.setAttribute("data-disabled", "false");
        }
      }
    } catch(e) {}
  }

  init() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.bindTriggers();
    this.bindCloseBtn();
  }
}