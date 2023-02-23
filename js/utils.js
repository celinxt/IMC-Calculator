// Calc IMC
export let IMC = (weight, height) => {
  return (weight / (height / 100) ** 2).toFixed(2);
};

// Verify if value is a number
export let notANumber = (value) => {
  return isNaN(value) || value == "";
};
