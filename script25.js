// // program 1  object literal
// let adwait = {
//     fn :"Adwait",
//     ln :"chaskar",
//     displayName :function(){
//         console.log(this.fn + this.ln )
//     }
// }
// console.log(adwait.fn)
// console.log(adwait.ln)
// console.log(adwait.displayName)

// // program 2  function constructor
// function Person(fn,ln){
//     this.firstName = fn
//     this.lastName = ln
//     this.displayName = function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let Adwait = new Person("adwait","chaskar")
// console.log(Adwait)
// let adu = new Person("adu","chaskar")
// console.log(adu)


// program 3   
function Person(fn,ln){
    this.firstName = fn
    this.lastName = ln
} 
let amol = new Person("amol","chaskar")
console.log(amol)

// every object has one property __proto__ === Parent.prototype

//console.log(amol__proto__ === Person.prototype)

Person.prototype.displayName  = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.country = "India"
amol.displayName()

let names = ["suvarna","monika","amol"]
console.log(names)
names.pop()
console.log(names instanceof Array)
console.log(amol instanceof Person)

let a = amol.hasOwnProperty("firstName")
let b = amol.hasOwnProperty("lastName")
let c = amol.hasOwnProperty("country")
console.log(a)
console.log(b)
console.log(c)