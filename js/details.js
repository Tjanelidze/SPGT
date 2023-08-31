const data = localStorage.getItem("userData");
const retrievedData = JSON.parse(data);
const menuList = [
  {
    icon: "../assets/images/icon-github.svg",
    name: "Github",
    color: "#1A1A1A",
  },
  {
    icon: "../assets/images/icon-frontend-mentor.svg",
    name: "Frontend Mentor",
    color: "#FFF",
  },
  {
    icon: "../assets/images/icon-twitter.svg",
    name: "Twitter",
    color: "#43B7E9",
  },
  {
    icon: "../assets/images/icon-linkedin.svg",
    name: "LinkedIn",
    color: "#2D68FF",
  },
  {
    icon: "../assets/images/icon-youtube.svg",
    name: "YouTube",
    color: "#EE3939",
  },
  {
    icon: "../assets/images/icon-facebook.svg",
    name: "Facebook",
    color: "#2442AC",
  },
  {
    icon: "../assets/images/icon-twitch.svg",
    name: "Twitch",
    color: "#EE3FC8",
  },
  {
    icon: "../assets/images/icon-devto.svg",
    name: "Dev.to",
    color: "#333",
  },
  {
    icon: "../assets/images/icon-codewars.svg",
    name: "Codewars",
    color: "#8A1A50",
  },
  {
    icon: "../assets/images/icon-codepen.svg",
    name: "Codepen",
    color: "#302267",
  },
  {
    icon: "../assets/images/icon-freecodecamp.svg",
    name: "freeCodeCamp",
    color: "#302267",
  },
  {
    icon: "../assets/images/icon-gitlab.svg",
    name: "GitLab",
    color: "#EB4925",
  },
  {
    icon: "../assets/images/icon-hashnode.svg",
    name: "Hashnode",
    color: "#0330D1",
  },
  {
    icon: "../assets/images/icon-stack-overflow.svg",
    name: "Stack Overflow",
    color: "#EC7100",
  },
];
const cardWrapper = document.querySelector(".card-wrapper");
const fileUploader = document.querySelector("#file");
const fileUploaderBox = document.querySelector(".box");
const upload = document.querySelector("#upload-output");

const saveBtn = document.querySelector(".btn-fill");

const firstName = document.querySelector(".user__first-name input");
const lastName = document.querySelector(".user__last-name input");
const email = document.querySelector(".user__email input");

const firstN = document.querySelector(".name .firstname");
const lastN = document.querySelector(".name .lastname");
const userEmail = document.querySelector(".useremail");

firstName.addEventListener("input", (e) => {
  firstN.textContent = e.target.value;
});

lastName.addEventListener("input", (e) => {
  lastN.textContent = e.target.value;
});
email.addEventListener("input", (e) => {
  userEmail.textContent = e.target.value;
});

if (retrievedData) {
  retrievedData.forEach((el) => {
    const getItem = menuList.find((item) => item.name === el.platform);
    const color = getItem.color;
    cardWrapper.insertAdjacentHTML(
      `beforeend`,
      `
    <a style="background: ${color}" href="${el.link}" class="link-preview link-card-margin-top" target="_blank" >
      <div>
        <img class="image" src="${el.icon}" alt="github">
        <p class="link">${el.platform}</p>
      </div>
      <img src="../assets/images/icon-arrow-right.svg" alt="arrow" class="arrow">
    </a>
    `
    );
  });
}

fileUploader.addEventListener("change", (e) => {
  const maxFileSize = 1024 * 1024;
  const image = e.target.files[0];

  const reader = new FileReader();

  reader.readAsDataURL(image);

  reader.addEventListener("load", () => {
    if (fileUploader.files[0].size < maxFileSize) {
      upload.style.backgroundImage = `url(${reader.result})`;
      fileUploaderBox.style.backgroundImage = `url(${reader.result})`;
      fileUploaderBox.style.backgroundPosition = "center";
      fileUploaderBox.style.backgroundSize = "cover";
      localStorage.setItem("userImage", reader.result);
    } else {
      alert("Image dimensions must be below 1024x1024 pixels.");
      fileUploader.value = "";
      return;
    }
  });
});

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const firstNameError = document.querySelector(".user__first-name p");
  const lastNameError = document.querySelector(".user__last-name p");

  if (firstName.value.trim() != "" && lastName.value.trim() != "") {
    const userInfo = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
    };
    const jsonString = JSON.stringify(userInfo);
    localStorage.setItem("userInfo", jsonString);
    lastNameError.style.opacity = "0";
    firstNameError.style.opacity = "0";
    const successfullyModal = document.querySelector(".save-modal");
    successfullyModal.style.bottom = "10px";
    setTimeout(() => {
      successfullyModal.style.bottom = "-100px";
    }, 1300);
  }

  if (firstName.value.trim() === "") {
    firstNameError.style.opacity = "1";
  }
  if (lastName.value.trim() === "") {
    lastNameError.style.opacity = "1";
  }
});
const info = localStorage.getItem("userInfo");
const userImage = localStorage.getItem("userImage");
const retrievedInfo = JSON.parse(info);
if (retrievedInfo) {
  firstName.value = retrievedInfo.firstName || "";
  lastName.value = retrievedInfo.lastName || "";
  email.value = retrievedInfo.email || "";
  upload.style.backgroundImage = `url(${retrievedInfo.photo || ""})`;
  firstN.textContent = firstName.value;
  lastN.textContent = lastName.value;
  userEmail.textContent = email.value;
  upload.style.backgroundImage = `url(${userImage})`;
  fileUploaderBox.style.backgroundImage = `url(${userImage})`;
  fileUploaderBox.style.backgroundPosition = "center";
  fileUploaderBox.style.backgroundSize = "cover";
}
