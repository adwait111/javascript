// // call bind apply

// // object literal
// let suvarna = {
//     firstName : "suvarna",
//     lastName : "chaskar",
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// suvarna.displayName()
// let amol  = {
//     firstName:"amol",
//     lastName:"rahane",
// }
// let displayName2=suvarna.displayName()
// // let displayName2=function(){
// //     console.log(this.firstName + this.lastName)
// // }
// console.log(suvarna.firstName)
// console.log(suvarna.lastName)
// suvarna.displayName()

// program 2
let amolA = {
    firstName:"amolA",
    lastName:"rahaneA"
} 
let amolB = {
    firstName:"amolB",
    lastName:"raohaneB"
} 

let amolC = {
    firstName:"amolC",
    lastName:"rahaneC"
} 

let displayName = function(){
    console.log(this.firstName + this.lastName)
}
let q1 = displayName.bind(amolA)
let q2 = displayName.bind(amolB)
let q3 = displayName.bind(amolC)
q1()
q2()
q3()

let displayName3 = function(greet){
    console.log(this.firstName+ this.lastName)
    console.log(greet)
}

displayName3.call(amolA,"hello")
displayName3.call(amolB,"hello2")
displayName3.call(amolC,"hello3")

displayName3.apply(amolA,["bye"])
displayName3.apply(amolA,["bye2"])
displayName3.apply(amolA,["bye3"])

//function declaration

function displaycolor(cl){
    return cl + ' R'
}
let a = displaycolor("Red")
console.log(a)

//function expression 

let displaycolor1 = function(cl){
    return cl + ' R'
}
let a1 = displaycolor1("Red")
console.log(a1)

// arrow function
let displaycolor2 = (cl)=>{
    return cl + ' R'
}
let a2 = displaycolor2("Red")
console.log(a2)
// without curly braket and return 
let displaycolor3 = (cl)=> cl + ' R'

let a3 = displaycolor3("Red")
console.log(a3)