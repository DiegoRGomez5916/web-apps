function computerMove() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(button) {
    const computerChoice = computerMove();
    const playerChoice = button.textContent;
    const result = determineWinner(playerChoice, computerChoice);
    updateScore(result);
    const resultElement = document.querySelector(".js-result");
    resultElement.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. Result: ${result}`;
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function updateScore(result="") {
    const score = getScore();
    if (result === "Player") {
        score.player++;
    } else if (result === "Computer") {
        score.computer++;
    } else if (result === "Tie") {
        score.tie++;
    }
    localStorage.setItem("score", JSON.stringify(score));
    displayScore(score);
}

function getScore() {
    if (localStorage.getItem("score")) {
        return JSON.parse(localStorage.getItem("score"));
    } else {
        return {
            player: 0,
            computer: 0,
            tie: 0
        };
    }
}

function displayScore(score) {
    const scoreElement = document.querySelector(".js-score");
    scoreElement.textContent = `Player: ${score.player}, Computer: ${score.computer}, Tie: ${score.tie}`;
}

function resetScore(){
    localStorage.removeItem("score");
    updateScore();
}