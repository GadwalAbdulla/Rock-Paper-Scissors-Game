let userScore = 0;                                                          //here we are tracking our user and computer scores
let compScore = 0;

const choices = document.querySelectorAll(".choice");                       //accessing choices
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {                                               //to generate computer choices here we use genCompChoice function
  const options = ["rock", "paper", "scissors"];                            //it is a array
  const randIdx = Math.floor(Math.random() * 3);                            //generating random index using Math.random()
  return options[randIdx];                                                  //return computers choice
};

const drawGame = () => {                                                    //if user choices and computer choice is same then we call this drawGame function
  msg.innerText = "Game was Draw. Play again.";                             //updating message
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {                   //call show winner function
  if (userWin) {                                                            //if user win
    userScore++;                                                            //updating score
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;      //updating message
    msg.style.backgroundColor = "green";
  } else {                                                                  //if computer win
    compScore++;                                                            //updating score
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;     //updating message
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {                                          //here, we are generating choices from computer
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {                                          //if user choice and computers choice is same then it is draw
    //Draw Game
    drawGame();
  } else {
    let userWin = true;                                                     //let we assume that user is win
    if (userChoice === "rock") {                                            //if user choice is rock then remaining options are scissors and paper to choose by computer
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;                      //if computer choice is paper then computer is win otherwise user choice is win
    } else if (userChoice === "paper") {                                    //if user choice is paper then remaining options are rock, and scissors to choose by computer
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;                   //if computer choice is scissors then computer is win otherwise user choice is win 
    } else {                                                                //if user choice scissors then remaining options are rock, and paper to choose by computer 
      //rock, paper
      userWin = compChoice === "rock" ? false : true;                       //if computer choice is rock then computer is win otherwise user choice win 
    }
    showWinner(userWin, userChoice, compChoice);                            //showing who is winner 
  }
};

choices.forEach((choice) => {                                               //here, we have add a event listener just like, if we select any choice then it will appears its id and we are ready to start
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});