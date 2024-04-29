function getUserID(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        //console.log(response.data)
        return response.data
    })
}
function raceP(){
    new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve ("Hello")
        },1)
    })
}
function renderHtml(element){
    document.write(`<h1>${element.first_name}<h1/>`)
    document.write(`<h1>${element.last_name}<h1/>`)
    document.write(`<h1>${element.email}<h1/>`)
    document.write(`<h1>${element.id}<h1/>`)
    document.write(`<img src = ${element.avatar}>`)
}
// progarm 1
// Promise.all([
//     getUserID(1),
//     getUserID(2),
//     getUserID(3)
// ])
// .then(function(users){
//     console.log(users) 
//     users.forEach(function(element){
//         renderHtml(element)
//     })
// })
// .catch(function(err){
//     console.log(err)
// })

// program 2

// Promise.allSettled()

// Promise.allSettled([
//     getUserID(1),
//     getUserID(2),
//     getUserID(33)
// ])
// .then(function(arr){
//     console.log(arr)
// })

// program 3

// Promise.race()

// Promise.race([
//     getUserID(1),
//     raceP()
// ])
// .then(function(str){
//     console.log(str)
// })


// Promise.any()
Promise.any([
    Promise.reject("bye"),
    raceP(),
    getUserID(1),
])
.then(function(str){
    console.log(str)
})