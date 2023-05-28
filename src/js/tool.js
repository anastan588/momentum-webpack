import {
  getCurrentLanguage,
  currentLanguage,
  toolTranslateObjectEn,
  toolTranslateObjectRu,
  languageForm,
} from "./translate.js";
//console.log(toolTranslateObjectEn, toolTranslateObjectRu);

/*alert(
  `Уважаемые проверяющие, очень прошу проверить работу в последний день проверки, т.к. она еще немного недоделана. Буду очень благодарна! Всем хороших оценок)`
);*/

const toolMenu = document.querySelector(".tool_container");
const toolButton = document.querySelector(".tool");
const elementName = document.querySelectorAll(".show_item");
const languageName = document.querySelector(".language");
const photoSourseName = document.querySelector(".photo_source");
const photoThemeName = document.querySelector(".photo_theme");
const showName = document.querySelector(".show_name");
const english = document.querySelector(".english");
const russian = document.querySelector(".russian");
const playerCheck = document.getElementById("player");
const playerBlock = document.querySelector(".player");
const weatherCheck = document.getElementById("weather");
const weatherBlock = document.querySelector(".weather");
const timeCheck = document.getElementById("time");
const timeBlock = document.querySelector(".time");
const dateCheck = document.getElementById("date");
const dateBlock = document.querySelector(".date");
const greetingCheck = document.getElementById("greeting");
const greetingBlock = document.querySelector(".greeting-container");
const quoteCheck = document.getElementById("quote");
const quoteBlock = document.querySelector(".quote-container");
const todoCheck = document.getElementById("todoTool");
const todoBlock = document.querySelector(".todo");
//console.log(todoBlock);

function showToolMenu() {
  toolMenu.classList.toggle("tool_menu");
}

//console.log(currentLanguage);

function translateTool() {
  //console.log(currentLanguage);
  getCurrentLanguage();
  //console.log(currentLanguage);
  if (currentLanguage === "ru") {
    languageName.textContent = toolTranslateObjectRu.lang.language;
    photoSourseName.textContent = toolTranslateObjectRu.photo.photosourse;
    photoThemeName.textContent = toolTranslateObjectRu.theme.photoTheme;
    showName.textContent = toolTranslateObjectRu.show.showlements;
    english.textContent = toolTranslateObjectRu.lang.eng;
    russian.textContent = toolTranslateObjectRu.lang.rus;
    for (let i = 0; i < elementName.length; i++) {
      elementName[i].lastElementChild.textContent =
        toolTranslateObjectRu.show.elements[i];
    }
  } else if (currentLanguage === "en") {
    languageName.textContent = toolTranslateObjectEn.lang.language;
    photoSourseName.textContent = toolTranslateObjectEn.photo.photosourse;
    photoThemeName.textContent = toolTranslateObjectEn.theme.photoTheme;
    showName.textContent = toolTranslateObjectEn.show.showlements;
    english.textContent = toolTranslateObjectEn.lang.eng;
    russian.textContent = toolTranslateObjectEn.lang.rus;
    for (let i = 0; i < elementName.length; i++) {
      elementName[i].lastElementChild.textContent =
        toolTranslateObjectEn.show.elements[i];
    }
  }
}

translateTool();
languageForm.addEventListener("change", translateTool);
toolButton.addEventListener("click", showToolMenu);
/*window.addEventListener("click", function() {
  if (toolMenu.classList.contains("tool_menu")) {
    toolMenu.classList.remove("tool_menu");
  }
});*/

function setCheckToLocalStorage() {
  localStorage.setItem("playercheck", playerCheck.checked);
  localStorage.setItem("weathercheck", weatherCheck.checked);
  localStorage.setItem("timecheck", timeCheck.checked);
  localStorage.setItem("datecheck", dateCheck.checked);
  localStorage.setItem("greetingcheck", greetingCheck.checked);
  localStorage.setItem("quotecheck", quoteCheck.checked);
  localStorage.setItem("todocheck", todoCheck.checked);
}

function getCheckToLocalStorage() {
  if (localStorage.getItem("playercheck")) {
    //console.log(localStorage.getItem("playercheck"));
    playerCheck.checked = JSON.parse(localStorage.getItem("playercheck"));
    //console.log(playerCheck.checked);
  }
  if (localStorage.getItem("weathercheck")) {
    weatherCheck.checked = JSON.parse(localStorage.getItem("weathercheck"));
  }
  if (localStorage.getItem("timecheck")) {
    timeCheck.checked = JSON.parse(localStorage.getItem("timecheck"));
  }
  if (localStorage.getItem("datecheck")) {
    dateCheck.checked = JSON.parse(localStorage.getItem("datecheck"));
  }
  if (localStorage.getItem("greetingcheck")) {
    greetingCheck.checked = JSON.parse(localStorage.getItem("greetingcheck"));
  }
  if (localStorage.getItem("quotecheck")) {
    quoteCheck.checked = JSON.parse(localStorage.getItem("quotecheck"));
  }
  if (localStorage.getItem("todocheck")) {
    todoCheck.checked = JSON.parse(localStorage.getItem("todocheck"));
  }
}

//window.addEventListener("load", getCheckToLocalStorage);

playerCheck.addEventListener("change", setCheckToLocalStorage);
weatherCheck.addEventListener("change", setCheckToLocalStorage);
timeCheck.addEventListener("change", setCheckToLocalStorage);
dateCheck.addEventListener("change", setCheckToLocalStorage);
greetingCheck.addEventListener("change", setCheckToLocalStorage);
quoteCheck.addEventListener("change", setCheckToLocalStorage);
todoCheck.addEventListener("change", setCheckToLocalStorage);

function showOrHide() {
  getCheckToLocalStorage();
  if (!playerCheck.checked) {
    playerBlock.style.opacity = "0";
  } else if (playerCheck.checked) {
    playerBlock.style.opacity = "1";
  }
  if (!weatherCheck.checked) {
    weatherBlock.style.opacity = "0";
  } else if (weatherCheck.checked) {
    weatherBlock.style.opacity = "1";
  }
  if (!timeCheck.checked) {
    timeBlock.style.opacity = "0";
  } else if (timeCheck.checked) {
    timeBlock.style.opacity = "1";
  }
  if (!date.checked) {
    dateBlock.style.opacity = "0";
  } else if (dateCheck.checked) {
    dateBlock.style.opacity = "1";
  }
  if (!greetingCheck.checked) {
    greetingBlock.style.opacity = "0";
  } else if (greetingCheck.checked) {
    greetingBlock.style.opacity = "1";
  }
  if (!quoteCheck.checked) {
    quoteBlock.style.opacity = "0";
  } else if (quoteCheck.checked) {
    quoteBlock.style.opacity = "1";
  }
  if (!todoCheck.checked) {
    todoBlock.style.opacity = "0";
  } else if (todoCheck.checked) {
    todoBlock.style.opacity = "1";
  }
}

showOrHide();
playerCheck.addEventListener("change", showOrHide);
weatherCheck.addEventListener("change", showOrHide);
timeCheck.addEventListener("change", showOrHide);
dateCheck.addEventListener("change", showOrHide);
greetingCheck.addEventListener("change", showOrHide);
quoteCheck.addEventListener("change", showOrHide);
todoCheck.addEventListener("change", showOrHide);
//console.log(todoCheck);
