// Array method

//push - element add in last -- return new length of array
let names = ["suvarna","monika","aechana","kaveri"]
let q1 = names.push("sona")
console.log(q1)
console.log(names)

// unshift - element add in start - return new length of array
let q2 = names.unshift("mona")
console.log(q2)
console.log(names)

// pop()- remove last element - return (removed element)
let fruits = ["mango","banana","apple","cherry"]
let q3 = fruits.pop()
console.log(q3)
console.log(fruits)

// shift() - remove first element - return (removed element)
let q4 = fruits.shift()
console.log(q4)
console.log(fruits)

// indexOf() -index of element return (index ) 
let animals = ["tiger","lion","bear","cat"]
let q5 = animals.indexOf("lion")
console.log(q5)

// includes() - find  element in array - return (boolean value)
let city = ["banglore","kolkata","chennai","nagpur"]
let q6 = city.includes("chennai")
console.log(q6)

// reverse()- reverse of array - (return reverse array)
let q7 = city.reverse()
console.log(q7)
console.log(city)

// at() - find element - return element
//               0          1         2           3
let country = ["india","pakistan","bangladesh","nepal"]
let q8 = country.at(2)
console.log(q8)

// concat()- join array -- return combine array
let a = [11,22,33]
let b = [44,55,66]

let q9 = a.concat(b)
console.log(q9)
// no chnage main array
console.log(a)
console.log(b)

// join () -- join string -  return(suvarna-chaskar-9527335021)
let info = ["suvarna","chaskar",9527335021]
let q10 = info.join("-")
console.log(q10)