import Slider from "./slider";


export default class MiniSlider extends Slider {
  constructor(container, prev, next, animate, autoplay, activeClass) {
    super(container, prev, next, animate, autoplay, activeClass);
    this.paused = false;
  }
  /* filterSlides() {
    this.items = [...this.slides].filter(item => item.tagName != "BUTTON");

    console.log(this.slides);
  } */
  decorizeSlides() {
    this.slides.forEach(slide => {
      slide.classList.remove(this.activeClass);
      if (this.animate) {
        slide.querySelector(".card__title").style.opacity = "0.4";
        slide.querySelector(".card__controls-arrow").style.opacity = "0";
      }
    });
   
    if (!this.slides[0].closest("button")) {
      this.slides[0].classList.add(this.activeClass);
    }

    if (this.animate) {
      this.slides[0].querySelector(".card__title").style.opacity = "1";
      this.slides[0].querySelector(".card__controls-arrow").style.opacity = "1";
    }
  }

  nextSlide() {
    let btn = this.slides[this.slides.length - 2];
    if (btn.tagName === "BUTTON") {
      btn.before(this.slides[0]);
      this.decorizeSlides();
    } else {
      this.container.append(this.slides[0]);
      this.decorizeSlides();
    }
  }

  bindTriggers() {
    let btn = this.slides[this.slides.length - 2];
    if (btn.tagName === "BUTTON") {
      this.next[0].addEventListener("click", () => {
        this.nextSlide();
      });
      this.prev[0].addEventListener("click", () => {
        this.container.prepend(this.slides[this.slides.length - 3]);
        this.decorizeSlides();
      });
    } else {
      this.next[0].addEventListener("click", () => {
        this.nextSlide();
        /*  this.removed = this.slides.splice(0, 1);
         this.slides.push(this.removed); */
      });
      this.prev[0].addEventListener("click", () => {
        this.container.prepend(this.slides[this.slides.length - 1]);
        this.decorizeSlides();
      });
    }
  }

  autoPlay() {
    if (this.autoplay) {
      // let paused = false;
      this.paused = setInterval(() => this.nextSlide(), 5000);

      [this.container, this.next[0], this.prev[0]].forEach(item => {
        item.addEventListener("mouseenter", () => {
          clearInterval(this.paused);
        });
      });
    }
  }
  init() {
    try {
      this.container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      overflow: hidden;
    `;
      if (this.autoplay) {
        this.autoPlay();
        [this.container, this.next[0], this.prev[0]].forEach(item => {
          item.addEventListener("mouseleave", () => {
            this.autoPlay();
          });
        });
      }
      this.bindTriggers();
      this.decorizeSlides();
    } catch(e) {}
  }
}