
async function getData(data){
    const source = await fetch(data)
    if(!source.ok){
        console.log("fetch error")
    }
    return await source.json()
}
const div = document.querySelector("#cards")
async function vypis(){
    div.innerHTML = ""
    const data = await getData("https://wjs-api.vercel.app/api/books")
    console.log(data)
    data.forEach( item =>{
        let name = document.createElement("button")
        name.addEventListener("click",() =>{
            console.log("uds")
            showCard("https://wjs-api.vercel.app/api/books/"+item._id)
        })
        console.log(item._id)
        name.textContent = item.title
        div.appendChild(name)
    })
}
async function showCard(datta){
    div.innerHTML = ""
    const data = await getData(datta)
    let card = document.createElement("h1")
    card.textContent = data.title
    let button = document.createElement("button")
    button.textContent = "head back"
    button.addEventListener("click",vypis)
    card.appendChild(button)
    div.appendChild(card)
}
vypis()
