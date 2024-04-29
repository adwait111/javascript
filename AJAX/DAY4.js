// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//     },3000)
//     setTimeout(function(){
//         console.log("get id")
//     },2000)
//     setTimeout(function(){
//         console.log("get info")
//     },1000)
// }
// getInfo()
// this is not right way

//solution is call back hell before Es6 class
function getInfo() {
    setTimeout(function () {
        console.log("user created")
        setTimeout(function () {
            console.log("get id")
            setTimeout(function () {
                console.log("get info")
            }, 1000)
        }, 2000)
    }, 3000)
}
//getInfo()

// problem is tightly coupled ,no reusable and readable 
// solution is promise after Es6 class

function userCreated() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("userCreated")
        }, 3000)
    })
}
function GetId() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("getid")
        }, 2000)
    })
}
function GetInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("getInfo")
        }, 1000)
    })
}
//consuming the promise
// userCreated()
// .then(function(str){
//     console.log(str)
//     return GetId()
// })
// .then(function(str){
//     console.log(str)
//     return GetInfo()
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i always execute")
// })

// with async await
async function CreateUser() {
    let a = await userCreated()
    console.log(a)
    let b = await GetId()
    console.log(b)
    let c = await GetInfo()
    console.log(c)
}
//CreateUser()

//promise combinator

//promise.race()
//proimse.any()
//promise.allSettled()
//promise.all()

// program 1
// all not resolve --- 1st reject state shortcircute
// promise.all()
// Promise.all([
//     Promise.resolve('HELLO'),
//     Promise.reject("bye"),
//     Promise.resolve("Hi")
// ])
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// program 2
// promise.allSettled()
// Promise.allSettled([
//     Promise.resolve('HELLO'),
//     Promise.reject("bye"),
//     Promise.resolve("Hi")
// ])
// .then(function(arr){
//     console.log(arr)
// })
// // [
// //     { status: 'fulfilled', value: 'HELLO' },
// //     { status: 'rejected', reason: 'bye' },
// //     { status: 'fulfilled', value: 'Hi' }
// //   ]

// program 3
// promise.race()
// 
function proOne() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("hello")
        }, 3000)
    })
}
function proTwo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("hi")
        }, 2000)
    })
}

// Promise.race([
//     proOne(),
//     proTwo()
// ])
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// program 4
// promise.any()
// 1st resolve state shortcircuit 
Promise.any([
    Promise.resolve('HELLO'),
    Promise.reject("bye"),
    Promise.resolve("Hi")
])
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})

