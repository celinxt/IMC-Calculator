export const AlertError = {
  element: document.querySelector(".alert"),

  show() {
    AlertError.element.classList.add("alert-show");
  },

  hide() {
    AlertError.element.classList.remove("alert-show");
  },
};
