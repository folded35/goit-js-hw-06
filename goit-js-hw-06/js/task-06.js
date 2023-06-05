const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const requiredLength = parseInt(validationInput.dataset.length);
  const enteredLength = validationInput.value.length;

  if (enteredLength === requiredLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
