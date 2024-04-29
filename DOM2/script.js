//  <h1  id = "one" class ="two" name = "nm">hello</h1>

// tagName
let byTagName = document.querySelector('h1')
console.log(byTagName)
// id 
let byid = document.querySelector('#one')
console.log(byid)
// class
let byClass = document.querySelector('.two')
console.log(byClass)
// attribute
// tagName[attribute="value"]
let byAttribute = document.querySelector('h1[id="one"]')
console.log(byAttribute)


byAttribute.addEventListener('click',function(){
    byAttribute.textContent = "bye"
    byAttribute.style.color = "blue"
    byAttribute.style.backgroundColor = "yellow"

})
