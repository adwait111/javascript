// inheritance 
// program 1
class Student {
    firstName = "amol"
    lastName = "rahane"
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class Teacher extends Student {
    salary = 1000
    displaySalary(){
        console.log(this.salary)
    }
}
AmolR = new Teacher()
console.log(AmolR.firstName)
console.log(AmolR.lastName)
console.log(AmolR.salary)
AmolR.displayName()
AmolR.displaySalary()

// program 2
class StudentA {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName  = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class TeacherA extends StudentA {
    salary = 1000
    displaySalary(){
        console.log(this.salary)
    }
}

let Suvarna = new TeacherA("Suvarna","chaskar")
console.log(Suvarna.firstName)
console.log(Suvarna.lastName)
console.log(Suvarna.salary)
Suvarna.displayName()
Suvarna.displaySalary()

// program 3
class StudentB {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class TeacherB extends StudentA {
    constructor(fn,ln,salary){
        super(fn,ln)
        this.salary = salary
    }

    displaySalary(){
        console.log(this.salary)
    }
}
let Archana = new TeacherB("Archana","walve",90000)
console.log(Archana.firstName)
console.log(Archana.lastName)
console.log(Archana.salary)

Archana.displaySalary()
Archana.displayName()

// Program 4
class StudentC {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln 
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class TeacherC extends StudentC {

    constructor(fn,ln,sl){
        super(fn,ln)
        this.salary = sl
    }

    displaySalary(){
        console.log(this.salary)
    }

}

class Professor extends TeacherC {

    constructor(fn,ln,sl,sp){
        super(fn,ln,sl)
        this.specialization = sp
    }

    displaySpec(){
        console.log(this.specialization)
    }

}
let prof = new Professor("suvarna","chasakr",65,96)
console.log(prof.firstName)
console.log(prof.lastName)
console.log(prof.salary)
console.log(prof.specialization)
prof.displayName()
prof.displaySalary()
prof.displaySpec()