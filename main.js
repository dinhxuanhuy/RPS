// function randomly return rock paper or scissors

function getComputerChoice() {
    const Rockvalue = Math.random();
    const Papervalue = Math.random();
    const Scissorsvalue = Math.random();
    if (Rockvalue > Papervalue && Rockvalue > Scissorsvalue) {
        return "rock";
    }
    if (Papervalue > Rockvalue && Papervalue > Scissorsvalue) {
        return "paper";
    }
    if (Scissorsvalue > Rockvalue && Scissorsvalue > Papervalue) {
        return "scissors";
    }
}
function getHumanChoice() {
    const humanChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return getHumanChoice(); // Ask again if the input is invalid
    }
    return humanChoice;
}
humanscore = 0;
computerscore = 0;
function gamestart() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    console.log("Computer choice: " + computerChoice);
    console.log("Human choice: " + humanChoice);
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    }
    else if ((computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")) {
        console.log("Computer wins!");
        computerscore++;
    }
    else {
        console.log("Human wins!");
        humanscore++;
    }
    console.log("Human score: " + humanscore);
    console.log("Computer score: " + computerscore);
}
function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1));
        gamestart();
    }
}