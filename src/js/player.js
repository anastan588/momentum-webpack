import AquaCaelestis from "../assets/sounds/Aqua Caelestis.mp3";
import EnnioMorricone from "../assets/sounds/Ennio Morricone.mp3";
import RiverFlowsInYou from "../assets/sounds/River Flows In You.mp3";
import SummerWind from "../assets/sounds/Summer Wind.mp3";
import pause from "../assets/svg/pause.svg";
import playImage from "../assets/svg/play.svg";
import mute from "../assets/svg/mute.png";
import loud from "../assets/svg/volume.png";


const buttonPlayPrev = document.querySelector(".play-prev");
const buttonPlayNext = document.querySelector(".play-next");
const buttonPlay = document.querySelector(".play");
const playImageItem = document.querySelectorAll(".play_item_img");
const nameOfItem = document.querySelectorAll(".item_name");
const currentTrackName = document.querySelector(".track_name");
const durationStart = document.querySelector(".duration_start");
const durationAll = document.querySelector(".duration_all");
const playItem = document.querySelectorAll(".play-item");
const trackPlayLine = document.querySelector(".track_play");
const trackCurrentPositionPlayLine = document.querySelector(
  ".track_current_position_play"
);
const volumeRange = document.querySelector(".volume_strenght");
const volumeImage = document.querySelector(".volume_img");

var audio = new Audio();
//audio.preload = "metadata";
var event;
var nameOfItemArrayInnerText = [];
var partOfSongLengh;

const playList = [
  {
    title: "Aqua Caelestis",
    src: AquaCaelestis,
    duration: "00:39",
  },
  {
    title: "Ennio Morricone",
    src: EnnioMorricone,
    duration: "05:03",
  },
  {
    title: "River Flows In You",
    src: RiverFlowsInYou,
    duration: "03:50",
  },
  {
    title: "Summer Wind",
    src: SummerWind,
    duration: "05:05",
  },
];

var currentDuration;

function durationDecodeToNumber(currentDuration) {
  //console.log(currentDuration);
  let durationArray = currentDuration.split(":");
  let durationMinutes = parseInt(durationArray[0]);
  let durationSeconds = parseInt(durationArray[1]);
  let durationAudio = durationMinutes * 60 + durationSeconds;
  currentDuration = durationAudio;
  //console.log(currentDuration);
  return currentDuration;
}

function durationDecodeToString(currentDuration) {
  let durationMinutes = Math.trunc(currentDuration / 60);
  //console.log(durationMinutes);
  let durationSeconds = Math.round(currentDuration - durationMinutes * 60);
  //console.log(durationSeconds);
  if (durationMinutes < 10 && durationSeconds < 10) {
    currentDuration = `0${durationMinutes}:0${durationSeconds}`;
  } else if (durationMinutes < 10) {
    currentDuration = `0${durationMinutes}:${durationSeconds}`;
  } else {
    currentDuration = `${durationMinutes}:${durationSeconds}`;
  }
  return currentDuration;
}

function currentTrack() {
  //console.log(audio);
  audio.src = playList[0].src;
  //console.log(audio.src);

  audio.ondurationchange = function (event) {
    //console.log(event);
    //console.log(audio.duration);
    currentDuration = audio.duration;
    //console.log(currentDuration);
    currentTrackName.innerHTML = playList[0].title;
    durationStart.innerHTML = "00:00";
    durationAll.innerHTML = durationDecodeToString(currentDuration);
    return currentDuration;
  };
}

currentTrack();
//console.log(trackCurrentPositionPlayLine.offsetWidth);
//console.log(trackPlayLine.offsetWidth);

function play() {
  //console.log(trackCurrentPositionPlayLine.offsetWidth);
  //console.log(trackPlayLine.offsetWidth);
  partOfSongLengh =
    trackPlayLine.offsetWidth / durationDecodeToNumber(durationAll.innerHTML);
  //console.log(partOfSongLengh);
  buttonPlay.classList.toggle("pause");
  for (let i = 0; i < nameOfItem.length; i++) {
    var timerIdDuration;
    var timerIdTimeLine;
    if (
      nameOfItem[i].innerHTML === currentTrackName.innerHTML &&
      buttonPlay.classList.contains("pause")
    ) {
      //console.log(audio);
      //console.log(nameOfItem[i].innerHTML === currentTrackName.innerHTML &&
      // buttonPlay.classList.contains("pause"));
      audio.play();
      playImageItem[i].src = pause;
      nameOfItem[i].style.color = "#34f6ff";
      nameOfItem[i].style.fontStyle = "italic";
      function setTimeCurrentDuration() {
        if (
          durationDecodeToNumber(durationStart.innerHTML) <
          durationDecodeToNumber(durationAll.innerHTML)
        ) {
          let durationNow = durationDecodeToNumber(durationStart.innerHTML);
          durationNow++;
          //console.log(durationNow);
          durationStart.innerHTML = durationDecodeToString(durationNow);
          if (
            durationDecodeToNumber(durationStart.innerHTML) ===
            durationDecodeToNumber(durationAll.innerHTML)
          ) {
            playNextTrack();
            partOfSongLengh =
              trackPlayLine.offsetWidth /
              durationDecodeToNumber(durationAll.innerHTML);
            timerIdTimeLine = setTimeout(setTimeLineAndCurrentDuration, 1000);
            //durationStart.innerHTML= "00:00";
            //console.log(durationStart);
            //setTimeLineAndCurrentDuration();
          }
          if (buttonPlay.classList.contains("pause")) {
            timerIdDuration = setTimeout(setTimeCurrentDuration, 1000);
            //console.log(timerIdDuration);
            return durationStart.innerHTML;
          } else {
            return durationStart.innerHTML;
          }
        }
      }
      function setTimeLineAndCurrentDuration() {
        if (
          trackCurrentPositionPlayLine.offsetWidth < trackPlayLine.offsetWidth
        ) {
          trackCurrentPositionPlayLine.style.width = `${
            trackCurrentPositionPlayLine.offsetWidth + partOfSongLengh
          }px`;
          //console.log(durationDecodeToNumber(durationStart.innerHTML));
          //console.log(partOfSongLengh);
          if (durationDecodeToNumber(durationStart.innerHTML) === 0) {
            trackCurrentPositionPlayLine.style.width = "0px";
            //console.log(trackCurrentPositionPlayLine.style.width);
          }
          //console.log(trackCurrentPositionPlayLine.offsetWidth);
          if (buttonPlay.classList.contains("pause")) {
            timerIdTimeLine = setTimeout(setTimeLineAndCurrentDuration, 1000);
            return trackCurrentPositionPlayLine.style.width;
          } else {
            return trackCurrentPositionPlayLine.style.width;
          }
        }
      }
      setTimeLineAndCurrentDuration();
      setTimeCurrentDuration();
    } else if (nameOfItem[i].innerHTML === currentTrackName.innerHTML) {
      console.log(
        nameOfItem[i].innerHTML === currentTrackName.innerHTML &&
          buttonPlay.classList.contains("pause")
      );
      audio.pause();
      playImageItem[i].src = playImage;
      nameOfItem[i].style.color = "#FFFFFF";
      nameOfItem[i].style.fontStyle = "normal";
    }
  }
}

buttonPlay.addEventListener("click", play);
playImageItem.forEach((element) => element.addEventListener("click", play));

function currentTrackByList(event) {
  //console.log(event);
  var track = event.target;
  //console.log(track.innerHTML);
  currentTrackName.innerHTML = track.innerHTML;
  for (let i = 0; i < nameOfItem.length; i++) {
    if (track.innerHTML === playList[i].title) {
      audio.src = playList[i].src;
      audio.ondurationchange = function (event) {
        //console.log(event);
        //console.log(audio.duration);
        currentDuration = audio.duration;
        //console.log(currentDuration);
        durationStart.innerHTML = "00:00";
        durationAll.innerHTML = durationDecodeToString(currentDuration);
        trackCurrentPositionPlayLine.style.width = "0px";
        return currentDuration;
      };
      if (buttonPlay.classList.contains("pause")) {
        audio.play();
      }
    }
    if (
      buttonPlay.classList.contains("pause") &&
      nameOfItem[i].innerHTML === track.innerHTML
    ) {
      playImageItem[i].src = pause;
      nameOfItem[i].style.color = "#34f6ff";
      nameOfItem[i].style.fontStyle = "italic";
    } else {
      playImageItem[i].src = playImage;
      nameOfItem[i].style.color = "#FFFFFF";
      nameOfItem[i].style.fontStyle = "normal";
    }
  }
}

nameOfItem.forEach((element) =>
  element.addEventListener("click", currentTrackByList)
);

function playFromNewPosition(event) {
  let cursorLeftPositon = event.clientX;
  //console.log(cursorLeftPositon);
  let trackPlayLinecoords = trackPlayLine.getBoundingClientRect();
  let trackPlayLinePosition = trackPlayLinecoords.left;
  //console.log(trackPlayLinePosition);
  let cursorLeftPositonForPlay = cursorLeftPositon - trackPlayLinePosition;
  //console.log(cursorLeftPositonForPlay);
  let partOfSongLengh = (
    trackPlayLine.offsetWidth / durationDecodeToNumber(durationAll.innerHTML)
  ).toFixed(3);
  let halfOfPartOfSongLengh = Math.round(
    (cursorLeftPositonForPlay / partOfSongLengh).toFixed(1)
  );
  //console.log(halfOfPartOfSongLengh);
  //console.log(cursorLeftPositonForPlay%partOfSongLengh);
  trackCurrentPositionPlayLine.style.width = `${(
    halfOfPartOfSongLengh * partOfSongLengh
  ).toFixed(1)}px`;
  //console.log(trackCurrentPositionPlayLine.offsetWidth);
  let durationCurrentPositionPlay = (
    parseInt(trackCurrentPositionPlayLine.style.width) / partOfSongLengh
  ).toFixed();
  // console.log(partOfSongLengh);
  //console.log(durationCurrentPositionPlay);
  durationStart.innerHTML = durationDecodeToString(durationCurrentPositionPlay);
  audio.currentTime = durationCurrentPositionPlay;
  //console.log(audio.currentTime);
  if (buttonPlay.classList.contains("pause")) {
    audio.play();
    console.log(audio.volume);
  }
}

trackPlayLine.addEventListener("click", playFromNewPosition);

function arrayOfTracksNames() {
  let nameOfItemArray = Array.from(nameOfItem);
  //console.log(nameOfItemArray);
  for (let i = 0; i < nameOfItemArray.length; i++) {
    nameOfItemArrayInnerText.push(nameOfItemArray[i].innerHTML);
  }
  //console.log(nameOfItemArrayInnerText);
  return nameOfItemArrayInnerText;
}

function playNextTrack(event) {
  //console.log(event);
  arrayOfTracksNames();
  //console.log(nameOfItemArrayInnerText);
  var i = nameOfItemArrayInnerText.indexOf(currentTrackName.textContent);
  //console.log(currentTrackName.innerHTML);
  //console.log(nameOfItem[0].innerHTML);
  if (i >= nameOfItem.length - 1) {
    i = -1;
  }
  //console.log(i);
  currentTrackName.innerHTML = nameOfItem[i + 1].innerHTML;
  //console.log(currentTrackName.innerHTML);
  audio.src = playList[i + 1].src;
  //console.log(audio.src);
  //console.log(audio);
  audio.ondurationchange = function (event) {
    currentDuration = audio.duration;
    //console.log(currentDuration);
    durationStart.innerHTML = "00:00";
    durationAll.innerHTML = durationDecodeToString(currentDuration);
    trackCurrentPositionPlayLine.style.width = "0px";

    if (buttonPlay.classList.contains("pause")) {
      //buttonPlay.classList.remove("pause");
      audio.play();
      //console.log(durationAll.innerHTML);
      //console.log(currentDuration);
      partOfSongLengh =
        trackPlayLine.offsetWidth /
        durationDecodeToNumber(durationAll.innerHTML);
      //console.log(partOfSongLengh);
      playImageItem[i + 1].src = pause;
      nameOfItem[i + 1].style.color = "#34f6ff";
      nameOfItem[i + 1].style.fontStyle = "italic";
      if (i < nameOfItem.length - 1 && i >= 0) {
        playImageItem[i].src = playImage;
        nameOfItem[i].style.color = "#FFFFFF";
        nameOfItem[i].style.fontStyle = "normal";
      } else {
        playImageItem[nameOfItem.length - 1].src = playImage;
        nameOfItem[nameOfItem.length - 1].style.color = "#FFFFFF";
        nameOfItem[nameOfItem.length - 1].style.fontStyle = "normal";
      }
    }
  };
  nameOfItemArrayInnerText = [];
  return nameOfItemArrayInnerText;
}

function playPrevTrack(event) {
  //console.log(event);
  arrayOfTracksNames();
  //console.log(nameOfItemArrayInnerText);
  var i = nameOfItemArrayInnerText.indexOf(currentTrackName.textContent);
  //console.log(currentTrackName.innerHTML);
  //console.log(nameOfItem[0].innerHTML);
  if (i <= 0) {
    i = nameOfItem.length;
  }
  //console.log(i);
  currentTrackName.innerHTML = nameOfItem[i - 1].innerHTML;
  //console.log(currentTrackName.innerHTML);
  audio.src = playList[i - 1].src;
  audio.ondurationchange = function (event) {
    currentDuration = audio.duration;
    //console.log(currentDuration);
    durationStart.innerHTML = "00:00";
    durationAll.innerHTML = durationDecodeToString(currentDuration);
    trackCurrentPositionPlayLine.style.width = "0px";
    if (buttonPlay.classList.contains("pause")) {
      //buttonPlay.classList.remove("pause");
      audio.play();
      console.log(durationAll.innerHTML);
      console.log(currentDuration);
      partOfSongLengh =
        trackPlayLine.offsetWidth /
        durationDecodeToNumber(durationAll.innerHTML);
      playImageItem[i - 1].src = pause;
      nameOfItem[i - 1].style.color = "#34f6ff";
      nameOfItem[i - 1].style.fontStyle = "italic";
      if (i <= nameOfItem.length - 1 && i > 0) {
        playImageItem[i].src = playImage;
        nameOfItem[i].style.color = "#FFFFFF";
        nameOfItem[i].style.fontStyle = "normal";
      } else {
        playImageItem[0].src = playImage;
        nameOfItem[0].style.color = "#FFFFFF";
        nameOfItem[0].style.fontStyle = "normal";
      }
    }
  };
  nameOfItemArrayInnerText = [];
  return nameOfItemArrayInnerText;
}

buttonPlayNext.addEventListener("click", playNextTrack);
buttonPlayPrev.addEventListener("click", playPrevTrack);

function volumeChange() {
  // console.log(this);
  //console.log(audio.volume);
  audio.volume = volumeRange.value;
  if (volumeRange.value === "0") {
    volumeImage.src = mute;
  } else {
    volumeImage.src = loud;
  }
  return volumeRange.value;
}

//console.log(volumeRange.value);
//console.log(typeof volumeRange);
var objectforVolume = {};
var volumeMemory;

function volumeImageChange() {
  if (volumeRange.value !== "0") {
    Object.assign(objectforVolume, volumeRange.value);
    console.log(objectforVolume);
    let volumeMemoryArray = Object.values(objectforVolume);
    volumeMemory = volumeMemoryArray.join("");
    console.log(volumeMemoryArray);
    console.log(volumeMemory);
  }
  console.log(volumeMemory);
  if (buttonPlay.classList.contains("pause")) {
    volumeImage.classList.toggle("mute");
    //let volumeMemory2 = volumeMemory;
    if (volumeImage.classList.contains("mute")) {
      volumeImage.src = mute;
      volumeRange.value = "0";
      audio.volume = volumeRange.value;
      console.log(volumeImage.src);
      console.log(audio.volume);
    } else {
      volumeImage.src = loud;
      console.log(volumeMemory);
      volumeRange.value = volumeMemory;
      console.log(volumeRange.value);
      audio.volume = volumeRange.value;
      console.log(volumeImage.src);
      console.log(audio.volume);
    }
  }
  return volumeMemory;
}

volumeRange.addEventListener("input", volumeChange);
volumeImage.addEventListener("click", volumeImageChange);
