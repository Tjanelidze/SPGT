const loginBtn = document.getElementById("log-btn");
const allInputs = document.getElementsByTagName("input");
const allLabels = document.getElementsByTagName("label");
const errors = document.querySelectorAll(".err");

loginBtn.addEventListener("click", () => {
  //reset
  for (let i = 0; i < allInputs.length; i++) {
    allLabels[i].style.color = "#333";
    allInputs[i].style.borderColor = "#d9d9d9";
    errors[i].style.display = "none";
  }

  //chack if input is empty
  for (let i = 0; i < allInputs.length; i++) {
    if (allInputs[i].value.trim() === "") {
      allLabels[i].style.color = "#FF3939";
      allInputs[i].style.borderColor = "#FF3939";
      errors[i].style.display = "block";
    }
  }
  // check if input characters length is less than 8
  if (allInputs[1].value.length < 8 && allInputs[1].value.trim() !== "") {
    errors[1].style.display = "block";
    errors[1].textContent = "Please, check again";
    errors[1].style.left = "60%";
    allLabels[1].style.color = "#FF3939";
  }
});
