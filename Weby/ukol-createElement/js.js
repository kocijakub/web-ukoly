function showInnerText() {
    const element = document.getElementById('testElement');
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'innerText: ' + element.innerText;
}

function showTextContent() {
    const element = document.getElementById('testElement');
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'textContent: ' + element.textContent;
}

showInnerText();
showTextContent();

const button = document.querySelector('#button')
const removeButton = document.querySelector('#removeButton')

function removeElement(){
    let deleteChild = document.querySelector('#container').firstChild
    deleteChild.remove()
}

let container = document.querySelector('#container')
function funkcePoKliknuti() {
    let objekt = document.createElement('p')
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    objekt.style.backgroundColor = '#'+randomColor
    objekt.textContent = 'Nový Element 🌈'
    container.appendChild(objekt)
}
removeButton.addEventListener('click', removeElement)
button.addEventListener("click", funkcePoKliknuti)
