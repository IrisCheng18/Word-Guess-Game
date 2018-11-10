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


function getNewWord() {
    return musicInstruments[Math.floor(Math.random() * musicInstruments.length)];
}

function checkLetterAlreadyGuessed(char = "", str = "") {
    return str.includes(char);
}

function updateStats() {
    document.querySelector("#wins").innerHTML = "Wins: " + winsCounter;
    document.querySelector("#currentWord").innerHTML = "Current Word: " + currentWord;
    document.querySelector("#numofGuessRemaining").innerHTML = "Number of Guesses Remaining: " + numOfGuessRemaining;
    document.querySelector("#lettersGuessed").innerHTML = "Letters Already Guessed: " + userInput;
}

// random word computer picked
randomWord = getNewWord();
console.log(randomWord + " length: " + randomWord.length);

for (var i = 0; i < randomWord.length; i++) {
    currentWord += "-"
};
updateStats();



document.onkeyup = function (event) {
    var keyPressed = event.key;

    // check whether the letter is already selected
    if (checkLetterAlreadyGuessed(keyPressed, lettersGuessed)) {
        // quit the onkeyup() to select another letter
        return;
    };

    // collect the letter already guessed
    lettersGuessed += keyPressed;
    userInput = userInput + " " + keyPressed;

    // update current word
    var tempStr = "";
    for (var i = 0; i < randomWord.length; i++) {

        if (currentWord[i] !== "-") {
            tempStr += currentWord[i];
        } else if (keyPressed === randomWord[i]) {
            tempStr += keyPressed;
        } else {
            tempStr += "-";
        };
    };
    currentWord = tempStr;

    numOfGuessRemaining--;
    if (currentWord === randomWord || numOfGuessRemaining === 0) {
        if (currentWord === randomWord) {
            winsCounter++;
        }
        
        userInput = "";
        numOfGuessRemaining = 12;
        lettersGuessed = "";
        currentWord = "";

        // random word computer picked
        randomWord = getNewWord();
        console.log(randomWord + " length: " + randomWord.length);

        for (var i = 0; i < randomWord.length; i++) {
            currentWord += "-"
        };
    };

    updateStats();
};