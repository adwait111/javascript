let firstName = "suvarna"
console.log(firstName)
console.log(typeof firstName)

let city = "pune"
// 0  1  2  3
// p  u  n  e

let a = city.length
console.log(a)

// program 1
// method -- action  ==return -- type

let city2 = "Nashik"
let q1 = city2.toUpperCase()
console.log(q1)

let q2 = city2.toLowerCase()
console.log(q2)

// method changing
let q3 = "hello".toUpperCase().toLowerCase().length
console.log(q3)

// program 2
let city4 = "jaipur"
let q4 = city4.startsWith("j")
console.log(q4)
let q5 = city4.startsWith("ja")
console.log(q5)
let q6 = city4.startsWith("jA")
console.log(q6)

let city5 = "goa"
let q7 = city5.endsWith('a')
console.log(q7)
let q8 = city5.endsWith('oa')
console.log(q8)
let q9 = city5.endsWith('Oa')
console.log(q9)

// program 4 
let city6 = "wardha"
//  0   1   2   3   4   5
//  w   a   r   d   h   a

let q11 = city6.indexOf('a')
console.log(q11)
let q12 = city6.indexOf('A')
console.log(q12)
let q13 = city6.includes("a")
console.log(q13)
let q14 = city6.includes('ar')
console.log(q14)

// program 6
let city7 = " goa "
console.log(city7.length)
console.log(city7.trimStart().length)
console.log(city7.trimEnd().length)
console.log(city7.trim().length)

