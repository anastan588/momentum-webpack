import {
  daysOfWeekArrayEn,
  daysOfWeekArrayRu,
  monthesArrayEn,
  monthesArrayRu,
  getCurrentLanguage,
  currentLanguage,
  periodOfDaysEn,
  periodOfDaysRu,
  endsOfGood,
} from "./translate.js";

//console.log(currentLanguage);

getCurrentLanguage();

//console.log(currentLanguage);

const time = document.querySelector(".time");
const date = document.querySelector(".date");
export const greeting = document.querySelector(".greeting");
const inputName = document.querySelector(".name");
let newTimeUpdate = 0;

function showTime() {
  let newTime = new Date();
  if(currentLanguage === "en") {
     newTimeUpdate = newTime.toLocaleTimeString("en-GB");
  } else if(currentLanguage === "ru") {
    newTimeUpdate = newTime.toLocaleTimeString("ru");
  }
 
  time.innerHTML = newTimeUpdate;
  function showDate() {
    let dayOfWeek = newTime.getDay();
    let dayOfMonth = newTime.getDate();
    let month = newTime.getMonth();
    for (let i = 0; i < daysOfWeekArrayEn.length; i++) {
      if (dayOfWeek === i) {
        if (currentLanguage === "en") {
          dayOfWeek = daysOfWeekArrayEn[i];
        } else if (currentLanguage === "ru") {
          dayOfWeek = daysOfWeekArrayRu[i];
        }
      }
    }
    for (let i = 0; i < monthesArrayEn.length; i++) {
      if (month === i) {
        if (currentLanguage === "en") {
          month = monthesArrayEn[i];
        } else if (currentLanguage === "ru") {
          month = monthesArrayRu[i];
        }
      }
    }
    date.innerHTML = `${dayOfWeek}, ${month} ${dayOfMonth}`;
  }
  function showGreeting() {
    let peridOfDay = newTime.getHours();
    if (currentLanguage === "en") {
      if (peridOfDay >= 0 && peridOfDay < 12) {
        greeting.innerHTML = `Good ${periodOfDaysEn[0]},`;
      } else if (peridOfDay >= 12 && peridOfDay < 17) {
        greeting.innerHTML = `Good ${periodOfDaysEn[1]},`;
      } else if (peridOfDay >= 17 && peridOfDay < 20) {
        greeting.innerHTML = `Good ${periodOfDaysEn[2]},`;
      } else {
        greeting.innerHTML = `Good ${periodOfDaysEn[3]},`;
      }
    } else if (currentLanguage === "ru") {
      if (peridOfDay >= 0 && peridOfDay < 12) {
        greeting.innerHTML = `Добр${endsOfGood[0]} ${periodOfDaysRu[0]},`;
      } else if (peridOfDay >= 12 && peridOfDay < 17) {
        greeting.innerHTML = `Добр${endsOfGood[1]} ${periodOfDaysRu[1]},`;
      } else if (peridOfDay >= 17 && peridOfDay < 20) {
        greeting.innerHTML = `Добр${endsOfGood[2]} ${periodOfDaysRu[2]},`;
      } else {
        greeting.innerHTML = `Добр${endsOfGood[3]} ${periodOfDaysRu[3]},`;
      }
    }
  }
  if (currentLanguage === "en") {
    inputName.setAttribute("placeholder", "[Enter name]");
  } else if(currentLanguage === "ru") {
    inputName.setAttribute("placeholder", "[Введите Ваше имя]");
  }
  
  showGreeting();
  showDate();
  setTimeout(showTime, 1000);
  return inputName.value;
}
showTime();

function setLocalStorage() {
  localStorage.setItem("name", inputName.value);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("name")) {
    inputName.value = localStorage.getItem("name");
  }
}
window.addEventListener("load", getLocalStorage);

export { currentLanguage };
