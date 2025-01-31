export const handleNumericInput = (e, refProductPrice) => {
  const allowedKeys = [".", "Backspace", "ArrowLeft", "ArrowRight"];
  const input = e.key;

  if (allowedKeys.includes(input)) {
    return;
  }

  const currentValue = refProductPrice.current.value;
  const newValue = currentValue + input;

  const regex = /^[0-9]*\.?[0-9]*$/;

  if (!regex.test(newValue)) {
    e.preventDefault();
  }
};
