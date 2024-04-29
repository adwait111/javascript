// map()
let birthYear = [1996,1997,1998,1999]
let q1 = birthYear.map(function(el,index,array){
    return 2024-el
})
console.log(q1)

let number = [11,22,33,44,55]
let q2 = number.map(function(el,index,array){
    return el+10
})
console.log(q2)

// filter ()

let marks = [56,25,63,95,68,66]
let q3 = marks.filter(function(el,index,array){
    return el > 50
})
console.log(q3)

// reduce()

let numbers = [11,22,33,44]
let q4 = numbers.reduce(function(acc,el,index,array){
    return el + acc
},0)
console.log(q4)

// forEach()
let cities = ["pune","mumbai","nashik","kolkata"]
let q5 = cities.forEach(function(el,index,array){
    console.log("welcome " + el)
})

// find()
let numbersA = [33,55,66,22,33,66]
let q6 = numbersA.filter(function(el,index,array){
    return el > 40
})
console.log(q6)
let q7 = numbersA.find(function(el,index,array){
    return el > 40
})
console.log(q7)

// findindex()
let q8 = numbersA.findIndex(function(el,index,array){
    return el > 40
})
console.log(q8)

// every ()
let numbersB = [11,2,33,55,22,44,66]
let q9 = numbersB.every(function(el,index,array){
    return el > 10
})
console.log(q9)

// some()
let numbersV = [11,2,33,11,22,33,44,55,66]
let q10  = numbersV.some(function(el,index,arr){
    return el > 500
})
console.log(q10)

//slice()
//           0   1   2   3  4    5   6   7   8   9
let nums = [111,222,333,444,555,666,777,888,999,1000]
//          -10 -9  -8  -7  -6   -5 -4  -3  -2    -1
//nums.slice(startIndex, endIndex (not included))
console.log(nums.slice(3))
console.log(nums.slice(3,6))
console.log(nums.slice(-10,6))
console.log(nums.slice(1,-3))
console.log(nums.slice(-3))
console.log(nums.slice(-1,-3))