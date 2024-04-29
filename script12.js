// slice()

let names = ["suvarna","monika","archana","kaveri"]

//names.slice(startIndex ,endIndex,included)

let r1 = names.slice(2,5)
let r2 = names.slice(1)
let r3 = names.slice(1,3)
// console.log(r2)
// console.log(r1)
// console.log(r3)

// console.log(1,-1)
// console.log(-5,3)
// console.log(names.slice(-1,0))

// splice()

let name = ["suvarna","monika","archana","kaveri","sona"]
let q1 =  name.pop()
console.log(q1)
console.log(name)// return remove element

let q2 = name.shift()
console.log(q2) // return remove element
console.log(name)


//        0      1       2       3      4
names = ["ram","sham","satish","ram","ramesh"]

//names.splice(startIndex,numberOfElementtobeDelete)

let e2 = names.splice(1,1)
console.log(names)
console.log(e2)
console.log(names)
names.splice(2,1,"bharat")
console.log(names)

// reverse ()
let a = [11,22,33,44]
a.reverse()
console.log(a)

// concat()
let s = [11,22,33]
let t = [44,55,66]
let r = s.concat(t)
console.log(r)

// fill()

let s1 = [11,22,33,44,55,66]
let s2 = s1.fill('-',1,5)
console.log(s2)

// flat()
//                   0                    1                 2
//               0         1           0       1           0        1
let states = [["nagpur","mumbai"],["jaipur","udaipur"],["bhopal","indore"]]
console.log(states[0][1])
console.log(states[1][1])
e3 = states.flat()
console.log(e3)

// sort()
let country = ["india","bangladesh","nepal"]
country.sort()
console.log(country)

// join()
let info = ["suvarna","chaskar",9527335021]
console.log(info.length)
e2 = info.join('-')
console.log(e2)
console.log(typeof e2)

