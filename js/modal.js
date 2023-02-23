export const Modal = {
  modal: document.querySelector(".modal"),
  modalMessage: document.querySelector(".m-title"),
  modalBtnClose: document.querySelector(".close"),

  open() {
    Modal.modal.classList.add("open");
  },
  close() {
    Modal.modal.classList.remove("open");
  },
};

// Event to close modal
Modal.modalBtnClose.onclick = () => {
  Modal.close();
};

// Using the esc key to close the modal
let handleKeydown = (event) => {
  if (event.key === "Escape") {
    Modal.close();
  }
};

window.addEventListener("keydown", handleKeydown);
