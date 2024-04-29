let students = [
    {
        firstName: "suvarna",
        lastName: "chaskar",
        age: 27,
        skills: ["python", "javascript", "django"],
        city: "pune"
    },
    {
        firstName: "monika",
        lastName: "gavhane",
        age: 25,
        skills: ["python", "javascript", "cypress"],
        city: "mumbai"
    },
    {
        firstName: "amol",
        lastName: "rahane",
        age: 23,
        skills: ["python", "html", "cypress"],
        city: "nagpur"
    },
    {
        firstName: "mayuri",
        lastName: "dighe",
        age: 22,
        skills: ["testing", "html", "cypress"],
        city: "pune"
    }

]


// console.log(students[1].firstName)
// console.log(students[1].skills[2])
// students[1].skills.push("selenium")
// console.log(students)

//program 1
// firstName of all students
for(let i = 0;i < students.length;i++){
    console.log(students[i].firstName)
}
// by foreach
students.forEach(function(el){
    console.log(el.firstName)
})

// program 2
// student with pune city
for(let i = 0; i<students.length;i++){
    if(students[i].city == "pune"){
        console.log(students[i].firstName)
    }
}
// BY FOREACH
students.forEach(function(el){
    if(el.city == "pune"){
        console.log(el.firstName)
    }
})

let q = students.filter(function(el){
    return el.city == "pune"
})
console.log(q)
q.forEach(function(el){
    console.log(el.firstName)
})
    // students.filter(function(el){
    //     return el.city == "pune"
    // }).forEach(function(el){
    //     console.log(el.firstName)
    // })
    

// program 3

//student in pune and age above 30
students.forEach(function(el){
    if(el.city =="pune" && el.age >30){
        console.log(el.firstName)
    }
})

// PROGRAM 4
// add css skill to every student
students.forEach(function(el){
    el.skills.push("css")
})
console.log(students)

let q2 = students.map(function(el){
    el.skills.push("html")
    return el
})
console.log(q2)

// program 5

// name:numberofSkills

students.forEach(function(el){
    console.log(el.firstName + ":"+el.skills.length)
})

// program 6
// average age of all students
let total = 0
for(let i = 0; i < students.length ; i++){
    total = total + students[i].age
}
console.log(total/students.length)

let q3 = students.reduce(function(acc,el){
    return acc  + el.age
},0)
console.log(q3/students.length)