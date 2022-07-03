//Initialize Array with 3 Values - Rock, Paper and Cissors in this direction
//Afterwards check array index of choice

const choiceArray = ["Rock", "Paper", "Scissors"]

/*
1 = Rock
2 = Paper
3 = Scissors 
*/

// Function do determine which number is Rock, Paper, or Scissors
function convertToString(number) {
    const output = null
    while (output = null) {
        switch (number) {
            case 1:
                output = "Rock"
                break;
            case 2:
                output = "Paper"
                break;
            case 3:
                output = "Scissors"
                break;
            default:
                break;
        }
    }
    return output
}

//Opens a prompt Windows and lets user pick Rock Paper or Scissor by number
function playerOnePick() {
    let promptinput = prompt(`Choose:
1 = Rock
2 = Paper
3 = Scissors`)
    return convertToString(parseInt(promptinput))
}

// player 2 picks with a random number between 1 - 3
function playerTwoPick() {
    let randomNumber = Math.floor(Math.random() * 3 + 1)
    return convertToString(randomNumber)
}


// return "Win" if user wins, "lose" if users loses and "tie" if its a tie
function whoIsWinner(choiceOne, choiceTwo) {
    if (choiceArray.indexOf(choiceOne) == choiceArray.indexOf(choiceTwo)) {
        return "Tie"
    }
    



}


