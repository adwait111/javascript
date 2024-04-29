// let names = ["suvarna","monika","poorva","ram"]

// // retrive
// console.log(names[0])

// // update
// names[0] = "sona" 
// console.log(names)

// // add
// names.push("sona")
// names.unshift("mona")
// console.log(names)

// // delete
// names.pop()
// names.shift()
// console.log(names)
// for(let i = 0; i < names.length; i ++){
//     console.log(i)
//     console.log(names[i])
// }

let info = {
    // key.value = > property 
    // property:value ------> item
    firstName :"Suvarna",
    lastName :"Chaskar",
    RollNo :45,
    Age : 27
 }
 console.log(info)
 //object does not stores the value by index ?
 // can object stores the duplicate element ?
 //console.log(info[0])// undefind

 
// C - create   R - retrive   U - Update  D - Delete

let info2 = {
    firstName :"Suvarna",
    lastName :"Chaskar",
    RollNo :45,
    Age : 27
 }
console.log(info2)

// retrive (dot notation and bracket notation)
console.log(info2.firstName)
console.log(info2['firstName'])
// update (dot notation and bracket notation)
info2.firstName = "sona"
info2["lastName"] = "rahane"
console.log(info2)
// add (dot notation and bracket notation)
info2.city = "pune"
info2["lang"] = "marathi"
console.log(info2)
// delete (dot notation and bracket notation)
delete info2.firstName
delete info2['lastName']
console.log(info2)

let vehicle = {
    color:"red",
    type:"sedane",
    regNo:123
}

for(let key in vehicle){
    //console.log(key) // key
    console.log(key,vehicle[key]) // key and value
}