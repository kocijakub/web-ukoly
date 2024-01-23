let todos = [
    {
        title:'Název',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolores doloribus ipsa nemo ratione vel.',
        isDone: true
    },
    {
        title:'Název',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolores doloribus ipsa nemo ratione vel.',
        isDone: false
    },
    {
        title:'Název',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolores doloribus ipsa nemo ratione vel.',
        isDone: false
    },
    {
        title:'Název',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolores doloribus ipsa nemo ratione vel.',
        isDone: true
    },
    {
        title:'Název',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolores doloribus ipsa nemo ratione vel.',
        isDone: false
    },
]
todos.forEach(item =>{
    let div = document.createElement('div')
    div.className = 'task'
    let name = document.createElement('h2')
    name.textContent = item.title
    name.className = 'title'
    name.style = 'font-size: 30px, font-weight: bold'
    let info = document.createElement('p')
    info.textContent = item.text
    item.isDone ? div.id = 'done' : div.id = 'new'
    div.appendChild(name)
    div.appendChild(info)
    document.querySelector('.tasks').appendChild(div)
})
console.log(FindNewTask())
console.log(AllTitles())
function FindNewTask(){
    let task = document.querySelector('#new')
    return {
        name: task.querySelector('h2').textContent,
        info: task.querySelector('p').textContent,
        isDone: task.id
    }
}
//druhy ukol
function AllTitles(){
    return todos.map(item =>{
        return item.title
    })
}