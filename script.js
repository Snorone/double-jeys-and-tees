//Hamburger menu "Start"//
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
//Hamburger menu "End"//

//  start darkmode

const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});

//end darkmode

// const createListBtn = document.querySelector("#btnDiv");
// createListBtn.addEventListener("click", () => {
//   formEL.classList.remove("displayHide");
//   createListBtn.classList.add("displayHide");

//   shoppingListHeading.classList.remove("displayHide");
// });

// Yasir start contact button

const contactForm = document.querySelector("#contactformbutton");

if (contactForm !== undefined && contactForm !== null) {
  contactForm.addEventListener("click", (event) => {
    event.preventDefault();
    const popUp = document.querySelector("#popUp");
    popUp.style.display = "flex";
    const backgroundShade = document.querySelector(".backgroundShade");
    backgroundShade.style.display = "block";
  });
};

const contactClose = document.querySelector("#contactClose").addEventListener("click", (event) => {
  event.preventDefault();
  let popUp = document.querySelector("#popUp").style.display = "none";
  const backgroundShade = document.querySelector(".backgroundShade").style.display = "none";
});


// Yasir slut contact button
