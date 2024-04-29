// let suvarna = {
//     firstName :"suvarna",
//     lastName : "chaskar",
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let amol = {
//     firstName:"amol",
//     lastName:"rahane"
// }
// let displayName2 = suvarna.displayName
// // let displayName2  = function(){
// //     console.log(this.firstName + this.lastName)
// // }
// displayName2()

// // bind ()

// let a = displayName2.bind(amol)
// q()

// program 2


// let Suvarna = {
//     firstName : "suvarna",
//     lastName : "chaskar"
// }

// let monika = {
//     firstName:"monika",
//     lastName:"gavhane"

// }
// let sonal = {
//     firstName:"sonal",
//     lastName:"more"
// }

// let displayName3 = function(){
//     console.log(this.firstName  + this.lastName)
// }

// displayName3.bind(Suvarna )()
// displayName3.bind(monika )()
// displayName3.bind(sonal )()

// program 2

let Suvarna = {
    firstName : "suvarna",
    lastName : "chaskar"
}

let monika = {
    firstName:"monika",
    lastName:"gavhane"

}
let sonal = {
    firstName:"sonal",
    lastName:"more"
}
let displayName4 = function(){
    console.log(this.firstName + this.lastName)
    
}
displayName4.call(Suvarna,"Hello")
displayName4.call(monika,"Hello")
displayName4.call(sonal,"Hello")

// apply
displayName4.apply(Suvarna,["Bye","Hi","Byee","Good Bye","Takecare"])

