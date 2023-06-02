let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let isAlive = true;
let hasBlackJack = true;
let message = "";

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
    renderGame();
}

function renderGame() {
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent = "Cards: " + cards;
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Do you want to draw another card?";
    } else if (sum == 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "Busted!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    let card = 3;
    sum += card;
    cards.push(card)
    renderGame();
}

