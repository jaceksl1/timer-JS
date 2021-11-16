const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const historyBtn = document.querySelector(".history");
const stopwatch = document.querySelector(".stopwatch");
const time = document.querySelector(".time");
const timeList = document.querySelector(".time-list");

const infoBtn = document.querySelector(".btnInfo");
const modalShadow = document.querySelector(".modal-shadow");
const closeModalBtn = document.querySelector(".close");

let countTime;
let minutes = 0;
let seconds = 0;
let timesArr = [];

const handleStart = () => {
  clearInterval(countTime); //prevent starting timer every time we click startBtn

  countTime = setInterval(() => {
    if (seconds < 9) {
      seconds++;
      stopwatch.textContent = `${minutes}:0${seconds}`;
    } else if (seconds >= 9 && seconds < 59) {
      seconds++;
      stopwatch.textContent = `${minutes}:${seconds}`;
    } else {
      minutes++;
      seconds = 0;
      stopwatch.textContent = `${minutes}:${seconds}`;
    }
  }, 100);
};

const handlePause = () => {
  clearInterval(countTime);
};

const handleStop = () => {
  time.innerHTML = `Last time: ${stopwatch.textContent}`;

  if (stopwatch.textContent !== "0:00") {
    time.style.visibility = "visible";
    timesArr.push(stopwatch.textContent); //adding every checked time to the array
  }
  clear();
};

const clear = () => {
  clearInterval(countTime);
  seconds = 0;
  minutes = 0;
  stopwatch.textContent = "0:00";
  timeList.textContent = "";
};

const handleReset = () => {
  time.style.visibility = "hidden";
  timesArr = [];
  clear();
};

const showHistory = () => {
  timeList.textContent = "";
  let id = 1;
  timesArr.forEach((time) => {
    const newTime = document.createElement("li");
    newTime.innerHTML = `Time ${id}: <span>${time}</span>`;
    timeList.appendChild(newTime);
    id++;
  });
};

const showModal = () => {
  if (!(modalShadow.style.display === "block")) {
    modalShadow.style.display = "block";
  } else {
    modalShadow.style.display = "none";
  }

  modalShadow.classList.add("modal-animation");
};

stopBtn.addEventListener("click", handleStop);
startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener("click", handlePause);
resetBtn.addEventListener("click", handleReset);
historyBtn.addEventListener("click", showHistory);
infoBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", showModal);
//to avoid adding another function, we used showModal() to avoid cloning code - modalShadow.style.display = "none";

window.addEventListener("click", (e) =>
  e.target === modalShadow ? showModal() : false
);
//function which will close modal after we click outside the modalShadow

// Part when you can change colors

const colorBtn = document.querySelector(".btnColor");
const colorPanel = document.querySelector(".colors");
const colorOne = document.querySelector(".one");
const colorTwo = document.querySelector(".two");
const colorThree = document.querySelector(".three");
let root = document.documentElement;

colorBtn.addEventListener("click", () => {
  colorPanel.classList.toggle("show-colors");
});

colorOne.addEventListener("click", () => {
  root.style.setProperty("--first-color", "rgb(250, 20, 6)");
  root.style.setProperty("--hover-color", "rgb(209, 33, 24)");
});

colorTwo.addEventListener("click", () => {
  root.style.setProperty("--first-color", "rgb(6, 173, 250)");
  root.style.setProperty("--hover-color", "rgb(28, 145, 199)");
});

colorThree.addEventListener("click", () => {
  root.style.setProperty("--first-color", "rgb(0, 255, 43)");
  root.style.setProperty("--hover-color", "rgb(28, 209, 58)");
});

//change background image

const btnBackground = document.querySelector(".btnBackground");
const backgroundPanel = document.querySelector(".backgrounds");
const backgroundOne = document.querySelector(".bc-one");
const backgroundTwo = document.querySelector(".bc-two");
const backgroundThree = document.querySelector(".bc-three");
const backgroundOriginal = document.querySelector(".bc-original");

btnBackground.addEventListener("click", () => {
  backgroundPanel.classList.toggle("show-backgrounds");
});

backgroundOne.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(./images/background2.jpg)";
});

backgroundTwo.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(./images/background3.jpeg)";
});

backgroundThree.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(./images/background4.jpeg)";
});

backgroundOriginal.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(./images/background.jpg)";
});
