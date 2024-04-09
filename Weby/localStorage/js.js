function getTime(){
    let date = new Date()
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth()+1
    let year = today.getFullYear()
    return day+"."+month+"."+year
}
function addCard(item){
    let card = document.createElement('div')
    card.className = 'card'
    let name = document.createElement('h3')
    name.textContent = item.name
    let point = document.createElement('p')
    point.textContent = item.points
    let date = document.createElement('p')
    date.textContent = item.date
    card.appendChild(name)
    card.appendChild(point)
    card.appendChild(date)
    document.querySelector("#cards").appendChild(card)
}

function showCards(){
    let body = document.querySelector('#cards')
    body.innerHTML = ''
    getInvoices().forEach(item =>{
        if(item.date === getTime()) addCard(item)
    })
}
showCards()
console.log(getInvoices())
let name = document.querySelector('#name')
let points = document.querySelector('#points')
let submit = document.querySelector('#submit')
submit.addEventListener('click',event =>{
    let date = new Date()
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth()+1
    let year = today.getFullYear()
    addInvoice(date,name.value,points.value,day+"."+month+"."+year)
    addCard(getInvoices()[getInvoices().length-1])
    name.value = ""
    points.value = ""
})

function getInvoices() {
    return JSON.parse(localStorage.getItem('invoices')) || [];
}

function saveInvoices(invoices) {
    localStorage.setItem('invoices', JSON.stringify(invoices));
}

function addInvoice(id, name, points, date) {
    let invoices = getInvoices();
    invoices.push({ id, name, points, date });
    saveInvoices(invoices);
}
function removeInvoice(id) {
    let invoices = getInvoices();
    invoices = invoices.filter(invoice => invoice.id !== id);
    saveInvoices(invoices);
}
