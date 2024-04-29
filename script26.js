// object litral
let suvarna = {
    firstName: "suavarna",
    lastName: "chaskar",
    displayName: function () {
        console.log(this.firstName + this.lastName)
    }
}
console.log(suvarna.firstName)
console.log(suvarna.lastName)
suvarna.displayName()

// function constructor 
function Person(fn, ln) {
    this.firstName = fn
    this.lastName = ln
    this.displayName = function () {
        console.log(this.firstName + this.lastName)
    }
}
let amol = new Person("amol", "rahane")
let monika = new Person("monika", "rahane")
console.log(amol)
console.log(monika)

// every object has __proto__ === Parent.prototype
console.log(amol.__proto__ === Person.prototype)
console.log(monika.__proto__ === Person.prototype)

Person.prototype.displayName = function () {
    console.log(this.firstName + this.lastName)
}
Person.prototype.city = "pune"
amol.displayName()
monika.displayName()

console.log(amol instanceof Person)
console.log(monika instanceof Person)
console.log(amol.hasOwnProperty('firstName'))
console.log(amol.hasOwnProperty('lastName'))
console.log(amol.city)
console.log(monika.city)

let names = ["suvarna", "sara"]
console.log(names)
console.log(names.__proto__ === Array.prototype)
names.pop()

// Es6 class 
class PersonA{
    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }

}
let rahul = new PersonA("rahul","roy")
let soniya = new PersonA("soniya","bansal")
console.log(rahul)
console.log(soniya)
rahul.displayName()
soniya.displayName()

// Object.create()
let info = {
    init:function(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    },
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let saraE = Object.create(info)
console.log(saraE)
saraE.init("SARA","TENDULKAR")
saraE.displayName()
console.log(saraE)