let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count++;
    countEl.innerText = count;
}

function save() {
    console.log(count)
}

let name = "per"
let message = "You have three new notifications"

let messageToUser = message + "," + name

