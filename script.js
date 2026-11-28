// Step 1: get human and computer choice

// write a function that returns the human choice between rock, paper and scissors when called

function getHumanChoice() {
    // prompt the user for the choice and store it in a variable
     
    let userChoice = prompt("Choose between Rock, Paper and Scissors: ");

    // convert the variable into lowercase

    userChoice = userChoice.toLowerCase();

    // check if the user choice is valid. 

    let validChoices = ["rock", "paper", "scissors"];
    let validChoice = false;
    for (choice of validChoices){
        if (userChoice === choice){
            validChoice = true;
            break;
        }
    }
    
    // if the user's choice is invalid throw an error
    if (!validChoice){
        throw new TypeError("Please enter the valid choice");
    }

    // return it 
    return userChoice;
}

// write a function that returns the computer generated choice

function getComputerChoice(){
    // generate a random number between 1 to 3 and store it in a variable
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    // if number is 1 than return rock
    // if number is 2 than return scissors
    // if number is 3 than return paper
    
    let computerChoice;

    if (randomNumber === 1){
        computerChoice = "rock"
    }else if(randomNumber === 2){
        computerChoice = "scissors"
    }else if(randomNumber === 3){
        computerChoice = "paper"
    }

    return computerChoice;
}


// Step 2: Write a function that determines who is the winner of the current round following the rules

// initialize variables that keeps the track of scores
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("DRAW");
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        console.log("You Lose: paper beats rock");
    }else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        console.log("You Won: rock beats scissors");
    }else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        console.log("You Lose: scissors beats paper");
    }else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        console.log("Yow Won: paper beats rock");
    }else if(humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        console.log("You Lose: rock beats scissors");
    }else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        console.log("You Won: scissors beats paper");
    }
}


// write a function that calls the getHumanChoice, getComputerChoice, playRound function 5 times
function playGame(){
    // call these functions 5 times
    for(let i = 0; i < 5; i++){
        // store the return values in the variables
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        // pass the variables to the playRound function
        playRound(humanChoice, computerChoice);
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

    
    // when the function calls done, declare the winner who score is higher 
    if (humanScore > computerScore){
        console.log("Congratulations! You Won.");
    }else {
        console.log("Too bad: You Lost to computer");
    }

}

playGame();
