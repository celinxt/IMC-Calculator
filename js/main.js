import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calc, notNumber } from "./functions.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

inputWeight.oninput = () => AlertError.hide();
inputHeight.oninput = () => AlertError.hide();

form.onsubmit = (event) => {
  event.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;
  const result = calc(weight, height);
  const showAlertError = notNumber(weight) || notNumber(height);

  if (showAlertError) {
    AlertError.show();
    return;
  }
  AlertError.hide();

  Modal.modalMsg.innerHTML = "Seu IMC é " + result;
  Modal.show();
};
