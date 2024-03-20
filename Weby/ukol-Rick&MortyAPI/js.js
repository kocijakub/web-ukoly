let url = "https://rickandmortyapi.com/api/character/?page=1"
let prev = null;
let htmlDiv = document.querySelector("#characters")

let alive = document.querySelector("#Alive")
let dead = document.querySelector("#Dead")
let unknown = document.querySelector("#Unknown")

alive.addEventListener("click", async () =>{
    await getChars()
})
dead.addEventListener("click", async () =>{
    await getChars()
})
unknown.addEventListener("click", async () =>{
    await getChars()
})


async function getData(){
    const source = await fetch(url)
    if(!source.ok){
        console.log("fetch error")
    }
    return await source.json()
}
async function getChars(){
    const data = await getData()

    htmlDiv.innerHTML = null
    data.results.map(item =>{
        let div = document.createElement("div")
        div.className = "card"

        let textDiv = document.createElement("div")
        textDiv.className = "textDiv"

        let textDivL = document.createElement("div")

        let name = document.createElement("b")
        name.className = "name"
        name.textContent = item.name

        let species = document.createElement("p")
        species.className = "species"
        species.textContent = item.species

        let img = document.createElement("img")
        img.src = item.image

        let status = document.createElement("p")
        status.textContent = "Status: "+item.status

        textDivL.appendChild(name)
        textDivL.appendChild(species)
        textDiv.appendChild(textDivL)
        textDiv.appendChild(status)
        div.appendChild(img)
        div.appendChild(textDiv)

        if((!alive.checked && !dead.checked && !unknown.checked) || (alive.checked && dead.checked && unknown.checked)){
            htmlDiv.appendChild(div)
        }

        if(alive.checked){
            if(item.status === "Alive") htmlDiv.appendChild(div)
        }
        if(dead.checked){
            if(item.status === "Dead") htmlDiv.appendChild(div)
        }
        if(unknown.checked){
            if(item.status === "unknown") htmlDiv.appendChild(div)
        }
    })
}
getChars()
document.querySelector("#next").addEventListener('click',async () => {
    let data = await getData()
    prev = url
    url = data.info.next
    getChars()
})

document.querySelector("#previous").addEventListener('click',async () =>{
    if(prev !== null){
        let data = await getData()
        url = prev
        prev = data.info.prev
        getChars()
    }
})
