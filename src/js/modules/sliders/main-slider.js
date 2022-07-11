import Slider from "./slider";

export default class MainSlider extends Slider {
  constructor(btns, container, prev, next ) {
    super(btns, container, prev, next);
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    try {
      this.hanson.style.opacity = "0";
      if (n === 3) {
        this.hanson.classList.add("animated");
        setTimeout(() => {
          this.hanson.style.opacity = "1";
          this.hanson.classList.add("slideInUp");
        }, 3000);
      } else {
        this.hanson.classList.remove("slideInUp");
      }
    } catch (e) { }
    this.slides.forEach(slide => {
      slide.style.display = "none";
      slide.classList.add("animated", "fadeOutLeft");
      slide.classList.remove("fadeInLeft");
    });
    this.slides[this.slideIndex - 1].style.display = "block";
    this.slides[this.slideIndex - 1].classList.remove("fadeOutLeft");
    this.slides[this.slideIndex - 1].classList.add("animated", "fadeInLeft");
  }
  plusSlides(n) {
    // if (e.defaultPrevented) return;
    this.showSlides(this.slideIndex += n);
  }

  bindTriggers() {
    this.btns.forEach(btn => {
      btn.addEventListener("click", () => {
        this.plusSlides(1);
      });
      btn.parentElement.previousElementSibling.addEventListener("click", (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });

    this.prev.forEach(prev => {
      prev.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log(this.prev);
        this.plusSlides(-1);
      });
    });

    this.next.forEach(next => {
      next.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log(this.next);
        this.plusSlides(1);
      });
    });
  }

  render() {
    if(this.container) {
      try {
        this.hanson = document.querySelector(".hanson");
      } catch (e) {}
     
      this.showSlides(this.slideIndex);
      this.bindTriggers();
   } 
  }
}