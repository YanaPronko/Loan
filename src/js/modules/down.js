export default class Down {
  constuctor(selector) {
    this.bts = document.querySelectorAll(selector);
    this.path = "assets/img/mainbg.jpg";
  }

  downloadFile(path) {
    // e.preventDefault();
    const link = document.createElement("a");
    link.setAttribute("href", path);
    link.setAttribute("download", "picture");
    link.style.display = "none";
    document.body.append(link);
    link.click();
    // document.body.remove(link);
  }

  init() {
    console.log(this.bts);
    this.bts.forEach(btn => {
      btn.addEventListener("click", () => {
        this.downloadFile(this.path);
      });
    });  
  }
}