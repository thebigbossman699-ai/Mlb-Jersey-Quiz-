// ==========================
// MLB Guess Game
// script.js
// ==========================

// Game Variables
let currentTeam;
let guessedPlayers = [];
let score = 0;
let totalGuesses = 0;

// Pick a random team
function randomTeam() {
    currentTeam = teams[Math.floor(Math.random() * teams.length)];
    guessedPlayers = [];

    document.getElementById("correctList").innerHTML = "";
    document.getElementById("message").textContent = "";

    loadTeam();
}

// Display jersey numbers
function loadTeam() {

    // Clear all positions first
    document.getElementById("cf").textContent = "";
    document.getElementById("lf").textContent = "";
    document.getElementById("rf").textContent = "";
    document.getElementById("ss").textContent = "";
    document.getElementById("second").textContent = "";
    document.getElementById("third").textContent = "";
    document.getElementById("first").textContent = "";
    document.getElementById("catcher").textContent = "";
    document.getElementById("dh").textContent = "";
    document.getElementById("ace").textContent = "";

    currentTeam.players.forEach(function(player){

        if(player.position==="CF")
            document.getElementById("cf").textContent=player.number;

        if(player.position==="LF")
            document.getElementById("lf").textContent=player.number;

        if(player.position==="RF")
            document.getElementById("rf").textContent=player.number;

        if(player.position==="SS")
            document.getElementById("ss").textContent=player.number;

        if(player.position==="2B")
            document.getElementById("second").textContent=player.number;

        if(player.position==="3B")
            document.getElementById("third").textContent=player.number;

        if(player.position==="1B")
            document.getElementById("first").textContent=player.number;

        if(player.position==="C")
            document.getElementById("catcher").textContent=player.number;

        if(player.position==="DH")
            document.getElementById("dh").textContent=player.number;

        if(player.position==="ACE")
            document.getElementById("ace").textContent=player.number;

    });

    updateScore();
}

// Update scoreboard
function updateScore(){

    document.getElementById("score").textContent = score;

    document.getElementById("progress").textContent =
        guessedPlayers.length + " / " + currentTeam.players.length;

    let accuracy = 100;

    if(totalGuesses > 0){
        accuracy = Math.round((score / totalGuesses) * 100);
    }

    document.getElementById("accuracy").textContent =
        accuracy + "%";
}

// Guess player
function checkGuess(){

    let guess =
        document.getElementById("guessInput")
        .value
        .trim()
        .toLowerCase();

    if(guess==="") return;

    totalGuesses++;

    let player=currentTeam.players.find(function(player){
        return player.name.toLowerCase()===guess;
    });

    if(player){

        if(guessedPlayers.includes(player.name)){

            document.getElementById("message").textContent =
                "Already guessed!";

        }else{

            guessedPlayers.push(player.name);

            score++;

            document.getElementById("message").textContent =
                "✅ Correct!";

            let li=document.createElement("li");
            li.textContent=
                player.name + " - " + player.position;

            document.getElementById("correctList")
                .appendChild(li);

            // Finished team?
            if(guessedPlayers.length===currentTeam.players.length){

                document.getElementById("message").textContent =
                    "🎉 Team Complete!";

            }

        }

    }else{

        document.getElementById("message").textContent =
            "❌ Incorrect";

    }

    document.getElementById("guessInput").value="";

    updateScore();

}

// Reveal every player
function revealAnswers(){

    document.getElementById("correctList").innerHTML="";

    currentTeam.players.forEach(function(player){

        let li=document.createElement("li");

        li.textContent=
            player.position +
            " - " +
            player.name +
            " (#" +
            player.number +
            ")";

        document.getElementById("correctList")
            .appendChild(li);

    });

    document.getElementById("message").textContent =
        currentTeam.team;

}

// Next team
function nextTeam(){

    randomTeam();

}

// ---------- Event Listeners ----------

document
.getElementById("submitGuess")
.addEventListener("click",checkGuess);

document
.getElementById("guessInput")
.addEventListener("keydown",function(event){

    if(event.key==="Enter"){
        checkGuess();
    }

});

document
.getElementById("revealButton")
.addEventListener("click",revealAnswers);

document
.getElementById("nextButton")
.addEventListener("click",nextTeam);

// Start the game
randomTeam();
