// program 1
console.log("hello")

// program 2
var firstName = "Monika"
var lastName = "Gavhane"

// console.log(firstName)
// console.log(lastName)


// let amol = {
//     firsName:"amol",
//     lastName:"rahane",
//     displayName:function(){
//         // this --- amol
//         console.log(this.firsName + this.lastName) 
//         let displayName2 = function(){
//             // this ---> window
//             console.log(this.firsName + this.lastName) 
//         }
//         displayName2()
//     }
// }
// amol.displayName()


let amol = {
    firsName:"amol",
    lastName:"rahane",
    displayName:function(){
        // this --- amol
        console.log(this.firsName + this.lastName) 
        let displayName2 = ()=>{
            // this --->amol
            console.log(this.firsName + this.lastName) 
        }
        displayName2()
    }
}
amol.displayName()

// let  amol = {
//     firsName:"amol",
//     lastName:"rahane",
//     displayName:()=>{
//         // this --- window
//         console.log(this.firsName + this.lastName)  
//         let displayName2 = () =>{
//             // this - window
//             console.log(this.firsName + this.lastName) 
//         }
//         displayName2()
//     }
// }
// amol.displayName()
console.log(1 +  "2" + "2"); 