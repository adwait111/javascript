// program 1
// variable = entity maintain// variable is like container
let a = 10
console.log(a)
a = 100
console.log(a)
// let is updated value and not re-decleared
// let is block scope

const h = 1000
console.log(h)
//h = 100// assignment to constant variable
console.log(h)
// constant are not updated valueand not re-decleared

// program 2

let a1 = 10
let b1 = 5
console.log(a1+b1)
console.log(a1-b1)
console.log(a1*b1)
console.log(a1/b1)
console.log(a1%b1)

let x = 8
let y = 4

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
//10 pairs ---50 lines
// problem is repeated code 
// solution is function

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(4,2)
Calculator(14,7)
//function - keyword
//calculator - function name
//()- parrnthesis
// x,y - parameter
// {} -- blocks
// {  --  } -- statments 
//calcultor(23,4)
//23,4 -- arguments
