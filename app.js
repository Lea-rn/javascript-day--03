////////// with if else statement :::

// let day = "thursday" ;

// if (day === "monday") {
//     console.log("plan vourse structure")
//     console.log("go to coding meetup")
// }
// else if (day === "tuesday") {
//     console.log("prepare nice exercises")
// }
// else if (day === "wednesday" || day === "thursday") {
//     console.log("write and test code")
// }
// else if (day === "friday" || day === "saturday" || day === "sunday"){
//     console.log("enjoy the weekend")
// }
// else {
//     console.log("not a valid day !!! ")
// }

////// with switch case :::

// let day = "tuesdayy";

// switch (day) {
//   case "monday":
//     console.log("plan course structure");
//     console.log("go to coding meetup");
//     break ;

//   case "tuesday":
//     console.log("prepare nice exercises");
//     break ;

//   case "wednesday":
//   case "thursday":
//     console.log("write and test code");
//     break ;

//   case "friday":
//   case "saturday":
//   case "sunday":
//     console.log("enjoy the weekend");
//     break ;

//   default:
//     console.log("not a valid day !!! ");
// }




//// normal if statement : 
// const age = 18 ; 
// if (age >= 18) {
//     console.log("sarah able to drive")
// }else {
//     console.log("sarah can not drive !!! ")
// }

// /////// ternary operator(esc6) : 
// const age = 15 ; 
// /// syntaxe : condition ? true : false .

// const message = age>=18 ? "sarah able to drive" : "sarah can not drive !!! "
// console.log(message)

// ////// i'm 18 years old so (i can drive) ; (i still a kid)


// const result = `i'm ${age} years old so ${age >= 18 ? "i can drive " : "i still a kid"}`
// console.log(result)


///// functions :::

//// generic function :
// function welcome (){
//     console.log("hello")
// }
//// invocation ; run the function ; call the function

// welcome()


/// generic function : 
function fruitProcessor (x,z){
console.log(`${x} apples and ${z} oranges`)
}

///// invocation :
// fruitProcessor(5,10)
// fruitProcessor(20,100)
// fruitProcessor(1000, 60000)



/////// function declaration (type) :
// function fruit (apples, oranges){
//     const juice = `juice with ${apples} apples and ${oranges} oranges`
//     return juice
// }

// console.log(fruit(10,5))


///// function expression ::

// const fruit = function (apples , oranges){   //// anonymos function ...
//     const juice = `juice with ${apples} apples and ${oranges} oranges`
//     return juice
// }

// console.log(fruit(1000,2000))





// const now = 2026 ;

// const calcAge = function (birthYear){
//  return now - birthYear
// }

// console.log(calcAge(2000))

//// arrow function ::

// const now = 2026 ;

/// first syntaxe :

// const calcAge = birthYear =>  now - birthYear
// console.log(calcAge(2005))

//// second syntaxe :

// const yearsUntilRetirement = mohamed => {
//     const age = now - mohamed ;
//     const yearsUntilRetirement = 60 - age ;
//     return yearsUntilRetirement
// }

// console.log(yearsUntilRetirement(1991)) 

/// third syntaxe : 

// const yearsUntilRetirement = (birthYear , firstName) => {
//     const age = now - birthYear 
//     const yearsUntilRetirement = 60 - age ; 
//     return `${firstName} retires in ${yearsUntilRetirement} years ....`
// } 

// console.log(yearsUntilRetirement(1990 , "jhon"))
// console.log(yearsUntilRetirement(1985 , "amanda"))


////// function calling other function :::
/// first exemple :

// const cutPieces = fruit => fruit * 4

// function fruitProcessor (apples , oranges){
//     const applePieces = cutPieces(apples) ; 
//     const orangesPieces = cutPieces(oranges)
//     let juice = `juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges`
//     return juice
// } 


// console.log(fruitProcessor(5,10))


/// second exemple ::

const now = 2026 ;
const calcAge = function (x){
  return now - x
}


function yearsUntilRetirement (birthYear , firstName){
    const age = calcAge(birthYear)
    const retirement = 60 - age 
    if (retirement > 0){
        const message = `${firstName} retires in ${retirement} years`
        return message
    }else {
        return `${firstName} has already retires ...`
    }

}

console.log(yearsUntilRetirement(1990,"peter"))
console.log(yearsUntilRetirement(1940 , "steven"))
