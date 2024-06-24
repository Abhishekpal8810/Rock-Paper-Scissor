let userScore = 0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector('#comp-score');
  
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice is clicked", userChoice);
        
        playgame(userChoice);
    });

});

const gencompChoice = () =>{
    
    const option = ["rock", "paper", "scissors"  ];
     const randInd = Math.floor(Math.random() *3);
     return option[randInd];

}
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        console.log("you lose!")
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}
const gamedraw = () =>{
    console.log("game was draw.");
    msg.innerText = "game was draw. play again."
    msg.style.backgroundColor = "gray";
}
const playgame = (userChoice) =>{
  console.log("user choice=", userChoice);
  //generate computer choice
  const compChoice = gencompChoice();
  console.log("computer choice=", compChoice);

  if(userChoice === compChoice){
    gamedraw();
  }
  else{
    userWin = true;
    if(userChoice === "rock"){
        //scissor paper
        userWin = compChoice ==="paper" ? false : true;
    }
        else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
          } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
          }
          showWinner(userWin, userChoice, compChoice);
    }
  }
