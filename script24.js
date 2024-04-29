// object literal
let Suvarna = {
    firstName :"suvarna",
    lastName :"chaskar",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
console.log(Suvarna.firstName)
console.log(Suvarna.lastName)
Suvarna.displayName()

// program 2
// function constructor
function Person(fn,ln){
    this.firstName = fn
    this.lastName = ln
    this.displayName = function(){
        console.log(this.firstName + this.lastName)
    }
}
let Suvrana =  new Person("suvrana","chaskar")
console.log(Suvrana)
Suvrana.displayName()

function Vehicle(color,type){
    this.color = color
    this.type = type
    this.displayColor = function(){
        console.log(this.color + this.type)
    }
}
let audi = new Vehicle("black","sedane")
let BMW = new Vehicle("white","SUV")
console.log(audi)
console.log(BMW)
BMW.displayColor()

// program 3
// Es6
class PersonC {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class VehicleC {
    constructor(color,type){

        this.color = color
        this.type = type
    }

    displayColor(){
        console.log(this.color + this.lastName)
    }
}
let SuvranaC =  new Person("suvrana","chaskar")
let audiA = new Vehicle("black","sedane")

// PROGRAM 4
// Object.create()
let AUDI = Object.create({})
console.log(AUDI)
AUDI.color = "red"
AUDI.type = "sedane"
AUDI.displayColor = function(){
    console.log(this.color)
}
console.log(AUDI)