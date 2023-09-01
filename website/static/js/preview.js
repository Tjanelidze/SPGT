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

const dataPerson = JSON.parse(localStorage.getItem("userInfo"));
const dataLinks = JSON.parse(localStorage.getItem("userData"));
const fullName = document.querySelector("h2");
const email = document.querySelector("p");
const links = document.querySelector(".wrapper");
const image = document.querySelector(".avatar");
const img = localStorage.getItem("userImage");

image.style.backgroundImage = `url(${img})`;
fullName.innerHTML = dataPerson.firstName + " " + dataPerson.lastName;
email.innerHTML = dataPerson.email;

dataLinks.map((link) => {
  let findEl = menuList.find((item) => item.name === link.platform);
  links.insertAdjacentHTML(
    "beforeend",
    `<a style="background:${findEl.color}" href="${link.link}" class="preview-card">
        <img src="${link.icon}" class="image"/>
        <p>${link.platform}</p>
        <img src="../static/assets/images/icon-arrow-right.svg" alt="arrow" class="arrow"/>
      </a>`
  );
});
