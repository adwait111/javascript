// loops
// for loop and while loop
// for(intialization;conditionCheck;increment/decrement){
    //statement
//}

//program 1
for(let i = 1 ; i <=3 ; i++){
    console.log(i)
}

// program 2
//print 1 to 5
for(let i = 1 ; i <= 5 ; i++){
    console.log(i)
}

// program 3
//print 5 to 1
for(let i = 5 ; i >=1  ; i--){
    console.log(i)
}

// program 4
// print table of 2
for(let i = 2 ; i <= 20 ; i = i+2){
    console.log(i)
}

// program 5 
// print table of 2
for(let i = 1 ; i <= 10 ; i++){
    console.log(i*2)
}

// program 6 
// table of 3 in reverse
for(let i = 30 ; i >=3 ; i = i-3){
    console.log(i)
}

// for loop with break  statement 
// program 1
for (let i = 1; i <= 5; i++) {  // 2 // 3
    console.log(i) // 1  // 2 // 3
    if (i == 3) {
        break
    }
}

// program 2
for (let i = 5; i >= 1; i--) { 
    if (i == 3) {
        break
    }
    console.log(i) 
}


// program 3
for (let i = 2; i <= 20; i = i + 2) { 
    if (i == 10) {
        break
    }
    console.log(i)
}

// program 4
// continue statement with for loop
for (let i = 1; i <= 5; i++) {  
    if(i == 3){
        continue
    }
    console.log(i) 
}

// program 5 
for(let i = 5 ; i >= 1 ; i--){ 
    if(i == 3){
        continue
    }
    console.log(i)
}
