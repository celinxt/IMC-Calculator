export const Modal = {
  modal: document.querySelector(".modal"),
  modalCard: document.querySelector(".modal-card"),
  modalMsg: document.querySelector("#modal-msg"),
  btnClose: document.querySelector("#btn-close"),

  show() {
    Modal.modal.classList.toggle("modal-show");
    Modal.modalCard.classList.toggle("modal-show");
  },

  hide() {
    Modal.modal.classList.toggle("modal-show");
    Modal.modalCard.classList.toggle("modal-show");
  },
};

Modal.btnClose.onclick = (event) => {
  event.preventDefault();
  Modal.hide();
};

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    Modal.hide();
  }
});
