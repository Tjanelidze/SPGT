const newLinkBtn = document.getElementById("new-link");
const emptyPanel = document.querySelector(".customize__empty-panel");
const insertLink = document.querySelector(".insert-link");
const cardWrapperDiv = document.querySelector(".card-wrapper");
let platformItems = JSON.parse(localStorage.getItem("userData")) || [];
// let platformItems = [];
// const platformItems = [];
let linkCounter = 0;
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
const addItemToObj = (platform, link, icon) => {
  const platformItem = {
    platform,
    link,
    icon: "../assets/images/icon-github.svg" || icon,
  };
  platformItems.push(platformItem);
};

const saveData = (data) => {
  localStorage.setItem("userData", JSON.stringify(data));
};

const modifyIcon = (
  previewCard,
  platformSelect,
  platformIcon,
  selectedPlatform
) => {
  let platformColor = "";

  if (selectedPlatform) {
    platformColor = selectedPlatform.color;
    previewCard.style.background = platformColor;
    const platformIconElement =
      platformSelect.parentElement.querySelector(".platform-icon");
    if (platformIconElement) {
      platformIconElement.src = platformIcon;
    }
  }
};
const changePlatformUrl = (platformSelectId, linkId, URLInput) => {
  const linkIndex = Number(platformSelectId.split("-")[1]);
  if (linkIndex) {
    platformItems[linkIndex - 1].link = URLInput.value;
    const anchorElement = document.querySelector(`.link-${linkId}`);
    if (anchorElement) {
      anchorElement.href = URLInput.value;
    }
  }
};
const changePlatformName = (platformSelectId, platformSelect, platformIcon) => {
  const linkIndex = Number(platformSelectId.split("-")[1]);

  if (linkIndex) {
    platformItems[linkIndex - 1].platform = platformSelect.value;
    platformItems[linkIndex - 1].icon = platformIcon;
    const card = cardWrapperDiv.querySelector(`.link${linkIndex}`);
    const cardIMG = cardWrapperDiv.querySelector(`.link-${linkIndex} img`);
    if (card) {
      card.textContent = platformSelect.value;
      cardIMG.src = platformIcon;
    }
  }
};
const storData = localStorage.getItem("userData");
const save = document.querySelector(".links_save button");
if (storData) {
  save.classList.remove("btn-disabled");
} else {
  save.classList.add("btn-disabled");
}
// linkCounter = parsedData.length;
newLinkBtn.addEventListener("click", () => {
  linkCounter++;

  const platformSelectId = `platform-${linkCounter}`;
  if (linkCounter <= 5) {
    const linkId = linkCounter;
    insertLink.insertAdjacentHTML(
      "beforeend",
      `
      <div class="links__link-items">
          <div class="link__item">
            <div class="item__header">
              <div class="item-header__left">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" fill="none" viewBox="0 0 12 6">
                  <path fill="#737373" d="M0 0h12v1H0zM0 5h12v1H0z" />
                </svg>
                <span>Link #${linkCounter}</span>
              </div>
              <div class="item-header__right">
                <button id="${platformSelectId}button" >Remove</button>
              </div>
            </div>
            <div class="item__platform">
              <img src="../assets/images/icon-chevron-down.svg" alt="">
              <img class="platform-icon" src="../assets/images/icon-github.svg"/>
              <label for="${platformSelectId}">Platform</label>
              <select id="${platformSelectId}"class="platform-select" name="platforms">
              <img class="platform-icon" src="../assets/images/icon-github.svg"/>
              ${menuList
                .map((item) => {
                  return `<option value="${item.name}">${item.name}</option>`;
                })
                .join("")}
              </select>
            </div>
            <div class="item__url">
              <label for="link">Link</label>
              <div>
                <input type="text" name="link" id="link${linkCounter}" placeholder="e.g. https://www.github.com/johnappleseed">
                <p>error</p>
                <img src="../assets/images/icon-link.svg" alt="">
              </div>
            </div>
          </div>
        </div>
    `
    );

    const platformSelect = document.querySelector(`#${platformSelectId}`);
    const URLInput = document.querySelector(`#link${linkId}`);
    const selectedPlatform = platformSelect.value;

    cardWrapperDiv.insertAdjacentHTML(
      "beforeend",
      `
      <a href="#" class="link-${linkCounter} link-preview link-card-margin-top" target="_blank">
        <div>
          <img class="image" src="../assets/images/icon-github.svg" alt="github">
          <p class="link${linkCounter}">${selectedPlatform}</p>
        </div>
        <img src="../assets/images/icon-arrow-right.svg" alt="arrow" class="arrow">
      </a>
      `
    );

    // manages platformname and platform icon onClick
    let platformIcon = "";
    const previewCard = document.querySelector(`.link-${linkCounter}`);
    platformSelect.addEventListener("change", () => {
      const selectedPlatformName = platformSelect.value;
      const selectedPlatform = menuList.find(
        (item) => item.name === selectedPlatformName
      );
      platformIcon = selectedPlatform.icon;
      modifyIcon(previewCard, platformSelect, platformIcon, selectedPlatform);

      changePlatformName(platformSelectId, platformSelect, platformIcon);
    });
    // ----------------

    // manages url change when input is changed
    URLInput.addEventListener("input", () => {
      changePlatformUrl(platformSelectId, linkId, URLInput);
    });
    // ----------------

    // remove empty panel illustration
    emptyPanel.remove();

    addItemToObj(selectedPlatform);

    // Remove Handler
    const checkLinks = document.querySelectorAll(".links__link-items");
    const saveBtn = document.querySelector(".links_save button");
    if (checkLinks) {
      saveBtn.classList.remove("btn-disabled");
      saveBtn.addEventListener("click", () => {});
    } else if (!checkLinks) {
      saveBtn.classList.add("btn-disabled");
    }
    const removeButton = document.querySelector(`#${platformSelectId}button`);
    removeButton.addEventListener("click", () => {
      linkCounter--;

      const linkIndexToRemove = Number(platformSelectId.split("-")[1]);
      if (linkIndexToRemove) {
        platformItems.splice(linkIndexToRemove - 1, 1);
      }

      const linkItemToRemove = document
        .querySelector(`#${platformSelectId}`)
        .closest(".links__link-items");
      linkItemToRemove.remove();
      previewCard.remove();
      const checkLinks = document.querySelectorAll(".links__link-items");
      const saveBtn = document.querySelector(".links_save button");

      if (checkLinks.length === 0) {
        saveBtn.classList.add("btn-disabled");
      }
    });
  } else {
    // TODO:error message
    console.log("You can't add any more items.");
  }
});
const saveBtn = document.querySelector(".links_save button");
saveBtn.addEventListener("click", () => {
  const checkLinks = document.querySelectorAll(".item__url input");
  const errorMessage = document.querySelectorAll(`.item__url div p`);
  // TODO: more validation
  errorMessage.forEach((error) => {
    error.style.display = "none";
  });
  let hasEmptyFields = false;
  checkLinks.forEach((input, index) => {
    if (input.value.trim() === "") {
      errorMessage[index].style.display = "block";
      hasEmptyFields = true;
    }
    if (hasEmptyFields) {
      // TODO: more error messages
      errorMessage[index].textContent = "cant be empty";
      hasEmptyFields = true;
    }
  });
  if (!hasEmptyFields) {
    console.log(platformItems);
    // const jsonString = JSON.stringify(platformItems);
    saveData(platformItems);
    console.log("Data saved successfully!");
  }
});
const storedData = localStorage.getItem("userData");
const existingData = storedData ? JSON.parse(storedData) : [];

if (existingData.length > 0) {
  existingData.forEach((item) => {
    linkCounter++;
    emptyPanel.remove();
    insertLink.insertAdjacentHTML(
      "beforeend",
      `
      <div class="links__link-items">
      <div class="link__item">
      <div class="item__header">
      <div class="item-header__left">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" fill="none" viewBox="0 0 12 6">
      <path fill="#737373" d="M0 0h12v1H0zM0 5h12v1H0z" />
      </svg>
      <span>Link #${linkCounter}</span>
      </div>
      <div class="item-header__right">
      <button id="platform-${linkCounter}button">Remove</button>
            </div>
          </div>
          <div class="item__platform">
          <img src="../assets/images/icon-chevron-down.svg" alt="">
          <img class="platform-icon" src="../assets/images/icon-github.svg"/>
          <label for="platform-${linkCounter}">Platform</label>
          <select id="platform-${linkCounter}"class="platform-select" name="platforms" >
          <img class="platform-icon" src="../assets/images/icon-github.svg"/>
          ${menuList
            .map((i) => {
              return `<option selected=${item.name} value="${i.name}">${i.name}</option>`;
            })
            .join("")}
            </select>
            </div>
            <div class="item__url">
            <label for="link">Link</label>
            <div>
            <input value=${
              item.link
            }  type="text" name="link" id="link${linkCounter}" placeholder="e.g. https://www.github.com/johnappleseed">
              <p>error</p>
              <img src="../assets/images/icon-link.svg" alt="">
            </div>
          </div>
        </div>
      </div>
      `
    );
    const selectedItem = menuList.find((i) => i.name === item.platform);
    cardWrapperDiv.insertAdjacentHTML(
      "beforeend",
      `
      <a href="#" class="link-${linkCounter} link-preview link-card-margin-top" target="_blank" style="background: ${selectedItem.color}" >
      <div>
      <img class="image" src="${selectedItem.icon}" alt="${selectedItem.name}">
      <p class="link${linkCounter}">${item.platform}</p>
      </div>
      <img src="../assets/images/icon-arrow-right.svg" alt="arrow" class="arrow">
      </a>
      `
    );
  });
}
