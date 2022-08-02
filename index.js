//Initialize Array with 3 Values - rock, paper and Scissors in this direction
//Afterwards check array index of choice

/*
1 = rock
2 = paper
3 = scissors 
*/

// function block

const score = [0, 0];

const buttons = document.querySelectorAll(".key")

buttons.forEach(button => button.addEventListener('click', (e) => {
    let winner = whoIsWinner(button.getAttribute("data-id"), playerTwoPick())
    document.getElementById("scoreboard").innerHTML = winner
    assignScore(winner)
}))


//determines who is the winner of the match via simple RPS logic


function whoIsWinner(choiceOne, choiceTwo) {
    if (choiceOne == choiceTwo) {
        console.log("tie")
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

// player 2 picks with a random number between 1 - 3 returns string
//using the convert to String Method allows it to return a string
function playerTwoPick() {
    let randomNumber = Math.floor(Math.random() * 3 +1)
    let choice = convertToString(randomNumber)
    console.log("player 2 choose: " + choice)
    return choice
}

function assignScore(winner) {
    switch (winner) {
        case "Win":
            score[0]++;
            document.getElementById("playerOne").innerHTML = score[0]
            break;
        case "Lose":
            score[1]++;
            document.getElementById("playerTwo").innerHTML = score[1]
            break;
        default:
            break;
    }
}

//Running Block

//startGame(playerOnePick(), playerTwoPick())


// Function do determine which number is rock, paper, or scissors


//Opens a prompt Windows and lets user pick rock paper or Scissor by number
//returns string

//deprecated
//function playerOnePick() {
//    let promptinput = prompt(`Choose:
//Rock
//Paper
//Scissors`)
//    const choice = promptinput.toLowerCase()
//    console.log("Player 1 choose: " + choice)
//    return choice
//}




// return "Win" if user wins, "lose" if users loses and "tie" if its a tie


//Gets Target and changes value of an array
//deprecated
//function getTarget(nextResult, target) {
//    if (nextResult!="tie") {
//        if (nextResult == "Win") {
//            target[0] = target[0] + 1;
//        } else {
//            target[1] = target[1] + 1;
//        }
//    }
//}

//Takes in 2 players and plays as long as neither values reach 5
//function startGame(playerOneChoose, playerTwoChoose) {
//let player
//let pc
//    let result
//    let targetBoard = [0,0]
//
//    while((targetBoard[1] != 5 && targetBoard[0] != 5)) {
//    player = playerOnePick();
//    pc = playerTwoPick();
//    result = whoIsWinner(player, pc);
//    getTarget(result,targetBoard)
//    console.log(targetBoard)
//    }
//}
