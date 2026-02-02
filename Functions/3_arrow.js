const generalFunction = function (firstNumber, secondNumber, maths){
    if(maths == "addition")
        return firstNumber + secondNumber
    else if(maths == "subtraction")
        return firstNumber - secondNumber
    else if(maths == "multiply")
        return firstNumber * secondNumber
    else if (maths === "modulus")
        return firstNumber % secondNumber
    else {
          return "Please enter proper value"
    }
}

let firstNumber =  prompt("Enter First Number")
let secondNumber =  prompt("Enter second Number")
let maths = prompt("addition, subtraction, multiplication, modulus")



console.log(generalFunction(Number(firstNumber), Number(secondNumber), maths))
