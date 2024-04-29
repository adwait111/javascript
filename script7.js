// define a array
//              0         1         2       3
let names = ["suvarna","monika","pallavi","ram"]
console.log(names)

// array stoare value by index
console.log(names[0])
console.log(names[1])

// calculate length of array
let q1 = names.length
console.log(q1)

for(let i = 0; i < names.length;i++){
    //console.log(i)
    console.log(names[i])
}

// program 2
let animal = ["tiger","dog","cat","lion"]
console.log(animal[0])
console.log(animal[1])

for(let i = 0 ; i < animal.length ; i++){
    console.log(animal[i])
}

// program 3
// length -1 is alwys last index

let fruits = ["apple","banana","chikoo","mango","grepes"]
console.log(fruits)

for(let i = fruits.length-1 ; i >= 0; i--){
    //console.log(i)
    console.log(fruits[i])
}

let flower = ["lily","rose","jasmine","sunflower"]
for(let i = 0 ; i < flower.length ; i++){
    //console.log(i)
    if(flower[i] == "jasmine"){
        break
    }
    console.log(flower[i])
}

// program 5
let country = ["india","srilanka","bangladesh","nepal","pakistan"]
console.log(country)
// let q = 0
// while(q < country.length){
//     console.log(country[q])
//     q = q +1
// }
let q2 = 0
while(q2 <= country.length){
    
    if(country[q2] == "bangladesh"){
        q2++
        continue
    }
    console.log(country[q2])
    q2 = q2 +1
}