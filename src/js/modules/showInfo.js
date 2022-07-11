export default class ShowInfo {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
  }

  init() {
    this.btns.forEach(btn => {
      btn.addEventListener("click", () => {
        const sibling = btn.closest(".module__info-show").nextElementSibling;
        if (sibling.classList.contains('msg')) {
          sibling.classList.remove("msg");
          sibling.classList.remove("fadeOutUp");
          sibling.classList.add("animated", "fadeInUp");
          sibling.style.marginTop = "20px";
        } else {
          sibling.classList.add("msg");
          sibling.classList.add("fadeOutUp");
          sibling.classList.remove("fadeInUp");
        }  
      });
    });
  }
}