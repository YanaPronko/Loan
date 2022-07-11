export default class Difference {
  constructor(oldofficer, newofficer, items) {
    this.oldofficer = document.querySelector(oldofficer);
    this.newofficer = document.querySelector(newofficer);
    try {
      this.oldItems = this.oldofficer.querySelectorAll(items);
      this.newItems = this.newofficer.querySelectorAll(items);
    } catch(e){}
    this.oldCounter = 0;
    this.newCounter = 0;
  }

  /* showCards(col, counter) {
    if(counter !== col.length - 2) {
      col[counter].style.display = "flex";
      counter++;
    } else {
      col[counter].style.display = "flex";
      col[col.lenght - 1].remove();
    }
  }

  bindTriggers(item, col, counter) {
    item.querySelector(".plus").addEventListener("click", () => {
      this.showCards(col, counter);
    });
  }

  hideItems(collection) {
    collection.forEach((item, index, arr) => {
      if (index !== collection.length - 1) {
        item.style.display = "none";
        item.classList.add("fadeOut");
      }
    });
  }
  init() {
    this.hideItems(this.oldItems);
    this.hideItems(this.newItems);
    this.bindTriggers(this.oldofficer, this.oldItems, this.oldCounter);
    this.bindTriggers(this.newofficer, this.newItems, this.newCounter);
  } */
/*   showCards(col, counter) {
      if(counter !== col.length - 2) {
        col[counter].style.display = "flex";
        counter++;
      } else {
        col[counter].style.display = "flex";
        col[col.lenght - 1].remove();
      }
    } */
  
    bindTriggers(item, col, counter) {
      item.querySelector(".plus").addEventListener("click", () => {
        if (counter !== col.length - 2) {
          col[counter].style.display = "flex";
          counter++;
        } else {
          col[counter].style.display = "flex";
          col[col.length - 1].remove();
        }
      });
    }
  
    hideItems(collection) {
      collection.forEach((item, index, arr) => {
        if (index !== collection.length - 1) {
          item.style.display = "none";
          item.classList.add("fadeOut");
        }
      });
    }
    init() {
      try {
        this.hideItems(this.oldItems);
        this.hideItems(this.newItems);
        this.bindTriggers(this.oldofficer, this.oldItems, this.oldCounter);
        this.bindTriggers(this.newofficer, this.newItems, this.newCounter);
      } catch(e) {}
    }


}