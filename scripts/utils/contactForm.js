const form = document.forms["contact"];
const closeBtnForm = document.querySelector(".contact_close_button");
const submitBtnForm = document.querySelector("button[type='submit']");

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

  let names = this.querySelectorAll("input[type='text']");
  let email = this.querySelector("input[type='email']");
  let message = this.querySelector("textarea");

  console.log(names[0].value);
  console.log(names[1].value);
  console.log(email.value);
  console.log(message.value);
  closeModal();
});

/* document.querySelector(".modal").addEventListener(
  "blur",
  (event) => {
    if (event.target == closeBtnForm) {
      console.log(event.target);

      if (document.activeElement.id !== "firstName") {
        console.log(document.activeElement);
        closeBtnForm.focus();
    }
  },
  true
); */

/* submitBtnForm.addEventListener("blur", () => {
  console.log(document.hasFocus);
  submitBtnForm.focus();
}); */

/* closeBtnForm.addEventListener("keypress", (event) => {
  console.log(event.key);
  if (event.key == "Shift" && event.key == "Tab") {
    submitBtnForm.focus();
  }
}); */
