let arrayError = document.querySelectorAll(".error");
let arrayInputsText = document.querySelectorAll(".inputText");
let submitButton = document.querySelector("#submitButton");

let radioNameInput = document.getElementsByName("theRadio");
let radioError = document.querySelector(".errorMessageQuery");
let checkBox = document.querySelector("#checkbox");
let checkBoxError = document.querySelector(".errorMessageConsent");

let dialog = document.querySelector("#modal");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  let formIsValid = true;

  function isEmailValid(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  for (let i = 0; i < arrayInputsText.length; i++) {
    if (arrayInputsText[i].type === "email") {
      if (!isEmailValid(arrayInputsText[i].value)) {
        arrayError[i].style.display = "block";
        arrayInputsText[i].style.borderColor = "red";
        formIsValid = false;
      } else {
        arrayError[i].style.display = "none";
        arrayInputsText[i].style.borderColor = "";
      }
    } else {
      if (arrayInputsText[i].value === "") {
        arrayError[i].style.display = "block";
        arrayInputsText[i].style.borderColor = "red";
        formIsValid = false;
      } else {
        arrayError[i].style.display = "none";
        arrayInputsText[i].style.borderColor = "";
      }
    }
  }

  if (!returnTrueOrFalse()) {
    radioError.style.display = "block";
    formIsValid = false;
  } else {
    radioError.style.display = "none";
  }

  if (!checkBox.checked) {
    checkBoxError.style.display = "block";
    formIsValid = false;
  } else {
    checkBoxError.style.display = "none";
  }

  if (formIsValid) {
    dialog.showModal();

    setTimeout(() => {
      document.querySelector("form").submit();
    }, 3000);
  }
});

function returnTrueOrFalse() {
  for (let i = 0; i < radioNameInput.length; i++) {
    if (radioNameInput[i].checked) {
      return true;
    }
  }
  return false;
}
