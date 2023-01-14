var stopButton = document.querySelector("#stopButton");
var slowButton = document.querySelector("#slowButton");
var goButton = document.querySelector("#goButton");
var stopLight = document.querySelector("#stopLight");
var slowLight = document.querySelector("#slowLight");
var goLight = document.querySelector("#goLight");

stopButton.addEventListener("click", function () {
  stopLight.classList.toggle("stop");
});
slowButton.addEventListener("click", function () {
  slowLight.classList.toggle("slow");
});
goButton.addEventListener("click", function () {
  goLight.classList.toggle("go");
});
stopButton.addEventListener("mouseenter", function () {
  console.log("Entered the stop button.");
});
stopButton.addEventListener("mouseleave", function () {
  console.log("Left the stop button.");
});
slowButton.addEventListener("mouseenter", function () {
  console.log("Entered the slow button.");
});
slowButton.addEventListener("mouseleave", function () {
  console.log("Left the slow button.");
});
goButton.addEventListener("mouseenter", function () {
  console.log("Entered the go button.");
});
goButton.addEventListener("mouseleave", function () {
  console.log("Left the go button.");
});
window.addEventListener("click", function (event) {
  if (event.target.id == "stopButton") {
    if (stopLight.classList.contains("stop")) {
      console.log("Stop light bulb on.");
    } else {
      console.log("Stop light bulb off.");
    }
  }
  if (event.target.id == "slowButton") {
    if (slowLight.classList.contains("slow")) {
      console.log("Slow light bulb on.");
    } else {
      console.log("Slow light bulb off.");
    }
  }
  if (event.target.id == "goButton") {
    if (goLight.classList.contains("go")) {
      console.log("Go light bulb on.");
    } else {
      console.log("Go light bulb off.");
    }
  }
});

//  stopButton.addEventListener("click", function() {
//    if(stopLight.classList.contains("stop")) {
//      stopLight.classList.remove("stop");
//     } else {
//       stopLight.classList.add("stop");
//     }
// })
//  slowButton.addEventListener("click", function(){
//   if(slowLight.classList.contains("slow")) {
//     slowLight.classList.remove("slow");
//   } else {
//     slowLight.classList.add("slow");
//   }
//  })
// goButton.addEventListener("click", function () {
//   if (goLight.classList.contains("go")) {
//     goLight.classList.remove("go");
//   } else {
//     goLight.classList.add("go");
//   }
// });
