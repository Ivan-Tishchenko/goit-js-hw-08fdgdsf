import throttle from "lodash.throttle"; 

const form = document.querySelector('form');
const formValue = {};
form.addEventListener("input", throttle((e) => {
    formValue[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formValue));
}, 500))
form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.currentTarget.reset()
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")))
    localStorage.clear()
})
