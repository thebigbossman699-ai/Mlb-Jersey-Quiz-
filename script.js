// ================================
// MLB Guess the Team
// script.js
// ================================

let teams = [];
let currentTeam = null;

let guessedPlayers = [];

let score = 0;
let correct = 0;
let guesses = 0;

const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");

const progress = document.getElementById("progress");
const scoreLabel = document.getElementById("score");
const accuracy = document.getElementById("accuracy");
const message = document.getElementById("message");

const correctList = document.getElementById("correctList");

const positionIDs = {
    CF: "cf",
    LF: "lf",
    RF: "rf",
    SS: "ss",
    "2B": "second",
    "3B": "third",
    "1B": "first",
    C: "catcher",
    DH: "dh",
    ACE: "ace"
};

loadGame();
