var musicInstruments = [
    "trumpet",
    "flute",
    "piano",
    "saxophone",
    "clarinet",
    "xylophone",
    "guitar",
    "violin",
    "mandolin",
    "tuba",
    "french horn",
    "harmonica",
    "drum",
    "harp",
    "tambourine"
];

var winsCounter = 0;
var currentWord = "";
var numOfGuessRemaining = 12;
var lettersGuessed = "";
var userInput = ""; // for display purpose
var randomWord = "";

function checkLetterAlreadyGuessed (char = "", str = "") {
    return str.includes(char);
}

function getNewWord() {
    return musicInstruments[Math.floor(Math.random() * musicInstruments.length)];   
}

function updateStats (newWordLength = 0) {
    for (var i = 0; i < newWordLength; i++) {
        currentWord += "- "
    };

    document.querySelector("#wins").innerHTML = "Wins: " + winsCounter;
    document.querySelector("#currentWord").innerHTML = "Current Word: " + currentWord;
    document.querySelector("#numofGuessRemaining").innerHTML = "Number of Guesses Remaining: " + numOfGuessRemaining;
    document.querySelector("#lettersGuessed").innerHTML = "Letters Already Guessed: " + userInput;
}

// random word computer picked
randomWord = getNewWord();
console.log(randomWord);

updateStats(randomWord.length);

document.onkeyup = function(event) {
    var keyPressed = event.key;

    // check whether the letter is already selected
    if (checkLetterAlreadyGuessed(keyPressed, randomWord)) {
        // quit the onkeyup() to select another letter
        return;
    };

    // collect the letter already guessed
    lettersGuessed += keyPressed;
    userInput = userInput + " " + keyPressed;




    
};