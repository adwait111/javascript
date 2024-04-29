// array 
let a = [11,22,33]
console.log(typeof a)

let flowers = ["lily","jasmin","rose"]
for(let i = 0 ; i < flowers.length; i++){
    //console.log(i)
    console.log(flowers[i])
}
// problem 1

// for loop
let birthYear = [1996,1998,1999,2000]
ages = []
for(let i = 0;i<birthYear.length;i++){
   let x = 2024 - birthYear[i]
   ages.push(x)
}
console.log(ages)

//Map()
//action => perform action with each element
//return  => array

let age = birthYear.map(function(el,index,array){
    return 2024 - el
})
console.log(age)

// program 2
let marks = [22, 66, 88, 50, 24, 90, 87, 12, 30]
let above60= []
for(let i = 0;i < marks.length;i++){
    if(marks[i] > 60){
        above60.push(marks[i])
    }
}
console.log(above60)

//filter()
//action => compare ele based on condition
//return => array
let above50 = marks.filter(function(el,index,array){
    return el > 50
})
console.log(above50)
// problem 3

let score = [12,13,6,8,9]
let sum = 0
for(let i = 0; i < score.length;i++){
    sum = sum + score[i]
}
console.log(sum)
//reduced()
//action => return single value
let result=score.reduce(function (acc, el, index, arr) {
    return acc + el
}, 0)
console.log(result)


//Problem 4

let student = ["Mayuri", "sai", "prashant", "sathish"]

//Hello Mayuri
//Hello sai

// for (let i = 0; i < student.length; i++) {
//     console.log("Hello " + student[i])
// }

//forEach()
student.forEach(function(el,index,arr){
   console.log('Hello '+el)
})