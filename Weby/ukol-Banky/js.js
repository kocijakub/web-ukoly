let bigInput = {
    "banks": [
        {
            "name": "Bank of Springfield",
            "location": "123 Main St, Springfield, IL",
            "overall_score": 85,
            "opening_hours": "9:00 AM - 5:00 PM",
            "loan_interest_rate": "3.5%",
        },
        {
            "name": "Capital City Bank",
            "location": "456 Elm St, Capital City, CA",
            "overall_score": 78,
            "opening_hours": "8:30 AM - 4:30 PM",
            "loan_interest_rate": "4.0%"
        },
        {
            "name": "Metro Financial",
            "location": "789 Oak St, Metroville, NY",
            "overall_score": 92,
            "opening_hours": "10:00 AM - 7:00 PM",
            "loan_interest_rate": "3.75%"
        },
        {
            "name": "Riverside Savings & Loan",
            "location": "101 River Rd, Riverside, TX",
            "overall_score": 81,
            "opening_hours": "9:00 AM - 6:00 PM",
            "loan_interest_rate": "3.9%"
        },
        {
            "name": "Morgott Omen bank",
            "location": "101 River Rd, Riverside, TX",
            "overall_score": 50,
            "opening_hours": "9:00 AM - 6:00 PM",
            "loan_interest_rate": "3.9%"
        },
        {
            "name": "Blood Swamp of Mohg, Lord of Blood",
            "location": "101 River Rd, Riverside, TX",
            "overall_score": 75,
            "opening_hours": "9:00 AM - 6:00 PM",
            "loan_interest_rate": "3.9%"
        }
    ]
}
const favList = []

OutputDivs(bigInput.banks)
FavoriteCount()

let search = document.querySelector('#search')
search.addEventListener('input',Filter)
function OutputDivs(list){
    list.forEach(item =>{
        let color = ''
        if(item.overall_score <= 75){
            color = 'blue'
        }else if(item.overall_score <=89){
            color = 'orange'
        }else{
            color = 'green'
        }

        let input = document.querySelector('.input')
        let inputDiv = document.createElement('div')
        inputDiv.className = 'card'
        let name = document.createElement('strong')
        name.textContent = item.name
        name.className = "name"
        name.id = color

        let text = document.createElement('div')
        let clients = document.createElement('h2')
        let randomNum = Math.floor(Math.random() * 5000);
        clients.textContent = 'Clients: '+randomNum.toString()
        let hours = document.createElement('p')
        hours.textContent = 'Opening hours '+item.opening_hours
        let location = document.createElement('p')
        location.textContent = 'Location: '+item.location
        let score = document.createElement('span')
        score.textContent = 'Score: '+item.overall_score
        score.id = color
        let loan = document.createElement('p')
        loan.textContent = 'Loan interest: '+item.loan_interest_rate
        let button = document.createElement('button')
        button.addEventListener('click',nul =>{
            if (favList.includes(item)) {
                favList.splice(item, 1);
            } else {
                favList.push(item);
            }
            FavoriteCount();
        })
        button.textContent = 'Favorite'
        button.id = color+'B'
        text.appendChild(clients)
        text.appendChild(hours)
        text.appendChild(location)
        text.appendChild(score)
        text.appendChild(loan)
        text.appendChild(button)
        inputDiv.appendChild(name)
        inputDiv.appendChild(text)
        input.appendChild(inputDiv)
    })
}
function Filter() {
    let Sinput = document.querySelector('#search');
    let search = Sinput.value.toLowerCase();

    let filteredDivList = bigInput.banks.filter((item) => {
        return item.name.toLowerCase().includes(search);
    });
    let inputf = document.querySelector('.input');
    inputf.innerHTML = "";
    OutputDivs(filteredDivList)
}
function FavoriteCount(){
    let count = 0
    let countElement = document.querySelector('#count')
    favList.forEach( item => count++)
    if(count === 0){
        countElement.textContent = '0'
    }else{
        countElement.textContent = count
    }
    document.querySelector('.heartDiv').appendChild(countElement)
}
let heart = document.querySelector('#checkbox')
heart.addEventListener('click',item =>{
    let hSwitch = document.querySelector('#checkbox')
    let heartOn = document.querySelector('#heartOn')
    let heartOff = document.querySelector('#heartOff')
    if(hSwitch.checked){
        heartOff.style.display = 'none'
        heartOn.style.display = 'block'
        document.querySelector('.input').innerHTML = ''
        OutputDivs(favList)
    }else{
        heartOff.style.display = 'block'
        heartOn.style.display = 'none'
        document.querySelector('.input').innerHTML = ''
        OutputDivs(bigInput.banks)
    }
})



