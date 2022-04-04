function closeModal() {
    document.getElementById("modal").style.display = "none"
}
function createTask() {
    document.getElementById("modal").style.display = "flex"
}


const baslik = document.getElementById('inputBaslik');
const aciklama = document.getElementById('inputHedefAciklama');
const dateInput = document.getElementById('date-input');
const timeInput = document.getElementById('time-input');
const saveButton = document.getElementById('save-button');



creatingCard = () => {
    const baslikValue = baslik.value
    const aciklamaValue = aciklama.value
    const dateInputValue = dateInput.value
    const timeInputValue = timeInput.value

    //CREATING CARD ELEMENTS
    const card = document.createElement("div")
    card.classList.add('card')
    const cardTop = document.createElement('div')
    cardTop.classList.add('card-top')
    const cardTitle = document.createElement('h2')
    cardTitle.classList.add('card-title')
    const cardTopRight = document.createElement('div')
    cardTopRight.classList.add('card-top-right')
    const cardDateTime = document.createElement('div')
    cardDateTime.classList.add('card-date-time')
    const spanDate = document.createElement('span')
    spanDate.classList.add('date')
    const spanTime = document.createElement('span')
    spanTime.classList.add('time')
    const optionsButton = document.createElement('i')
    optionsButton.classList.add('options', 'uil', 'uil-ellipsis-h')
    const taskContent = document.createElement('p')
    taskContent.classList.add('task-content')
    const cardBottom = document.createElement('div')
    cardBottom.classList.add('card-bottom')
    const daysLeftBar = document.createElement('div')
    daysLeftBar.classList.add('days-left-bar')
    const daysLeft = document.createElement('span')
    daysLeft.classList.add('days-left')
    const progressBar = document.createElement('div')
    progressBar.classList.add('progress-bar')
    const detailsButton = document.createElement('button')
    detailsButton.classList.add('details')
    const detailsIcon = document.createElement('i')
    detailsIcon.classList.add('uil', 'uil-arrow-down')

    card.appendChild(cardTop)
    card.appendChild(taskContent)
    card.appendChild(cardBottom)
    cardTop.appendChild(cardTitle)
    cardTitle.innerText = baslikValue
    cardTop.appendChild(cardTopRight)
}
saveButton.addEventListener("click", creatingCard);

