let city = "pune"

switch (city) {

    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")
    case "banglore":
        console.log("KA")
    default:
        console.log('Incorrect cityname')
}

switch (city) {
    case "pune":
        console.log("MH")
        break
    case "jaipur":
        console.log("RJ")
        break
    case "banglore":
        console.log("KA")
        break
    default:
        console.log('Incorrect cityName')
}


switch(city){
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    case "banglore":
    case "otty":
        console.log("KA")
        break
    default:
        console.log('Incorrect cityName')
}

let a = 15
let b = 5
let c = 2

let isGreatest = true
switch(isGreatest){
    case a > b && a > c:
        console.log("a is greater")
        break
    case b > a && b > c:
        console.log("b is greater")
        break
    default:
        console.log("c is greater")
}