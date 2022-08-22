const form = document.querySelector(".form");
const input = form.querySelector(".footer__input");
const errMsg = form.querySelector(".form__error-message");
const submitBtn = form.querySelector(".footer__btn");
form.addEventListener("sumbit", (e) => {
    e.preventDefault();
})
function errorMsg(event) {
    console.log(event.target)
    console.log(input.value.includes("@"))
    if (input.value.includes("@")) {
        errMsg.ariaHidden = true;
        errMsg.classList.remove("form__error-message--show");
    } else {
        errMsg.ariaHidden = false;
        errMsg.classList.add("form__error-message--show");
    }
}
input.addEventListener("blur", errorMsg);
submitBtn.addEventListener("click", errorMsg);