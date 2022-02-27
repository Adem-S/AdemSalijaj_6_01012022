//Garder le focus uniquement dans les formulaires, lightbox, select, ect..
function setFocusOnlyInContainer(
  classContainer,
  classFirstElement,
  classLastElement
) {
  let firstElement = document.querySelector(classFirstElement);
  let lastElement = document.querySelector(classLastElement);
  document
    .querySelector(classContainer)
    .addEventListener("keydown", (event) => {
      let isTab = event.key == "Tab" || event.keyCode == 9;

      if (!isTab) {
        return;
      }
      if (event.shiftKey) {
        if (document.activeElement == firstElement) {
          firstElement.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement == lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    });
}
