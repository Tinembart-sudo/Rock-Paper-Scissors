//Initialize Array with 3 Values - rock, paper and Cissors in this direction
//Afterwards check array index of choice

/*
1 = rock
2 = paper
3 = scissors 
*/


//Running Block

 startGame(playerOnePick(), playerTwoPick())


// Function do determine which number is rock, paper, or scissors
function convertToString(number) {
    let output
        switch (number) {
            case 1:
                output = "rock"
                break;
            case 2:
                output = "paper"
                break;
            case 3:
                output = "scissors"
                break;
            default:
                break;
        }
    return output
}

//Opens a prompt Windows and lets user pick rock paper or Scissor by number
//returns string
function playerOnePick() {
    let promptinput = prompt(`Choose:
Rock
Paper
Scissors`)
    const choice = promptinput.toLowerCase()
    console.log("Player 1 choose: " + choice)
    return choice
}

// player 2 picks with a random number between 1 - 3 returns string
function playerTwoPick() {
    let randomNumber = Math.floor(Math.random() * 3 +1)
    let choice = convertToString(randomNumber)
    console.log("player 2 choose: " + choice)
    return choice
}


// return "Win" if user wins, "lose" if users loses and "tie" if its a tie
function whoIsWinner(choiceOne, choiceTwo) {
    if (choiceOne == choiceTwo) {
        return "tie";
    }

    //rock
    if (choiceOne == "rock") {
        if (choiceTwo == "scissors") {
            console.log("You Win!");
            return "Win";
        } else {
            console.log("You Lose!");
            return "Lose";
        }
    }

    //paper
    if (choiceOne == "paper") {
        if (choiceTwo == "rock") {
            console.log("You Win!");
            return "Win";
        } else {
            console.log("You Lose!");
            return "Lose";
        }
    }

    //scissors
    if (choiceOne == "scissors") {
        if (choiceTwo == "paper") {
            console.log("You Win!");
            return "Win";
        } else {
            console.log("You Lose!");
            return "Lose";
        }
    }

}

//Gets Target and changes value of an array
function getTarget(nextResult, target) {
    if (nextResult!="tie") {
        if (nextResult == "Win") {
            target[0] = target[0] + 1;
        } else {
            target[1] = target[1] + 1;
        }
    }
}

//Takes in 2 players and plays as long as neither values reach 5
function startGame(playerOneChoose, playerTwoChoose) {
    let player
    let pc
    let result
    let targetBoard = [0,0]

    while((targetBoard[1] != 5 && targetBoard[0] != 5)) {
    player = playerOnePick();
    pc = playerTwoPick();
    result = whoIsWinner(player, pc);
    getTarget(result,targetBoard)
    console.log(targetBoard)
    }
}
