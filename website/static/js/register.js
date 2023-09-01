const loginBtn = document.getElementById("register-btn");
const allInputs = document.getElementsByTagName("input");
const allLabels = document.getElementsByTagName("label");
const errors = document.querySelectorAll(".err");

loginBtn.addEventListener("click", (e) => {
  //reset
  let isError = false;
  for (let i = 0; i < allInputs.length; i++) {
    allLabels[i].style.color = "#333";
    allInputs[i].style.borderColor = "#d9d9d9";
    errors[i].style.display = "none";
    isError = false;
  }

  //chack if input is empty
  for (let i = 0; i < allInputs.length; i++) {
    if (allInputs[i].value.trim() === "") {
      allLabels[i].style.color = "#FF3939";
      allInputs[i].style.borderColor = "#FF3939";
      errors[i].style.display = "block";
      isError = true;
    }
  }
  // check if input characters length is less than 8
  if (allInputs[1].value.length < 8 && allInputs[1].value.trim() !== "") {
    errors[1].style.display = "block";
    allLabels[1].style.color = "#FF3939";
    allInputs[1].style.borderColor = "#FF3939";
    isError = true;
  }

  // if confirm password input value does not equal password input value
  if (allInputs[2].value !== allInputs[1].value) {
    errors[2].style.display = "block";
    errors[2].textContent = "Please, check again";
    allLabels[2].style.color = "#FF3939";
    allInputs[2].style.borderColor = "#FF3939";
    isError = true;
  }

  //email validation function
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  }

  // check if user input is not an email
  if (!validateEmail(allInputs[0].value) && allInputs[0].value.trim() !== "") {
    errors[0].style.display = "block";
    errors[0].textContent = "this is not an email";
    errors[0].style.left = "60%";
    allLabels[0].style.color = "#FF3939";
    allInputs[0].style.borderColor = "#FF3939";
    isError = true;
  }
  {
    isError ? e.preventDefault() : null;
  }
});
