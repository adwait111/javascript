// let names = ["suvarna","monika","ram","sham"]
// // create /Add
// names.push("sita")
// console.log(names)

// // retrive 
// console.log(names[0])

// // update 
// names[1] = "mona"
// console.log(names)

// // delete 
// names.pop()
// console.log(names)

//let info = ["Suvarna","Rahane",27,36]

// let info = {
//    // key.value = > property 
//    firstName :"Suvarna",
//    lastName :"Chaskar",
//    RollNo :45,
//    Age : 27
// }

// CRUD
// 1 . Retrive/ fetch 
// // dot notation
// console.log(info.lastName)
// console.log(info.Age)

// // bracket notation 
// console.log(info["firstName"])
// console.log(info["RollNo"])

// 2 . create / add
// let info = {
//     // key.value = > property 
//     firstName :"Suvarna",
//     lastName :"Chaskar",
//     RollNo :45,
//     Age : 27
//  }
//  // dot notation 
// info.city = "Pune"
// console.log(info)

// // braket notation
// info["language"] = "marathi"
// console.log(info)

// 3 .update 
// dot notation 
// info.firstName = "sona"
// console.log(info)

// // braket notation
// info['age'] = 28
// console.log(info)

//delet
//dot notation
// delete info.age
// console.log(info)

// //bracket notation
// delete info['firstName']
// console.log(info)

let info = {
    // key.value = > property 
    firstName :"Suvarna",
    lastName :"Chaskar",
    RollNo :45,
    Age : 27
 }
// for(let key in info){
//     console.log(key)
// }

// retrive all keys
//objectName.key=value
//objectname['key']=value

// for(let key in info){
//     console.log(info.key)

// for(let key in info){
//     console.log(info[key])
// }

for(let key in info){
    console.log(key,info[key])
}