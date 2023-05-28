const enLanguage = document.getElementById("en");
const ruLanguage = document.getElementById("ru");
export const languageForm = document.querySelector(".language_form");

//console.log(languageForm);
//console.log(languageForm.value);
let currentLanguage = "en";
//console.log(currentLanguage);

function languageChange() {
  if (enLanguage.checked) {
    currentLanguage = enLanguage.value;
    //console.log(currentLanguage);
  } else {
    currentLanguage = ruLanguage.value;
    //console.log(currentLanguage);
  }
  return currentLanguage;
}
languageChange();

function setLocalStorage() {
  localStorage.setItem("language", currentLanguage);
}

function getLocalStorage() {
  if (localStorage.getItem("language")) {
    currentLanguage = localStorage.getItem("language");
    if (currentLanguage === "ru") {
      ruLanguage.checked = "true";
    } else {
      enLanguage.checked = "true";
    }
  } 
  return currentLanguage;
}

languageForm.addEventListener("change", languageChange);
languageForm.addEventListener("change", setLocalStorage);
window.addEventListener("load", getLocalStorage);

export function getCurrentLanguage() {
  if (localStorage.getItem("language")) {
    currentLanguage = localStorage.getItem("language");
  } else {
    currentLanguage === "en";
  }
  
  setTimeout(getCurrentLanguage, 1000);
  //console.log(currentLanguage);
  return currentLanguage;
}

export let daysOfWeekArrayEn = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export let daysOfWeekArrayRu = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

export let monthesArrayEn = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export let monthesArrayRu = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export let periodOfDaysEn = ["morning", "afternoon", "evening", "night"];

export let periodOfDaysRu = ["утро", "день", "вечер", "ночи"];

export let endsOfGood = ["oe", "ый", "ый", "ой"];

export let toolTranslateObjectEn = {
  lang: {
    language: "Language:",
    eng: "English",
    rus: "Russian",
  },
  photo: {
    photosourse: "Photo source:",
  },
  theme: {
    photoTheme: "Photo theme:",
  },
  show: {
    showlements: "Show elements:",
    elements: [
      "Player",
      "To do",
      "Weather",
      "Time",
      "Date",
      "Greeting",
      "Quotes",
    ],
  },
};

export let toolTranslateObjectRu = {
    lang: {
      language: "Язык:",
      eng: "Английский",
      rus: "Русский",
    },
    photo: {
      photosourse: "Источник изображений:",
    },
    theme: {
      photoTheme: "Тема изображений:",
    },
    show: {
      showlements: "Показать элементы:",
      elements: [
        "Плеер",
        "Список дел",
        "Погода",
        "Время",
        "Дата",
        "Приветствие",
        "Цитаты",
      ],
    },
  };

export {currentLanguage};