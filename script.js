let arrayError = document.querySelectorAll(".error");
let arrayInputsText = document.querySelectorAll(".inputText");
let submitButton = document.querySelector("#submitButton");

let radioNameInput = document.getElementsByName("theRadio");
let radioError = document.querySelector(".errorMessageQuery");

let checkBox = document.querySelector("#checkbox");
let checkBoxError = document.querySelector(".errorMessageConsent");
let hasError = false;

submitButton.addEventListener("click", (event) => {
  for (let i = 0; i < arrayError.length; i++) {
    if (arrayInputsText[i].value == "") {
      arrayError[i].style.display = "block";
      arrayInputsText[i].style.borderColor = "red";
    }
  }

  function returnTrueOrFalse() {
    for (let i = 0; i < radioNameInput.length; i++) {
      if (radioNameInput[i].checked) {
        return true;
      }
    }
    return false;
  }

  if (!returnTrueOrFalse()) {
    radioError.style.display = "block";
  }
  if (!checkBox.checked) {
    checkBoxError.style.display = "block";
  }

  // if (!hasError) {
  //   const successDialog = document.getElementById("successDialog");
  //   successDialog.showModal();
  // }
});

document.addEventListener("click", (event) => {
  const clickedElement = event.target;

  if (clickedElement.type == "radio") {
    return;
  }
});

// for (let i = 0; i < radioNameInput.length; i++)
//   if (radioNameInput[i].checked) {
//     radioNameInput[i].checked = false;
//   }
