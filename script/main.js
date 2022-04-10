function closeModal() {
    document.getElementById("modal").style.display = "none"
}
function createTask() {
    document.getElementById("modal").style.display = "flex"
}


let baslik = document.getElementById('inputBaslik');
let aciklama = document.getElementById('inputHedefAciklama');
let dateInput = document.getElementById('date-input');
let timeInput = document.getElementById('time-input');
let saveButton = document.getElementById('save-button');

let card = document.createElement("div")
card.classList.add('card')
let cardTop = document.createElement('div')
cardTop.classList.add('card-top')
let cardTitle = document.createElement('h2')
cardTitle.classList.add('card-title')
let cardTopRight = document.createElement('div')
cardTopRight.classList.add('card-top-right')
let cardDateTime = document.createElement('div')
cardDateTime.classList.add('card-date-time')
let spanDate = document.createElement('span')
spanDate.classList.add('date')
let spanTime = document.createElement('span')
spanTime.classList.add('time')
let optionsButton = document.createElement('i')
optionsButton.classList.add('options', 'uil', 'uil-ellipsis-h')
let taskContent = document.createElement('p')
taskContent.classList.add('task-content')
let cardBottom = document.createElement('div')
cardBottom.classList.add('card-bottom')
let daysLeftBar = document.createElement('div')
daysLeftBar.classList.add('days-left-bar')
let daysLeft = document.createElement('span')
daysLeft.classList.add('days-left')
let progressBar = document.createElement('div')
progressBar.classList.add('progress-bar')
let detailsButton = document.createElement('button')
detailsButton.classList.add('details')
let detailsIcon = document.createElement('i')
detailsIcon.classList.add('uil', 'uil-arrow-down')
/*
let baslikValue = baslik.value
let aciklamaValue = aciklama.value
let dateInputValue = dateInput.value
let timeInputValue = timeInput.value
*/

function creatingCard() {

    //CREATING CARD ELEMENTS
    card.appendChild(cardTop)
    card.appendChild(taskContent)
    card.appendChild(cardBottom)
    cardTop.appendChild(cardTitle)
    cardTitle.innerText = baslikValue
    cardTop.appendChild(cardTopRight)
}

