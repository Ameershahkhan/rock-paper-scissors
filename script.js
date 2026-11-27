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

// call the human choice function and stores it's returned value in a variable
try{
    let humanChoice = getHumanChoice();
    console.log(humanChoice);
}catch(e){
    console.log(e.message);
}

// call the computer choice function that stores it's return value on the computer

