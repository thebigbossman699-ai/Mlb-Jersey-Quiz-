let currentTeam;
let score = 0;
let time = 60;
let timer;


const positions = [
    "CF",
    "LF",
    "RF",
    "SS",
    "2B",
    "3B",
    "1B",
    "P",
    "C",
    "DH"
];



function startGame(){

    score = 0;

    document.getElementById("score").textContent = score;

    loadTeam();

}



function loadTeam(){

    clearInterval(timer);

    time = 60;

    document.getElementById("timer").textContent = time;


    currentTeam = teams[
        Math.floor(Math.random() * teams.length)
    ];


    document.getElementById("teamName").textContent = "???";


    document.getElementById("guessInput").value="";


    document.getElementById("message").textContent="";


    positions.forEach(position=>{

        let spot=document.getElementById(position);

        if(spot){

            spot.textContent="?";

        }

    });



    currentTeam.players.forEach(player=>{

        let spot=document.getElementById(player.position);

        if(spot){

            spot.textContent=player.number;

        }

    });



    startTimer();

}





function checkGuess(){

    let guess=document
    .getElementById("guessInput")
    .value
    .toLowerCase()
    .trim();


    if(
        guess === currentTeam.team.toLowerCase()
    ){

        document.getElementById("message")
        .textContent="✅ Correct!";


        score++;


        document.getElementById("score")
        .textContent=score;


        revealTeam();


    }else{


        document.getElementById("message")
        .textContent="❌ Wrong Team";


    }

}





function revealTeam(){


    document.getElementById("teamName")
    .textContent=currentTeam.team;


    currentTeam.players.forEach(player=>{


        let spot=document.getElementById(player.position);


        if(spot){

            spot.textContent=
            player.number + "\n" + player.name;

        }


    });


}





function showHint(){


    document.getElementById("message")
    .textContent=
    "Hint: " + currentTeam.team.substring(0,3)+"...";


}





function startTimer(){


    timer=setInterval(()=>{


        time--;


        document.getElementById("timer")
        .textContent=time;



        if(time<=0){


            clearInterval(timer);


            document.getElementById("message")
            .textContent=
            "Time's Up! Answer: "+currentTeam.team;


            revealTeam();

        }


    },1000);


}





document
.getElementById("guessBtn")
.onclick=checkGuess;


document
.getElementById("nextBtn")
.onclick=loadTeam;


document
.getElementById("revealBtn")
.onclick=revealTeam;


document
.getElementById("hintBtn")
.onclick=showHint;



startGame();
