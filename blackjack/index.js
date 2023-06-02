let player = {
    name: "Radi",
    chips: 150
}

let firstCard, secondCard;
let cards, sum;
let isAlive = false, hasBlackJack = false;
let message = "";

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    isAlive = true;
    hasBlackJack = false;
    player.chips -= 25;
    updateChips();
    if (player.chips < 0) {
        messageEl.textContent = "You've lost everything!"
        player.chips = 0;
        updateChips();
        isAlive = false;
    } else {
        renderGame();
    }
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
        player.chips += 50;
        hasBlackJack = true;
        updateChips();
    } else {
        message = "Busted!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame();
    }
}

function getRandomCard() {
    randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber == 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
}

function updateChips() {
    playerEl.textContent = player.name + ": $" + player.chips;
}

