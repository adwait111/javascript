
let ulList = document.querySelector('ul')
console.log(ulList)

let inputText = document.querySelector('input')
console.log(inputText)

let buttonA = document.querySelector('button')
console.log(buttonA)

buttonA.addEventListener('click',function(){
    let txt = inputText.value
    let newEle = document.createElement('li') 
    newEle.textContent = txt 
    ulList.appendChild(newEle)
    inputText.value = ""
    
})