const newLinkBtn = document.getElementById("new-link");
const emptyPanel = document.querySelector(".customize__empty-panel");
const insertLink = document.querySelector(".insert-link");
const cardWrapperDiv = document.querySelector(".card-wrapper");

const phoneMockDiv = document.querySelector(".phone_phone-mock");
const leftWholeDiv = document.querySelector(".main__links");
let platformItems = JSON.parse(localStorage.getItem("userData")) || [];

let linkCounter = 0;
const menuList = [
  {
    icon: "../static/assets/images/icon-github.svg",
    name: "Github",
    color: "#1A1A1A",
    placeHolder: "https://www.github.com/johnappleseed",
  },
  {
    icon: "../static/assets/images/icon-frontend-mentor.svg",
    name: "Frontend Mentor",
    color: "#FFF",
    fontColor:'#333',
    placeHolder: "https://www.frontendmentor.io/",
  },
  {
    icon: "../static/assets/images/icon-twitter.svg",
    name: "Twitter",
    color: "#43B7E9",
    placeHolder: "https://twitter.com/home",
  },
  {
    icon: "../static/assets/images/icon-linkedin.svg",
    name: "LinkedIn",
    color: "#2D68FF",
    placeHolder: "https://twitter.com/home",
  },
  {
    icon: "../static/assets/images/icon-youtube.svg",
    name: "YouTube",
    color: "#EE3939",
    placeHolder: "https://twitter.com/home",
  },
  {
    icon: "../../static/assets/images/icon-facebook.svg",
    name: "Facebook",
    color: "#2442AC",
    placeHolder: "https://www.youtube.com/",
  },
  {
    icon: "../static/assets/images/icon-twitch.svg",
    name: "Twitch",
    color: "#EE3FC8",
    placeHolder: "https://www.twitch.tv/",
  },
  {
    icon: "../static/assets/images/icon-devto.svg",
    name: "Dev.to",
    color: "#333",
    placeHolder: "https://dev.to/",
  },
  {
    icon: "../../static/assets/images/icon-codewars.svg",
    name: "Codewars",
    color: "#8A1A50",
    placeHolder: "https://www.codewars.com/dashboard",
  },
  {
    icon: "../static/assets/images/icon-codepen.svg",
    name: "Codepen",
    color: "#302267",
    placeHolder: "https://codepen.io/trending",
  },
  {
    icon: "../static/assets/images/icon-freecodecamp.svg",
    name: "freeCodeCamp",
    color: "#302267",
    placeHolder: "https://www.freecodecamp.org/",
  },
  {
    icon: "../static/assets/images/icon-gitlab.svg",
    name: "GitLab",
    color: "#EB4925",
    placeHolder: "https://about.gitlab.com/",
  },
  {
    icon: "../static/assets/images/icon-hashnode.svg",
    name: "Hashnode",
    color: "#0330D1",
    placeHolder: "https://hashnode.com/",
  },
  {
    icon: "../static/assets/images/icon-stack-overflow.svg",
    name: "Stack Overflow",
    color: "#EC7100",

    placeHolder: "https://stackoverflow.com/",
  },
];

const addItemToObj = (platform, link, icon) => {
  const platformItem = {
    platform,
    link,
    icon: "../../static/assets/images/icon-github.svg" || icon,
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
      if(card.textContent === 'Frontend Mentor'){
        card.style.color = '#333'
        cardIMG.style.filter='brightness(0%)'
      }
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

newLinkBtn.addEventListener("click", () => {
  phoneMockDiv.style.position = "fixed";
  leftWholeDiv.style.justifyContent = "start";
  insertLink.style.marginBottom = "auto";
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
              <img src="../static/assets/images/icon-chevron-down.svg" alt="">
              <img class="platform-icon" src="../static/assets/images/icon-github.svg"/>
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
                <img src="../static/assets/images/icon-link.svg" alt="">
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
          <img class="image" src="../static/assets/images/icon-github.svg" alt="github">
          <p class="link${linkCounter}">${selectedPlatform}</p>
        </div>
        <img src="../static/assets/images/icon-arrow-right.svg" alt="arrow" class="arrow">
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
    emptyPanel.style.display = "none";

    addItemToObj(selectedPlatform);

    const checkLinks = document.querySelectorAll(".links__link-items");
    const saveBtn = document.querySelector(".links_save button");
    if (checkLinks) {
      saveBtn.classList.remove("btn-disabled");
      saveBtn.addEventListener("click", () => {});
    } else if (!checkLinks) {
      emptyPanel.style.display = "block";
      saveBtn.classList.add("btn-disabled");
    }

    // Remove Handler
    const removeButton = document.querySelector(`#${platformSelectId}button`);
    removeButton.addEventListener("click", () => {
      linkCounter--;
      if (linkCounter === 0) {
        emptyPanel.style.display = "flex";
        leftWholeDiv.style.justifyContent = "space-between";
        insertLink.style.marginBottom = "0";
        phoneMockDiv.style.position = "";
      }

      const linkIndexToRemove = Number(platformSelectId.split("-")[1]);
      if (linkIndexToRemove) {
        platformItems.splice(linkIndexToRemove - 1, 1);
        saveData(platformItems);
        window.location.reload();
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
    const successfullyModal = document.querySelector(".save-modal");

    successfullyModal.textContent = "You can't add any more items";
    successfullyModal.style.color = "#fff";
    successfullyModal.style.bottom = "10px";
    successfullyModal.style.background = "#FF3939";
    setTimeout(() => {
      successfullyModal.style.bottom = "-100px";
    }, 1400);
  }
});
const saveBtn = document.querySelector(".links_save button");
saveBtn.addEventListener("click", () => {
  const checkLinks = document.querySelectorAll(".item__url input");
  const errorMessage = document.querySelectorAll(`.item__url div p`);
  errorMessage.forEach((error) => {
    error.style.display = "none";
  });
  let hasEmptyFields = false;
  const urlPattern = /^(http|https):\/\//i;
  checkLinks.forEach((input, index) => {
    if (input.value.trim() === "") {
      errorMessage[index].style.display = "block";
      hasEmptyFields = true;
    }
    if (hasEmptyFields) {
      errorMessage[index].textContent = "cant be empty";
      hasEmptyFields = true;
    } else if (!urlPattern.test(input.value)) {
      errorMessage[index].style.display = "block";
      errorMessage[index].textContent = "URL isn't correct";
      hasEmptyFields = true;
    }
  });
  if (!hasEmptyFields) {
    saveData(platformItems);
    const successfullyModal = document.querySelector(".save-modal");

    successfullyModal.textContent =
      "Your changes have been successfully saved!";
    successfullyModal.style.color = "#fff";
    successfullyModal.style.bottom = "10px";
    successfullyModal.style.background = "#1A1A1A";
    setTimeout(() => {
      window.location.reload();
    }, 1300);
  }
});
const storedData = localStorage.getItem("userData");
const existingData = storedData ? JSON.parse(storedData) : [];
const renderCards = (linkCounter, selectedItem, item) => {
  console.log(item)
  cardWrapperDiv.insertAdjacentHTML(
    "beforeend",
    `
    <a href="${item.link}" class="link-${linkCounter} link-preview link-card-margin-top" target="_blank" style="background: ${selectedItem.color}" >
      <div>
        <img class="image" src="${selectedItem.icon}" alt="${selectedItem.name}" style='filter:${item.platform === 'Frontend Mentor' ? 'brightness(0%)': ''} '>
        <p class="link${linkCounter}" style='color:${item.platform === 'Frontend Mentor' ? '#333': '#fff'}' >${item.platform}</p>
      </div>
      <img src="../static/assets/images/icon-arrow-right.svg" alt="arrow" class="arrow">
    </a>
    `
  );
};
const renderData = (linkCounter, data) => {
  data.forEach((item) => {
    linkCounter++;
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
        <img src="../static/assets/images/icon-chevron-down.svg" alt="">
        <img class="platform-icon" src="${item.icon}"/>
        <label for="platform-${linkCounter}">Platform</label>
        <select id="platform-${linkCounter}"class="platform-select" name="platforms" >
        ${menuList
          .map((i) => {
            const isSelected = item.platform === i.name ? "selected" : "";
            return `<option value="${item.platform}" ${isSelected} > ${i.name}</option>`;
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
            <img src="../static/assets/images/icon-link.svg" alt="">
          </div>
        </div>
      </div>
    </div>
    `
    );
  });
};

if (existingData.length > 0) {
  const reLoad = () => {
    renderData(linkCounter, existingData);
  };
  reLoad();
  phoneMockDiv.style.position = "fixed";
  leftWholeDiv.style.justifyContent = "start";
  insertLink.style.marginBottom = "auto";
  const newData = [existingData];

  linkCounter = 0;
  existingData.forEach((item) => {
    newData.push(item);
    emptyPanel.style.display = "none";
    linkCounter++;
    const renderedRemove = document.querySelector(
      `#platform-${linkCounter}button`
    );
    renderedRemove.addEventListener("click", (e) => {
      const newData = existingData.filter((i) => i.platform != item.platform);
      saveData(newData);
      location.reload();
    });
    const selectedItem = menuList.find((i) => i.name === item.platform);
    renderCards(linkCounter, selectedItem, item);
  });
}

const info = localStorage.getItem("userInfo");
const userImage = localStorage.getItem("userImage");
const userInfo = JSON.parse(info);

const userName = document.querySelector(
  ".phone__user-name .user-name__first-name"
);
const lastName = document.querySelector(
  ".phone__user-name .user-name__last-name"
);
const userEmail = document.querySelector(".phone__user-email");
const userAvatar = document.querySelector(".phone__avatar");

if (userInfo && userImage) {
  userName.textContent = userInfo.firstName;
  lastName.textContent = userInfo.lastName;
  userEmail.textContent = userInfo.email;
  userAvatar.style.background = `url(${userImage})`;
  userAvatar.style.backgroundPosition = "center";
  userAvatar.style.backgroundSize = "cover";
}
