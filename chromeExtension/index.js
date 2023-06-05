let myLeads = []

const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", function () {
    if (!inputEl.value) {
        console.log("Nothing to save");
    } else {
        myLeads.push(inputEl.value);
        inputEl.value = "";
    }
    renderLeads();
})

function renderLeads() {
    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        //listItems += "<li><a target='_blank' rel='noopener noreferrer' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
        listItems += `
        <li>
            <a target='_blank' rel='noopener noreferrer' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>`;
    }

    ulEl.innerHTML = listItems;
}
