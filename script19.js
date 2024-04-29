// map  and set

let info = {
    firstName: "suvarna",
    lastName: "chasakr",
    age: 28,
    1: 39
}

for (let key in info) {
    console.log(typeof key)
}

// program 2
let roles = new Map()
console.log(roles)
roles.set(1, "admin")
roles.set(2, "manager")
roles.set(3, "customer")
roles.set(4, "employee")
console.log(roles)

// program 2

let skills = ["python", "javascript", "html", "css"]
let info2 = { firstName: "suvarna", lastName: "chasakr" }
let canDrive = true

let names = new Map(
    [
        [skills, 4],
        [info2, 2],
        [canDrive, "yes"],
        [1, "rollNo"],
        ["fullName", "suvarna chaskar"]
    ]
)
console.log(names)
names.get(1)
names.get(skills)

// program 3
let x = names.has(info2)
console.log(x)

// program 4

let roles2 = new Map(
    [

        [1, 'admin'],
        [2, 'manage'],
        [3, 'customer'],
        [4, 'employee']
    ]
)
// roles2.clear()
// console.log(roles2)
roles2.forEach(function(val,key){
    console.log(typeof val,typeof key)
})

let mapC = new Map([
    [names,"students"],
    [info2,"information"],
    [true,"candrive"],
    [12,"rollNo"]
])
console.log(mapC)
// gryt = value retrive 
// set = value add/set
// has = boolean -true or false
// remove/ delete
mapC.get(12)
mapC.set('city',"pune")
let q1 = mapC.has(12)
console.log(q1)
mapC.delete(12)
console.log(mapC)


let mapD = new Map([
    ["MH","Nagpur"],
    ["UP","Kanpur"],
    ["RJ","Jaipur"]
])

mapD.forEach(function(x,y){
    console.log(x,y)
})
mapD.forEach(function(x,y){
    console.log(x,y)
})

for(let key of mapD.keys()){
    console.log(key)
}

for(let x of mapD.values()){
    console.log(x)
}

for(let [k,v] of mapD.entries()){  
    console.log(k,v)
}