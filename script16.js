let firstName = "suvarna"
let lastName = "chaskar"
let middleName = "prakash"
console.log(firstName)
console.log(lastName)
console.log(middleName)

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof middleName)

// string -----> object ------> properties and method
firstName = "suvarna"
lastName = "chaskar"

// My firstName is suvarna and lastNmae is chaskar
console.log("My firstName is "+ firstName+" my lastName is " + lastName)
// string interpolation
console.log(`My firstName is ${firstName} and my lastName is ${lastName}`)

// program 2

// string + string -----> string 
// number + string -----> string 
// string + number -----> string 
// number + number -----> number

let a = 10
let b = 5
let c = "Hello"

console.log(c+a+b)
   //"Hello" + 10
        // Hello10 +5
            // Hello105

// program  2
let city = "pune"
//   0   1   2    3
//   p   u   n    e

console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

// program 3
let city2 = "chandrapur"
//  0     1    2    3    4     5    6     7    8     9
//  c     h    a    n    d     r     a    p    u      r 
// loop
// object --- properties 

console.log(city2.length)
for(let i = 0; i < city2.length ; i++){
    console.log(city2[i])
}
// reverse
for(let i = city.length - 1;i >= 0; i--){
    console.log(city2[i])
}

// program 4

let city3 = "pune"
let revstr = ""
for(let i =0; i < city3.length; i++){
    revstr = city3[i]+revstr
}
console.log(revstr)