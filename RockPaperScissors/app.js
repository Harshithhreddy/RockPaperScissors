let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg-area");

const userMsg=document.querySelector("#user-score");
const compMsg=document.querySelector("#comp-score");


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
})

const getCompChoice = () =>{
    const options=["rock","paper","scissors"];
    const compchance=Math.floor(Math.random() * 3);
    return options[compchance];
}

const gameDraw = () =>{
    msg.innerText = "Game is DRAWN!";
    msg.style.backgroundColor="aliceblue";

}
const playGame = (userChoice) =>{
    const compChoice=getCompChoice();

    if(compChoice===userChoice){
        gameDraw();
    }
    else {
        let userWon=true;

        if(userChoice === "rock"){
            userWon = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWon = compChoice === "scissors" ? false : true;
        }
        else if(userChoice === "scissors"){
            userWon=compChoice === "rock" ? false : true;
        }
        showWinner(userWon , userChoice , compChoice);
    }
}

const showWinner = (userWon,userChoice,compChoice) =>{
    if(userWon){
        userScore++;
        userMsg.innerText=userScore
        msg.innerText=`You WON! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compMsg.innerText=compScore
        msg.innerText=`You LOST! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}