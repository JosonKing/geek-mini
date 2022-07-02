module.exports = function(playerAction) {
  var random = Math.random() * 3;

  var computerAction = "paper";
  if (random < 1) {
    computerAction = "rock";
  } else if (random > 2) {
    computerAction = "scissor";
  }
  console.log('computer:', computerAction);

  if (computerAction === playerAction) {
    console.log("Draw");
    return 0
  } else if (
    (computerAction === "rock" && playerAction === "paper") ||
    (computerAction === "scissor" && playerAction === "rock") ||
    (computerAction === "paper" && playerAction === "scissor")
  ) {
    console.log("You win");
    return -1
  } else {
    console.log("You lose");
    return 1
  }
}