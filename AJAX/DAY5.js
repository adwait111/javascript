// Promise.all()
// Promise.race()
// Promise.allSettled()
// Promise.any()

// two way 1> .then 2>async await

// promise.all()
// Promise.all([
//     Promise.all("hello"),
//     Promise.resolve("hi"),
//     Promise.resolve("HELLO"),
//     Promise.reject("bye")
// ])
//     .then(function (a) {
//         console.log(a)
//     })
//     .catch(function (str) {
//         console.log(str)
//     })

// Promise.allSettled()
// Promise.allSettled([
//     Promise.resolve("hello"),
//     Promise.resolve("hi"),
//     Promise.resolve("bye"),
//     Promise.reject("bye bye")
// ])
// .then(function(a){
//     console.log(a)
// })

// promise.race()

// function proOne(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             reject("hello")
//         },3000)
//     })
// }

// function proTwo(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             reject("bye")
//         },2000)
//     })
// }

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


//Promise.any()

// Promise.any([
//     Promise.reject("bye"),
//     Promise.reject("bye"),
//     Promise.resolve("hello"),
//     Promise.resolve("hello hello")
// ])
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

