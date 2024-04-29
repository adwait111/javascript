/// javascript is sync 

// PROGRAM 1
// function additionA(){
//     console.log("A is execute")
// }
// function additionB(){
//     console.log("B is execute")
// }
// additionA()
// additionB()


// program 2

// function additionA(){
//     setTimeout(function(){
//         console.log("A is execute")
//     },2000)
// }
// function additionB(){
//     console.log("B is execute")
// }
// additionA()
// additionB()

// program 3
// created user ----- get id -----get info
function createdUser() {
    setTimeout(function () {
        console.log('User created')
    }, 3000)
    setTimeout(function () {
        console.log('get id')
    }, 2000)
    setTimeout(function () {
        console.log('get info')
    }, 1000)
}


//createdUser()
function createdUser() {
    setTimeout(function () {
        console.log('User created')
        setTimeout(function () {
            console.log('get id')
            setTimeout(function () {
                console.log('get info')
            }, 1000)
        }, 2000)
    }, 3000)
}
createdUser()