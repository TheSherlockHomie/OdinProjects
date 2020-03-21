function game() {
	console.log("Welcome to Rock, Paper, Scissors!");
	console.log("Enter your choice to play");
	console.log("Enter Stop to stop playing");

	const moves = ["rock", "paper", "scissors"];

	while (true) {
		let input = prompt("What's your move?");
		input = input.toLowerCase();
		if (input === "stop") {
			break;
		}
		if (input !== "rock" && input !== "paper" && input !== "scissors") {
			console.log("Invalid input!");
			console.log("try again");
			continue;
		}
		let computer = moves[Math.floor(Math.random() * moves.length)];
		console.log(computer);
		if (
			(input === "rock" && computer === "scissors") ||
			(input === "paper" && computer === "rock") ||
			(input === "scissors" && computer === "paper")
		) {
			console.log("You win!");
		}
		if (
			(input === "rock" && computer === "paper") ||
			(input === "paper" && computer === "scissors") ||
			(input === "scissors" && computer === "rock")
		) {
			console.log("You lose :(");
		}
	}
}

window.addEventListener("load", game, false);
