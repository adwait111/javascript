// lexical scope
function additionA() {
    let a = 10
    let b = 5
    function additionB() {
        let x = 8
        let y = 4
        console.log(a + b + x + y)
        function additionC() {
            let s1 = 10
            let s2 = 5
            console.log(a + b + x + y + s1 + s2)
        }
        additionC()
    }
    additionB()
}
additionA()

// program 2
function additionC() {
    console.log(9 + 9)
    console.log("hello")
    return "bye"
    console.log(9 + 9)
}
let r1 = additionC()
console.log(r1)

// program 3
function additionD(){
    return function(){
        console.log('hello')
    }
}
let e = additionD()
console.log(e)

// program 3
//closures
function additionE(){
    let r = 10 
    let s = 5
    return function(){
        console.log(s+r)
    }
}
let a = additionE()
console.log(a)
a()

// program 4

// function declaration 

function additionF(x,y){
    return x + y
}
let e2 = additionF(12,3)
console.log(e2)

// function expression 

let additionF2 = function(x,y){
    return x + y
}
let e5 = additionF2(12,3)
console.log(e5)

// arrow function 


let additionF3 = (x,y)=>{
    return x + y
}
let e3 = additionF2(12,3)
console.log(e3)

let additionF5 = (x,y)=> x + y
let e4 = additionF5(12,3)
console.log(e4)
