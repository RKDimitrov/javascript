let myLeads = []

const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

inputBtn.addEventListener("click", function () {
    if (!inputEl.value) {
        console.log("Nothing to save");
    } else {
        myLeads.push(inputEl.value);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        inputEl.value = "";
    }
    if (leadsFromLocalStorage) {
        myLeads = leadsFromLocalStorage
        renderLeads();
    }
})

function renderLeads() {
    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' rel='noopener noreferrer' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>`;
    }

    ulEl.innerHTML = listItems;
}
