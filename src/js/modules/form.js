export default class Form {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.path = "assets/question.php";
    this.messages = {
      loading: "Загрузка...",
      sucсess: "Спасибо! Мы скоро вам перезвоним!",
      failure: "Что-то пошло не так. Попробуйте позже!",
      spinner: "assets/img/spinner.gif",
      ok: "assets/img/ok.png",
      fail: "assets/img/fail.png",
    };

  }
  initMask() {
    let setCursorPosition = (pos, elem) => {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();

        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };
  
    function createMask(event) {
      let matrix = '+1 (___) ___-____',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

      if (def.length >= val.length) {
        val = def;
      }

      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });

      if (event.type === 'blur') {
        if (this.value.length == 2) {
          this.value = '';
        }
      } else {
        setCursorPosition(this.value.length, this);
      }
    }

    let inputs = document.querySelectorAll('[name="phone"]');

    inputs.forEach(input => {
      input.addEventListener('input', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
    });
  }

  checkMailInput() {
    const mailInputs = document.querySelectorAll('[type="email"]');

    mailInputs.forEach(item => {
      item.addEventListener("keydown", (e) => {
        if (e.key.match(/[^a-z 0-9 @ \.]/ig) && e.keyCode !== 8 && e.keyCode !== 46) {
          e.preventDefault();
        }
      });
    });

    mailInputs.forEach(item => {
      item.addEventListener("paste", this.denyPasteIncorrect);
    });
    
  }
  denyPasteIncorrect(e) {
    let pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      let pastedText = pasted.getData("Text");
      console.log(pastedText);
      if (pastedText.match(/[^a-z 0-9 @ \.]/ig)) {
        e.preventDefault();
      }
    }
  }

 async postData (url, data) {
    let res = await fetch(url, {
      method: "POST",
     /*  headers: {
        "Content-type": "application/json"
      }, */
      body: data
    });
    return await res.text();
 }
  
  createStatusMessage(tag, status, parent, ...classNames) {
    const message = document.createElement(`${tag}`);
    if (tag === "img") {
      message.src = status;
    } else {
      message.textContent = status;
    }
    message.classList.add(...classNames);
    parent.append(message);
    return message;
  }
  
  
  init() {
    this.initMask();
    this.checkMailInput();
    this.forms.forEach(form => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        let statusMes = this.createStatusMessage("div", "", form.parentElement, "animated", "fadeInUp");
        let statusImg = this.createStatusMessage("img", this.messages.spinner, statusMes, "animated", "fadeInUp");
        let textMessage = this.createStatusMessage("div", this.messages.loading, statusMes, "animated", "fadeInUp");

        const formData = new FormData(form);

        this.postData(this.path, formData)
          .then(data => {
            console.log(data);
            statusImg.src = this.messages.ok;
            textMessage.textContent = this.messages.sucсess;
          })
          .catch(() => {
            statusImg.src = this.messages.fail;
            textMessage.textContent = this.messages.failure;
          })
          .finally(() => {
            form.reset();
            setTimeout(() => {
              statusMes.remove();
            }, 6000);
          });
      });
    });
  }

}