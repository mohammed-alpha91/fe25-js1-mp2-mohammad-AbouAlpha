const form = document.getElementById("nameForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const gamePlayDiv = document.getElementById("gamePlay");
  gamePlayDiv.classList.remove("hidden");
  form.classList.add("hidden");

  const name = form.querySelector("input").value;
  const message = document.getElementById("welcomeMessage");

  message.textContent = `Welcome ${name}!May the odds be ever in your favor.`;
  const nameDisplay = document.getElementById("nameDisplay");
  nameDisplay.textContent = name;

  form.reset();
  console.log(name);
});

let roundScore = 0;
let rounds = 0;
let totalScore = 0;

function rollDice() {
  let randomNumber = Math.ceil(Math.random() * 6);
  roundScore += randomNumber;

  if (roundScore >= 100 || totalScore >= 100) {
    document.getElementById("winner").innerText = "CONGRATULATIONS, YOU WON IN "+ rounds + "rounds"
}

  if (randomNumber === 1) {
    roundScore = 0;
    rounds++;
  }
  document.getElementById("roundScore").textContent = roundScore;
  document.getElementById("diceThrow").textContent = randomNumber;
  document.getElementById("rounds").textContent = rounds;
  if (roundScore >= 100 || totalScore >= 100) {
}
  
}
function collect() {
  const pointsToAdd = roundScore;
  totalScore += pointsToAdd;
  rounds++;
  document.getElementById("rounds").textContent = rounds;

  if (roundScore >= 100 || totalScore >= 100) {
    document.getElementById("winner").innerText = "CONGRATULATIONS, YOU WON IN "+ rounds + "rounds"
}

  document.getElementById("totalScore").textContent = totalScore;
  roundScore = 0;
  document.getElementById("roundScore").textContent = roundScore;
  document.getElementById("diceThrow").textContent = "";

}



document.getElementById("rollButton").addEventListener("click", rollDice);
document.getElementById("collectButton").addEventListener("click", collect);



