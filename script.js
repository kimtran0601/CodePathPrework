const clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
var userGuess = [];
var userPattern;
var pattern = new Array();
var turn;
var progress = 1;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;

var audioContext = window.AudioContext || window.webkitAudioContext
var context = new AudioContext
var oscillator = context.createOscillator()
var gain = context.createGain();
gain.connect(context.destination);
gain.gain.setValueAtTime(0, context.currentTime);
oscillator.connect(gain);
oscillator.start(0);

var guessCounter = 0;


const frequencyMap = {
  1: 200,
  2: 300,
  3: 400,
  4: 500
}


function startGame(){
  turn = prompt("How many turns do you want to play?");
  gamePlaying = true;
  //swap start/stop button
  document.getElementById("StartBttn").classList.add("hidden");
  document.getElementById("EndBttn").classList.remove("hidden");
  var check;
  for (var i = 1; i <= turn; i++){
    playSequenceClue();
    progress++;
  }
}

function stopGame(){
  gamePlaying =false;
  document.getElementById("EndBttn").classList.add("hidden");
  document.getElementById("StartBttn").classList.remove("hidden");
}

function loseGame(){
  alert("Game Over");
  stopGame();
}

function winGame(){
  alert("You won!");
  stopGame();
}

function lightButton(button){
  document.getElementById("button" + button).classList.add("lit");
}

function clearButton(button){
  document.getElementById("button" + button).classList.remove("lit");
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function randomPattern(){
  for (let i = 0; i < progress; i++){
    pattern[i] = getRandomInt(1 ,5);
  }
  console.log(pattern);
}

function playTone(button, len){
  oscillator.frequency.value = frequencyMap[button];
  gain.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(button){
  if (!tonePlaying){
    context.resume();
    oscillator.frequency.value = frequencyMap[button];
    gain.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone(){
  gain.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025);
  tonePlaying = false;
}

function playSingleClue(button){
  if(gamePlaying){
    lightButton(button);
    playTone(button, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, button);
  }
}

function playSequenceClue(){
  context.resume();
  randomPattern();
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for (let i = 1; i <= pattern.length; i++){
      console.log("play single clue " + i + ": " + pattern[i]);
      playSingleClue(pattern[i]);
      delay = clueHoldTime + cluePauseTime;
  }
  pattern = [];
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    if(progress == turn){
        winGame();
    }
    else{
      guessCounter++;
    }
  }
  else{
    loseGame();
  }
}    
