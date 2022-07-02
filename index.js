var playerAction = process.argv[process.argv.length - 1];

var random = Math.random() * 3;

var computerAction = "paper";
if (random < 1) {
  computerAction = "rock";
} else if (random > 2) {
  computerAction = "scissor";
}
console.log(computerAction);

if (computerAction === playerAction) {
  console.log("Draw");
} else if (
  (computerAction === "rock" && playerAction === "paper") ||
  (computerAction === "scissor" && playerAction === "rock") ||
  (computerAction === "paper" && playerAction === "scissor")
) {
  console.log("You win");
} else {
  console.log("You lose");
}
