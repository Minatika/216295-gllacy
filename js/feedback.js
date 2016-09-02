var link = document.querySelector(".feedback-btn");
var feedback = document.querySelector(".feedback");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".feedback-close");
var form = feedback.querySelector("form");
var fullname = feedback.querySelector("[name=fullname]");
var email = feedback.querySelector("[name=feedback-email]");
var message = feedback.querySelector("[name=message]");

link.addEventListener("click", function (e) {
  e.preventDefault();
  feedback.classList.add("feedback-show");
  overlay.classList.add("overlay-show");
  fullname.focus();
});

close.addEventListener("click", function (e) {
  e.preventDefault();
  feedback.classList.remove("feedback-error");
  feedback.classList.remove("feedback-show");
  overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    if (feedback.classList.contains("feedback-show")) {
      feedback.classList.remove("feedback-show");
      feedback.classList.remove("feedback-error");
      overlay.classList.remove("overlay-show");
    }
  }
});

form.addEventListener("submit", function (e) {
  if (!fullname.value || !email.value || !message.value) {
    e.preventDefault();
    feedback.classList.remove("feedback-error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("feedback-error");
  }
});
