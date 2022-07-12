export default class Download {
  constructor(selector) {
    this.bts = document.querySelectorAll(selector);
    this.path = "assets/img/mainbg.jpg";
  }

  downloadFile(path) {
    const link = document.createElement("a");
    link.setAttribute("href", path);
    link.setAttribute("download", "picture");
    link.classList.add("link");
    link.style.display = "none";
    /* link.addEventListener("click", (e) => {
      e.preventDefault();
     
    }); */
    document.body.append(link);
    /* document.querySelector(".link").addEventListener("clik", (e) => {
      e.preventDefault();
      e.stopPropagation();
    }); */
    link.click();
    link.remove();
  }

  init() {
    this.bts.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.downloadFile(this.path);
      });
    });  
  }
}

