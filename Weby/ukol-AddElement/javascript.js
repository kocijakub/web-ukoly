let root = document.querySelector('div')
let table = document.createElement('table');

for (let i = 0; i < 5; i++) {
    let row = document.createElement('tr')
    for (let j = 0; j < 3; j++) {
        let data =  document.createElement('td')
        let text = document.createTextNode('*')
        data.appendChild(text)
        row.appendChild(data)
    }
    table.appendChild(row)
}
root.appendChild(table)