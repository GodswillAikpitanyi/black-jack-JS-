
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
  name: "Imade",
  chips: 150
}

document.querySelector("#player-el").textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10){
    return 10; 
  } else {
    return randomNumber;
  }
}

function startGame(){
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}


function renderGame(){
  document.querySelector("#cards-el").textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
      document.querySelector("#cards-el").textContent += cards[i] + ", ";
  }

  document.querySelector("#sum-el").textContent = "Sum: " + sum;
  if (sum <= 20) {
      message = "Do you want to draw a new card?";
  
  } else if (sum === 21) {
      message = "You've got Blackjack!!!!!";
      hasBlackJack = true;

  } else {
      message = "You've lost the game";
      isAlive = false;
  }
  
  document.querySelector("#message-el").textContent = message;
}


function newCard() {
  if (isAlive === true && hasBlackJack === false){
    let newDrawnCard = getRandomCard();
    sum += newDrawnCard;
    cards.push(newDrawnCard);
    renderGame();
  }
  
}