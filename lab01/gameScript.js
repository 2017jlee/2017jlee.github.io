var notes = [
    { "name": "c", "file": "audio/c1.wav" },
    { "name": "cs", "file": "audio/c1s.wav" },
    { "name": "d", "file": "audio/d1.wav" },
    { "name": "ds", "file": "audio/d1s.wav" },
    { "name": "e", "file": "audio/e1.wav" },
    { "name": "f", "file": "audio/f1.wav" },
    { "name": "fs", "file": "audio/f1s.wav" },
    { "name": "g", "file": "audio/g1.wav" },
    { "name": "gs", "file": "audio/g1s.wav" },
    { "name": "a", "file": "audio/a1.wav" },
    { "name": "as", "file": "audio/a1s.wav" },
    { "name": "b", "file": "audio/b1.wav" }
]

var randomNote;
var file;
var correctAnswer;
var score = 0;
var myTimer;
var gameOn = false;
var paused = false;
var currentTime;
function setRandomNote() {
    randomNote = notes[Math.floor(Math.random() * notes.length)];
    correctAnswer = randomNote.name;
    file = randomNote.file;
    console.log("hi")
    setTimeout(function () { replay(); }, 600)
}


function playNote(noteNum) {
    var nf = notes[noteNum].file;
    var audioP = document.getElementById("audioPlayer");
    document.getElementById("wavSource").src = nf;
    audioP.load();
    audioP.play();
    checkAnswer(notes[noteNum].name);
}

function replay() {
    var audioP = document.getElementById("audioPlayer");
    document.getElementById("wavSource").src = file;
    audioP.load();
    audioP.play();
}
function startTimer(lengthTimer) {
    var display = document.getElementById("timerID")
    var timer = lengthTimer;
    var seconds;
    myTimer = setInterval(function () {
        if (paused == false) {
            seconds = parseInt(timer, 10);
            currentTime = seconds
            if (--timer < 0) {
                endGame();
            };

            display.textContent = seconds;
        }
    }, 1000);
}
function pause() {
    if (paused == true) {
        paused == false;
    }
    else {
        paused == true;
    }
}

function startGame() {
    gameOn = true;
    setRandomNote();
    document.getElementById("startButton").style.visibility = "collapse";
    document.getElementById("quitButton").style.visibility = "visible";
    document.getElementById("replayButton").style.visibility = "visible";
    document.getElementById("timerID").style.visibility = "visible";
    document.getElementById("pauseButton").style.visibility = "visible";
    document.getElementById("currentScore").innerText = String(score);
    startTimer(30);
}
function endGame() {
    document.getElementById("startButton").style.visibility = "visible";
    document.getElementById("quitButton").style.visibility = "collapse";
    document.getElementById("replayButton").style.visibility = "collapse";
    document.getElementById("timerID").style.visibility = "collapse";
    document.getElementById("pauseButton").style.visibility = "collapse";
    score = 0;
    clearInterval(myTimer);
    gameOn = false;
}


function checkAnswer(playerInput) {
    if (gameOn == true) {
        playerInput = String(playerInput);
        if (playerInput == correctAnswer) {
            score += 1;
            document.getElementById("currentScore").innerText = String(score);
            setRandomNote();
        }
        else {
            score -= 0.25;
            document.getElementById("currentScore").innerText = String(score);
        }
    }
}
