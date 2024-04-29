let buttonA = document.querySelector('#one')
let input = document.querySelector('input')
let ullist = document.querySelector('ul')

buttonA.addEventListener('click', function () {
    let text = input.value
    let newLi = document.createElement('li')
    newLi.textContent = text
    createButtons(newLi)
    ullist.append(newLi)
    input.value = " "
})

ullist.addEventListener('click', function (event) {
    if (event.target.className === "remove") {
        let li = event.target.parentElement
        let ul = li.parentElement
        ul.removeChild(li)
    }
    else if (event.target.className === "up") {
        let li = event.target.parentElement
        let ul = li.parentElement
        let prev = li.previousElementSibling
        if (prev) {
            ul.insertBefore(li, prev)
        }
    }
    else if (event.target.className === "down") {
        let li = event.target.parentElement
        let ul = li.parentElement
        let next = li.nextElementSibling
        if (next) {
            ul.insertBefore(next,li)
        }
    }
})

function createButtons(li) {
    let r = document.createElement('button')
    r.textContent = "Remove"
    r.classList.add('button')
    li.appendChild(r)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)

    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.appendChild(u)
}