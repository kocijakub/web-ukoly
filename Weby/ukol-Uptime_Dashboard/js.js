let scoreDiv = document.querySelector('#scoreDiv')
let scores = []
let status = document.createElement('p')
status.className = 'status'
let lastDown = document.createElement('p')
let average = document.createElement('p')

for (let i = 0; i < 15; i++) {
    let element = document.createElement('div')
    scores.push(element)
}
ChangeScores()
function ChangeScores(){
    let text
    let dayOfError = 0;
    let uptimeCount = 0;
    scores.forEach((item, index)=>{
        let randomNum = Math.floor(Math.random() * 11);
        switch(randomNum) {
            case 1, 2, 3, 4:
                item.className = 'yellow'
                text = 'Warning'
                uptimeCount++
                break;
            case 5, 6: item.className = 'red'
                text = 'Error'
                dayOfError = index+1
                break;
            default: item.className = 'green'
                text = 'Active'
                uptimeCount++
        }
    })
    if(dayOfError === 0){
        lastDown.textContent = 'never'
    }else if(scores.length-dayOfError === 1){
        lastDown.textContent = 1+' day ago'
    }else{
        lastDown.textContent = scores.length-dayOfError+' days ago'
    }
    status.textContent = text
    status.id = text
    average.textContent = (100 / scores.length * uptimeCount).toFixed(2)+' %'
}
scores.forEach(item =>{
    scoreDiv.appendChild(item)
})
document.querySelector('#uptime').appendChild(status)
document.querySelector('#lastDown').appendChild(lastDown)
document.querySelector('#average').appendChild(average)
function Alert(){
    let alertDiv = document.createElement('div')
    let text = document.createElement('p')
    let alex = document.createElement('img')
    alex.src = 'exclamation_mark.png'
    text.textContent = 'Alert: This is a default visible toast!'
    alertDiv.className = 'alert'
    alertDiv.appendChild(alex)
    alertDiv.appendChild(text)
    document.querySelector('body').appendChild(alertDiv)
    setTimeout(item => document.querySelector('.alert').remove(),2000)
}
document.querySelector('#refresh').addEventListener('click',ChangeScores)
document.querySelector('#showAlert').addEventListener('click',Alert)
