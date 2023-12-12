let date = new Date();
const timeInUTC = new Date().toUTCString();
const comments = [
    {
        name: "Karel",
        date:  new Date(timeInUTC).toLocaleString(),
        text: "toto je krasny komentar",
        logo: 'https://static.thenounproject.com/png/5034901-200.png'
    },
    {
        name: "Petr",
        date:  new Date(timeInUTC).toLocaleString(),
        text: "toto je krasny komentar, urcite nekopiruju toho nademnou",
        logo: 'https://static.thenounproject.com/png/5034901-200.png'
    },
    {
        name: "Adam",
        date: new Date(timeInUTC).toLocaleString(),
        text: "toto je krasny komentar, urcite nekopiruju toho nademnou",
        logo: 'https://static.thenounproject.com/png/5034901-200.png'
    },
    {
        name: "Bohumil",
        date: new Date(timeInUTC).toLocaleString(),
        text: "toto je krasny komentar, urcite nekopiruju toho nademnou",
        logo: 'https://static.thenounproject.com/png/5034901-200.png'
    },
];

function CommentBuilder(object,input){
    let div = document.createElement('div')
    div.className = 'comment'

    let user = document.createElement('div')
    user.className = 'user'
    let divUser = document.createElement('div')
    divUser.className = 'userData'

    let name = document.createElement('strong')
    name.textContent = object.name

    let date = document.createElement('span')
    date.textContent = object.date

    let img = document.createElement('img')
    img.src = object.logo

    user.appendChild(img)
    user.appendChild(name)
    divUser.appendChild(user)
    divUser.appendChild(date)
    let comment = document.createElement('p')
    comment.textContent = object.text
    div.appendChild(divUser)
    div.appendChild(comment)
    input.appendChild(div)
}
const div = document.querySelector('#comments')
for (let i = 0; i < comments.length; i++) {
    CommentBuilder(comments[i],div)
}
function DeleteComment(){
    let deleteC = document.querySelector('#comments').lastChild
    deleteC.remove()
}

let button = document.querySelector('#delete')
button.addEventListener('click', DeleteComment)

