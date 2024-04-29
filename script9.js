//progarm 1
let birthYear = [1989,1990,1991,1992]
let ages = []
for(let i = 0; i ,i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    let x = 2024 - birthYear[i]
    ages.push(x)
}
console.log(ages)
// program 2
let marks = [11,66,55,77,33,44,22,88]
let above60 = []
for(let i = 0;i<marks.length;i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i] >60){
        above60.push(marks[i])
    }
}
console.log(above60)

// program 3
let numbers = [11,22,33]
total = 0
for(let i = 0; i < numbers.length;i++){
    // console.log(i)
    // console.log(numbers[i])
    total = total + numbers[i]
}
console.log(total)

// program 4
let cities = ["pune","mumbai","nashik","kolkata"]
for(let i = 0 ; i < cities.length; i++){
    //console.log(i)
    console.log("Welcome "+ cities[i])
}