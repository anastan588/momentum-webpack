import { greeting } from "./timeAndGreeting.js";
import { periodOfDaysEn } from "./translate.js";
import { periodOfDaysRu } from "./translate.js";
import { currentLanguage } from "./timeAndGreeting.js";
//console.log(currentLanguage);
//console.log(periodOfDaysRu);

const leftArrow = document.querySelector(".slide-prev");
const rightArrow = document.querySelector(".slide-next");
const body = document.querySelector("body");
const githubCheck = document.getElementById("github");
const unsplashCheck = document.getElementById("unsplash");
const flickrCheck = document.getElementById("flickr");
const theme = document.getElementById("theme");
const unsplashApi = "lY2dFZqkz9qKmxXVKQERUz-RShvhZeUyRswDWpAPnF4";
const flickrApi = "7d49541786e1d23bb1393c9f71ce8c59";
let periodOfdays = "";

function getPeriodOfDay() {
  let greetingText = greeting.innerHTML;
  let greetingTextArray = greetingText.split(" ");
  let periodOfdayAllString = greetingTextArray[1];
  //console.log(periodOfdayAllString);
  let periodOfdayString = periodOfdayAllString.slice(0, length - 1);
  if (currentLanguage === "en") {
    periodOfdays = periodOfdayString;
  } else if (currentLanguage === "ru") {
    for (let i = 0; i < periodOfDaysRu.length; i++) {
      if (periodOfdayString === periodOfDaysRu[i]) {
        periodOfdays = periodOfDaysEn[i];
      }
    }
  }
  //console.log(periodOfdays)
  return periodOfdays;
}

getPeriodOfDay();

//console.log(periodOfdays);

let randomNumber = Math.round(Math.random() * 20);
if (randomNumber === 0) {
  randomNumber = 1;
}

function setCheckToLocalStorage() {
  localStorage.setItem("githubcheck", githubCheck.checked);
  localStorage.setItem("unsplashcheck", unsplashCheck.checked);
  localStorage.setItem("flickrcheck", flickrCheck.checked);
};
//console.log(theme.value);

function getCheckToLocalStorage() {
  if (localStorage.getItem("githubcheck")) {
    githubCheck.checked  = JSON.parse(localStorage.getItem("githubcheck"));
  }
  if (localStorage.getItem("unsplashcheck")) {
    //console.log(localStorage.getItem("unsplashcheck"));
    unsplashCheck.checked = JSON.parse(localStorage.getItem("unsplashcheck"));
    //console.log(unsplashCheck.checked);
  }
  if (localStorage.getItem("flickrcheck")) {
    flickrCheck.checked  = JSON.parse(localStorage.getItem("flickrcheck"));
  }
}

window.addEventListener("load", getCheckToLocalStorage);
githubCheck.addEventListener("change", setCheckToLocalStorage);
unsplashCheck.addEventListener("change",setCheckToLocalStorage);
flickrCheck.addEventListener("change", setCheckToLocalStorage);

async function setBg() {
  const img = new Image();
  let randomNumberString = 0;
  if (randomNumber >= 1 && randomNumber < 10) {
    randomNumberString = `0${randomNumber}`;
  } else {
    randomNumberString = randomNumber;
  }

  if (theme.value === "") {
    getPeriodOfDay();
    //console.log(periodOfdays);
    theme.value = periodOfdays;
    //console.log(theme.value);
  }
  getCheckToLocalStorage();
  //console.log(unsplashCheck.checked);
  //console.log(githubCheck.checked);
  if (githubCheck.checked) {
    img.src = `https://raw.githubusercontent.com/anastan588/momentum-images/main/images/${periodOfdays}/${randomNumberString}.webp`;
  } else if (unsplashCheck.checked) {
    let url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${theme.value}&client_id=${unsplashApi}`;
    let res = await fetch(url);
    let data = await res.json();
    img.src = data.urls.regular;
  } else if (flickrCheck.checked) {
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApi}&tags=${theme.value}&extras=url_l&format=json&nojsoncallback=1`;
    let res = await fetch(url);
    let data = await res.json();
    img.src = data.photos.photo[parseInt(randomNumber, 10)].url_l;
  }
  //console.log(img.src);
  img.onload = () => {
    body.style.backgroundImage = `url("${img.src}")`;
  };
}

async function getSlideNext() {
  const img = new Image();
  if (randomNumber < 20) {
    randomNumber++;
  } else {
    randomNumber = 1;
  }
  let randomNumberString = 0;
  if (randomNumber >= 1 && randomNumber < 10) {
    randomNumberString = `0${randomNumber}`;
  } else {
    randomNumberString = randomNumber;
  }
  if (theme.value === "") {
    getPeriodOfDay();
    console.log(periodOfdays);
    theme.value = periodOfdays;
    console.log(theme.value);
  }
  if (githubCheck.checked) {
    img.src = `https://raw.githubusercontent.com/anastan588/momentum-images/main/images/${periodOfdays}/${randomNumberString}.webp`;
  } else if (unsplashCheck.checked) {
    let url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${theme.value}&client_id=${unsplashApi}`;
    let res = await fetch(url);
    let data = await res.json();
    img.src = data.urls.regular;
  } else if (flickrCheck.checked) {
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApi}&tags=${theme.value}&extras=url_l&format=json&nojsoncallback=1`;
    let res = await fetch(url);
    let data = await res.json();
    img.src = data.photos.photo[parseInt(randomNumber, 10)].url_l;
  }
  img.onload = () => {
    body.style.backgroundImage = `url("${img.src}")`;
  };
  return randomNumber;
}

async function getSlidePrev() {
  const img = new Image();
  if (randomNumber > 1) {
    randomNumber--;
  } else {
    randomNumber = 20;
  }
  let randomNumberString = 0;
  if (randomNumber >= 1 && randomNumber < 10) {
    randomNumberString = `0${randomNumber}`;
  } else {
    randomNumberString = randomNumber;
  }
  if (theme.value === "") {
    getPeriodOfDay();
    console.log(periodOfdays);
    theme.value = periodOfdays;
    console.log(theme.value);
  }
  if (githubCheck.checked) {
    img.src = `https://raw.githubusercontent.com/anastan588/momentum-images/main/images/${periodOfdays}/${randomNumberString}.webp`;
  } else if (unsplashCheck.checked) {
    let url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${theme.value}&client_id=${unsplashApi}`;
    let res = await fetch(url);
    let data = await res.json();
    img.src = data.urls.regular;
  } else if (flickrCheck.checked) {
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApi}&tags=${theme.value}&extras=url_l&format=json&nojsoncallback=1`;
    let res = await fetch(url);
    let data = await res.json();
    img.src = data.photos.photo[parseInt(randomNumber, 10)].url_l;
  }
  img.onload = () => {
    body.style.backgroundImage = `url("${img.src}")`;
  };
  return randomNumber;
}

setBg();
leftArrow.addEventListener("click", getSlidePrev);
rightArrow.addEventListener("click", getSlideNext);
githubCheck.addEventListener("change", setBg);
unsplashCheck.addEventListener("change", setBg);
flickrCheck.addEventListener("change", setBg);
theme.addEventListener("change", setBg);
