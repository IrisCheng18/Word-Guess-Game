var wordGuessGame = {
    winsCounter: 0,
    currentWord: "",
    numOfGuessRemaining: 12,
    lettersGuessed: "",
    userInput: "", // for display purpose
    randomWord: "",

    musicInstruments: [
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
    ],

    getNewWord: function () {
        return this.musicInstruments[Math.floor(Math.random() * this.musicInstruments.length)];
    },

    checkLetterAlreadyGuessed: function (char = "", str = "") {
        return str.includes(char);
    },

    updateStats: function () {
        document.querySelector("#wins").innerHTML = "Wins: " + this.winsCounter;
        document.querySelector("#currentWord").innerHTML = "Current Word: " + this.currentWord;
        document.querySelector("#numofGuessRemaining").innerHTML = "Number of Guesses Remaining: " + this.numOfGuessRemaining;
        document.querySelector("#lettersGuessed").innerHTML = "Letters Already Guessed: " + this.userInput;
    },

    init: function () {
        // random word computer picked
        this.randomWord = this.getNewWord();
        console.log(this.randomWord + " length: " + this.randomWord.length);

        // update current word
        for (var i = 0; i < this.randomWord.length; i++) {
            this.currentWord += "-"
        };
        this.updateStats();
    },

    play: function (keyPressed) {
        // check whether the letter is already selected
        if (this.checkLetterAlreadyGuessed(keyPressed, this.lettersGuessed)) {
            // quit the onkeyup() to select another letter
            return;
        };

        // collect the letter already guessed
        this.lettersGuessed += keyPressed;
        this.userInput = this.userInput + " " + keyPressed;

        // update current word
        var tempStr = "";
        for (var i = 0; i < this.randomWord.length; i++) {

            if (this.currentWord[i] !== "-") {
                tempStr += this.currentWord[i];
            } else if (keyPressed === this.randomWord[i]) {
                tempStr += keyPressed;
            } else {
                tempStr += "-";
            };
        };
        this.currentWord = tempStr;

        this.numOfGuessRemaining--;
        if (this.currentWord === this.randomWord || this.numOfGuessRemaining === 0) {
            if (this.currentWord === this.randomWord) {
                this.winsCounter++;
            }

            this.userInput = "";
            this.numOfGuessRemaining = 12;
            this.lettersGuessed = "";
            this.currentWord = "";

            // random word computer picked
            this.randomWord = this.getNewWord();
            console.log(this.randomWord + " length: " + this.randomWord.length);

            for (var i = 0; i < this.randomWord.length; i++) {
                this.currentWord += "-"
            };
        };

        this.updateStats();
    }
};


wordGuessGame.init()


document.onkeyup = function (event) {
    var keyPressed = event.key;

    wordGuessGame.play(keyPressed);
};


