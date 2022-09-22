const mainForm = document.forms.subscribe;
const mainFormInput = mainForm.nameInput;
const mainFormInputPlaceholder = mainFormInput.placeholder;

function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

mainFormInput.addEventListener("focus", function (e) {
  mainFormInput.placeholder = "";
});
mainFormInput.addEventListener("blur", function (e) {
  mainFormInput.placeholder = mainFormInputPlaceholder;
});

