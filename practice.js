let hands = ["rock", "paper", "scissors"]

function randomItem() {
    let item = Math.floor(Math.random() * 3);
    return hands[item];
}

console.log(randomItem());