export { calc, notNumber };

let calc = (weight, height) => {
  return (weight / (height / 100) ** 2).toFixed(2);
};

let notNumber = (value) => {
  return isNaN(value);
};
