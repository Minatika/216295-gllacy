var link = document.querySelector(".feedback-btn");
var feedback = document.querySelector(".feedback");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".feedback-close");
var form = feedback.querySelector("form");
var fullname = feedback.querySelector("[name=fullname]");
var email = feedback.querySelector("[name=feedback-email]");
var message = feedback.querySelector("[name=message]");
var storageName = localStorage.getItem("fullname");
var storageEmail = localStorage.getItem("email");

link.addEventListener("click", function (e) {
  e.preventDefault();
  feedback.classList.add("feedback-show");
  if (storageName && storageEmail) {
    fullname.value = storageName;
    email.value = storageEmail;
    message.focus;
  } else {
    fullname.focus();
  }
});

close.addEventListener("click", function (e) {
  e.preventDefault();
  feedback.classList.remove("feedback-error");
  feedback.classList.remove("feedback-show");
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    if (feedback.classList.contains("feedback-show")) {
      feedback.classList.remove("feedback-show");
      feedback.classList.remove("feedback-error");
    }
  }
});

form.addEventListener("submit", function (e) {
  if (!fullname.value || !email.value || !message.value) {
    e.preventDefault();
    feedback.classList.remove("feedback-error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("feedback-error");
  } else {
    localStorage.setItem("fullname", fullname.value);
    localStorage.setItem("email", email.value);
  }
});
