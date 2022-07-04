//Initialize Array with 3 Values - rock, paper and Cissors in this direction
//Afterwards check array index of choice

/*
1 = rock
2 = paper
3 = scissors 
*/


//Running Block Lets try (delete me)

let variable = whoIsWinner(playerOnePick(), playerTwoPick())
console.log(variable)

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
    console.log(choiceOne)
        console.log(choiceTwo)
    if (choiceOne == choiceTwo) {
        
        console.log("1")
        return "tie"
    }

    //rock
    if (choiceOne == "rock") {
        if (choiceTwo == "scissors") {
            console.log("2")
            return "Win"
        } else {
            console.log("2")
            return "Lose"
        }
    }

    //paper
    if (choiceOne == "paper") {
        if (choiceTwo == "rock") {
            console.log("3")
            return "Win"
        } else {
            console.log("3")
            return "Lose"
        }
    }

    //scissors
    if (choiceOne == "scissors") {
        if (choiceTwo == "paper") {
            console.log("4")
            return "Win"
        } else {
            console.log("4")
            return "Lose"
        }
    }
}


