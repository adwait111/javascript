// program1
let names = ["suvarna","monika","amol","nikita"]
let n1 = names[0]
let n2 = names[1]
let n3 = names[2]
let n4 = names[3]

console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)

// program 2
names = ["suvarna","monika","amol","nikita"]
let [s1,s2,s3,s4] = names
console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)

// program 3
let fruits = ["apple","banana","grapes"]
let [f1,,f2] = fruits
console.log(f1)
console.log(f2)

// program 4
let states = [
    ["nagpur","wardha"],
    ["jaipur","udaipur"],
    ["bhopal","indore"]
]

let [[c11,c12],[c13,c14],[c15,c16]]  = states
console.log(c11)
console.log(c15)

// program 5

let info = {
    firstName:"suvarna",
    lastName:"chaskar"
}

let {firstName,lastName} = info
console.log(firstName)
console.log(lastName)

// program 6 

let vehicle = {
    type:"sedane",
    model:"suv"
}

let {type:ty,model:md} = vehicle
console.log(ty)
console.log(md)

// program 7
let info2 = {
    fullName:"suvarna rahane",
    parent:{
        mother:"mangal rahane",
        father:"ashok rahane"
    }
}

let {fullName:fn,parent:{mother:mr,father:fr}} = info2
console.log(fn)
console.log(mr)
console.log(fr)

// program 8 

let students = [
    {
        firstName:"suvarna",
        lastName:"chaskar"
    },
    {
        firstName:"gitanjali",
        lastName:"chopde"
    }
]
let [{firstName:f11,lastName:l11},{firstName:f12,lastName:l12}] = students
console.log(f11)
console.log(f12)
console.log(l11)
console.log(l12)

// program 9
let info3 = {
    fullName:"Urmila dange",
    address:"kopergoan",
    skills:["django","python"]
}
let {fullName:fn2,address:ad2,skills:[h1,h2]} = info3
console.log(fn2)
console.log(ad2)
console.log(h1)
console.log(h2)