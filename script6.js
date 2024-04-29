// while loop
// initialization
// while (condition){}
// statement
// increment / decrement
// }

let s1 = 1
while(s1 <= 5){
    console.log(s1)
    s1 = s1 + 1
}

let s2 = 5
while(s2 >= 1){
    console.log(s2)
    s2 = s2 - 1
}

let s3 = 2
while(s3<=20){
    console.log(s3)
    s3 = s3 + 2
}

let s4 = 50
while(s4>=5){
    console.log(s4)
    s4 = s4 - 5
}

//while loop with break statement
let s5 = 1
while(s5<=3){
    console.log(s5)
    if(s5 == 2){
        break
    }
    s5 = s5 + 1
}
let s6 = 1
while (s6 <= 5) {
    if (s6 == 2) {
        break
    }
    console.log(s5) 
    s6 = s6 + 1 
}

// while loop with continue statement
let s7 = 1
while(s7 <= 5){
    if(s7 == 3){
        s7++
        continue
    }
    console.log(s7)
    s7 = s7 + 1
}