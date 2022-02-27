const form = document.forms["contact"];
const closeBtnForm = document.querySelector(".contact_close_button");
const submitBtn = document.querySelector("button[type='submit']");

function displayModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";
  closeBtnForm.focus();
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

// Evenement validation du formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault();
  e.stopPropagation();

  let names = this.querySelectorAll("input[type='text']");
  let email = this.querySelector("input[type='email']");
  let message = this.querySelector("textarea");

  console.log(names[0].value);
  console.log(names[1].value);
  console.log(email.value);
  console.log(message.value);
  if (document.activeElement == submitBtn) {
    closeModal();
  }
});

setFocusOnlyInContainer(
  ".modal",
  ".contact_close_button",
  "button[type='submit']"
);
