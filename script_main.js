import { putMessage, getMessages, deleteMessage, postMessage, } from "./modules/fetch.js";
import { displayMessage } from "./modules/display.js";

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


// const messageContainer = document.querySelector("#messageContainer");
// messageContainer.classList.add('displayHide')

/*
// stoffe: N.B. Replaced this event handler, see line 28 in scripts_list.js instead...
const formEL = document.querySelector("form");


formEL.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInput = document.querySelector("input").value;
   ////////////////////////////
  // Andréa added this part ///
  ////////////////////////////

 // *Explanation of feature added:
 // *The feature aims to play a sound when the user adds an item to the shopping list by pressing "Enter."

 const submitSound = new Audio('./audio/shoppinglist-submit-sound.mp3');
 submitSound.play();
 
 //////////////////////////////
 // Andréa's code end here ////
 /////////////////////////////

  //   putMessage(userInput).then(getMessages).then(displayMessage);
  postMessage(userInput)
    .then(getMessages).then(displayMessage);

  formEL.reset();
});
*/

const messageContainer = document.querySelector('#messageContainer');
messageContainer.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.className === 'deleteButton') {
    console.log(event.target);
    getMessages()
      .then(message => {
        for (const key in message) {
          const parentElement = event.target.parentElement;
          if (parentElement.id === key) {
            parentElement.remove();
            deleteMessage('messages', key);
          }

        }
      })
  }
})

getMessages()
  .then(displayMessage);


const shoppingListHeading = document.querySelector("#shoppingListHeading");


// const createListBtn = document.querySelector("#btnDiv");
// createListBtn.addEventListener("click", () => {
//   formEL.classList.remove("displayHide");
//   createListBtn.classList.add("displayHide");

//   shoppingListHeading.classList.remove("displayHide");
// });

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

