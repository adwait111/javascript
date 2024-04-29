// object literal
// let Suvarna = {
//     firstName : "suvarna",
//     lastName : "chaskar",
//     age :  28 ,
//     rollNo : 36
// }

// let Amol = {
//     firstName : "monika",
//     lastName : "gavhane",
//     age :  26 ,
//     rollNo : 35
// }

// Es6 class 
// class Person {
//     firstName = "suvarna"
//     lastName = "chaskar"
//     age = 28
//     rollNo = 36
//     display_name() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// let Suvarna = new Person()
// let Amol = new Person()

// console.log(Suvarna.firstName)
// console.log(Suvarna.lastName)
// console.log(Suvarna.age)
// console.log(Suvarna.rollNo)
// console.log(Suvarna)
// Suvarna.display_name()
// console.log(Amol)

// Suvarna.firstName ="amol"
// Suvarna.lastName ="rao"
// Suvarna.age = 23
// Suvarna.rollNo = 55
// console.log(Suvarna)

// program 3
// Es6 class with constuctor
// class Person {
//     constructor(fn,ln,age,rollNo){
//         this.firstName = fn
//         this.lastName = ln
//         this.rollNo =rollNo 
//         this.age = age

//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let Sona = new Person("sona","rahane",28,36)
// let mona = new Person("mona","rahane",26,39)
// Sona.city = "nashik"
// console.log(Sona)

// // program 4
// // Set and Get method

// class PersonC {

//     setFirstName(fn){
//         this.firstName = fn 
//     }

//     setLastName(ln){
//         this.lastName = ln
//     }
//     getFirstName(){
//         return this.firstName
//     }
//     getLastName(){
//         return this.lastName

//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let Nikita = new PersonC()
// console.log(Nikita)
// Nikita.setFirstName("Nikita")
// Nikita.setLastName("walve")
// let a = Nikita.getFirstName()
// let b = Nikita.getLastName()
// console.log(a)
// console.log(b)

// let Archana = new PersonC()
// Archana.setFirstName("Archana")
// Archana.setLastName("randhe")

// program 5
// set and get key word
let info = {
    first_name: "suvarna",
    last_name: "chaskar"
}
info.first_name = "sona"
info.city = "pune"

class PersonE {
    set fn(fn) {
        this.first_name = fn
    }
    set ln(ln){
        this.last_name = ln
    }

    get fn(){
        return this.fn
    }
    get ln(){
        return this.ln
    }
}

let suvarna = new PersonE()
suvarna.fn = "suvarna"
suvarna.ln = "chaskar"
