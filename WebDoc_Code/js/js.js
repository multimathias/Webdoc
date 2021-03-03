/**
 * file: js.js
 * purpose: Whatever goes here ...
 **/
console.log('JavaScript from js/js.js: up and running!');

//----------------------------------------------------
let myBth = document.getElementById('playButton')
myBth.addEventListener("click", function playVideo() {
    if (myVideo.paused) {
        myVideo.play();
        myVideo.controls = false;
    } else {
        myVideo.pause();
        myVideo.controls = true;
    }
})

shutup.addEventListener('click',
    function () {
        myVideo.muted = true;
    });

//-----------------------------------


let d = new Date();
console.log("It is " + d.getHours())


let myStatus = [
    "We apologise we don't deliver anymore today...",
     "We apologise we don't deliver anymore today...",
     "We apologise we don't deliver anymore today...",
     "We apologise we don't deliver anymore today...",
     "We apologise we don't deliver anymore today...",
     "We apologise we don't deliver anymore today...",
     "We apologise we don't deliver anymore today...",
     "We apologise we don't deliver anymore today...",
     "We apologise we don't deliver anymore today...",
     "We are ready to deliver to you!",
     "We are ready to deliver to you!",
     "We are ready to deliver to you!",
     "We are ready to deliver to you!",
     "We are ready to deliver to you!",
     "We are ready to deliver to you!",
     "We are ready to deliver to you!",
     "We are ready to deliver to you!",
     "We are ready to deliver to you!",
     "You can still order till 21.30!",
     "You can still order till 21.30!",
     "You can still order till 21.30!",
     "We apologise we don't deliver anymore today...",
     "We apologise we don't deliver anymore today...",
    "We apologise we don't deliver anymore today..."
]
console.log(myStatus)



console.log(  myStatus [d.getHours()] )

document.getElementById ("status").innerHTML = myStatus [d.getHours()]

//-----------------------------------

document.getElementById("warning").addEventListener("mouseover", function() {
  alert("We asume you are at least 16 years old, right?");
});

