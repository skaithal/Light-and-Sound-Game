// Global Constants
const clueHoldTime = 1000; // 1 second
const cluePauseTime = 333; // how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before starting playback of the clue sequence

// Global Variables
var pattern = [1, 3, 6, 2, 4, 5];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be between 0.0 and 1.0
var guessCounter = 0;

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 117,
  2: 587, // 587
  3: 349, // 349
  4: 784, // 784
  5: 699, // 699
  6: 466 // 466
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

//Button Lighting
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

//Clue Functions
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

// User Response Functions
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}
function winGame() {
  stopGame();
  alert("You won! Excellent Job!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  // Is guess correct? - YES
  if (pattern[guessCounter] == btn) {
    // Is turn over? - YES
    if (guessCounter == progress) {
      // Is this the last turn? - YES
      if (progress == pattern.length - 1) {
        // Win Game!
        winGame();
      } else {
        //Is this the last turn? - NO; Increment progress, play next clue sequence
        progress++;
        playClueSequence();
      }
    } else {
      // Is turn over? - NO; Increment guessCounter
      guessCounter++;
    }
  } else {
    // Is guess correct? - NO
    // Lose Game.
    loseGame();
  }
}
