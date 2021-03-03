/**
 * file: js.js
 * purpose: Whatever goes here ...
 **/
console.log('JavaScript from js/js.js: up and running!');

//----------------------------------------------------
let myBth = document.getElementById ('playButton')
myBth.addEventListener ("click", function playVideo(){
  if (myVideo.paused) {
    myVideo.play();
    myVideo.controls = false;
      }
  else {
    myVideo.pause();
    myVideo.controls = true;
    }
})

shutup.addEventListener('click',
  function(){
    myVideo.muted = true;
  });

//-----------------------------------




/**
let myStatus = [
    "We deliver"
    "We don't deliver anymore"
]
**/