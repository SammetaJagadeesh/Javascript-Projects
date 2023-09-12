// let time = document.getElementById("time");
// let input = document.getElementById("input");
// let startbutton = document.getElementById("start");
// let pausebutton = document.getElementById("pause");
// let resetbutton = document.getElementById("reset")

// let currentInterval;
// let isPaused = false;

// startbutton.addEventListener("click", function () {
//  if(input.value==""||input.value==0)
//  {
//   window.alert("Please Enter the value of minutes")
//  }


//   let start = input.value * 60;

//   if (start > 0 && start <= 60) {
//     currentInterval = setInterval(function () {
//       time.innerText = "00:00:" + formatvalue(start);
//       start--;
//       if (start < 0) {
//         clearInterval(currentInterval);
//         time.innerText = "Time up";
//       }
//     }, 1000);
//   } else if (start > 60 && start <= 3600) {
//     currentInterval = setInterval(function () {
//       const minutes = Math.floor(start / 60);
//       const seconds = start % 60;
//       time.innerText = "00:" + formatvalue(minutes) + ":" + formatvalue(seconds);
//       start--;
//       if (start < 0) {
//         clearInterval(currentInterval);
//         time.innerText = "Time up";
//       }
//     }, 1000);
//   } else if (start > 3600) {
//     currentInterval = setInterval(function () {
//       const hours = Math.floor(start / 3600);
//       const minutes = Math.floor((start % 3600) / 60);
//       const seconds = start % 60;
//       time.innerText = formatvalue(hours) + ":" + formatvalue(minutes) + ":" + formatvalue(seconds);
//       start--;
//       if (start < 0) {
//         clearInterval(currentInterval);
//         time.innerText = "Time up";
//       }
//     }, 1000);
//   }
// });

// pausebutton.addEventListener("click", function () {
//   clearInterval(currentInterval);
//   isPaused = true;
//   pausebutton.innerText = "continue";
// });

// resetbutton.addEventListener("click",function()
// {
//   clearInterval(currentInterval);
//   time.innerText="00:00:00";
//   input.value="";

// })







let time = document.getElementById("time");
let input = document.getElementById("input");
let startbutton = document.getElementById("start");
let pausebutton = document.getElementById("pause");
let resetbutton = document.getElementById("reset");

let currentInterval;
let isPaused = false;
let remainingTime = 0;

startbutton.addEventListener("click", function () {
  if (input.value == "" || input.value == 0) {
    window.alert("Please Enter the value of minutes");   
  }

  let start = input.value * 60;

  if (!isPaused) {
    remainingTime = start;
  }

  if (start > 0 && start <= 60) {
    currentInterval = setInterval(updateTime, 1000);
  } else if (start > 60 && start <= 3600) {
    currentInterval = setInterval(updateTime, 1000);
  } else if (start > 3600) {
    currentInterval = setInterval(updateTime, 1000);
  }
});

pausebutton.addEventListener("click", function () {
  if (!isPaused) {
    clearInterval(currentInterval);
    isPaused = true;
    pausebutton.innerText = "Continue";
  } else {
    isPaused = false;
    pausebutton.innerText = "Pause";
    currentInterval = setInterval(updateTime, 1000);
  }
});

resetbutton.addEventListener("click", function () {
  clearInterval(currentInterval);
  isPaused = false;
  pausebutton.innerText = "Pause";
  time.innerText = "00:00:00";
  input.value = "";
  remainingTime = 0;
});

function updateTime() {
  if (!isPaused) {
    if (remainingTime > 0) {
      const hours = Math.floor(remainingTime / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      const seconds = remainingTime % 60;
      time.innerText = formatvalue(hours) + ":" + formatvalue(minutes) + ":" + formatvalue(seconds);
      remainingTime--;
    } else {
      clearInterval(currentInterval);
      time.innerText = "Time's up!";
    }
  }
}

function formatvalue(value) {
  if (value < 10) {
    return "0" + value;
  } else {
    return value;
  }
}

