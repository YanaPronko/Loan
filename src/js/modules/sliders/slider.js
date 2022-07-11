export default class Slider {
  constructor({ container = null,
    btns = null,
    next = null,
    prev = null,
    activeClass = "",
    animate,
    autoplay } = {}) {
    this.container = document.querySelector(container);
    try { this.slides = this.container.children; } catch(e){}
    this.btns = document.querySelectorAll(btns);
    this.next = document.querySelectorAll(next);
    this.prev = document.querySelectorAll(prev);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }

  /* showSlides(n) {
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
    this.showSlides(this.slideIndex += n);
  }

  render() {
    try {
      this.hanson = document.querySelector(".hanson");
    } catch (e) { }
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
    this.showSlides(this.slideIndex);
  } */
}