const display = document.getElementById("display");

Array.from(document.querySelectorAll(".btn")).forEach
(btn => btn.addEventListener("click", ()=> handleInput(btn.value)))

function handleInput(value) {

console.log("Clicked:", value)

if (value === "C") {
display.value = "";
console.log("Cleared")
return;
}

if (value === "del") {
display.value = display.value.slice(0,-1)
console.log("Deleted:", display.value)
return;
}

if (value === "=") {
try {
console.log("Expression:", display.value)
const numbers = orderOfNum(display.value);
console.log("Tokens:", numbers)
const postfix = infixToPostfix(numbers);
console.log("Postfix:", postfix)
const result = evaluatePostfix(postfix);
console.log("Result:", result)
display.value = result;
} catch (err) {
console.log("Error:", err)
display.value = "Error";
}
return;
}

display.value += value;
console.log("Display:", display.value)
}

function orderOfNum (expression) {
    let currentNums = "";
    const numbers = []

    expression.split("").forEach(char => {

        if (!isNaN(char) || char === "."){
            currentNums += char;
        } 
        else {

            if (currentNums && char === "(") {
                numbers.push(currentNums);
                numbers.push("*");
                currentNums = "";
                numbers.push(char);
                return;
            }

            if (currentNums){
                numbers.push(currentNums)
                currentNums = ""
            }

            numbers.push(char)
        }

    })

    if (currentNums) numbers.push(currentNums)

    console.log("Final Tokens:", numbers)

    return numbers
}

function precedence(op){
    if (op === "+" || op === "-") {
        return 1;
    } else if (op === "*" || op === "/") {
        return 2;
    } else {
        return 0;
    }
}

function infixToPostfix(numbers){
const output=[]
const stack = []

numbers.forEach(number => {

    if(!isNaN(number)){
        output.push(number)
    }
    else if (number === "("){
        stack.push(number);
    }
    else if (number === ")"){
        while(stack.length && stack[stack.length - 1 ] !== "("){
            output.push(stack.pop())
        }
        stack.pop()
    }
    else {
        while (
            stack.length &&
            stack[stack.length - 1] !== "(" &&
            precedence(number)<= precedence(stack[stack.length - 1])
        ){
            output.push(stack.pop())
        }
        stack.push(number)
    }

    console.log("Stack:", stack)
    console.log("Output:", output)

})

while (stack.length) {
    output.push(stack.pop())
}

console.log("Final Postfix:", output)

return output
}

function evaluatePostfix(postfix){
    const stack = []

postfix.forEach(token => {

if (!isNaN(token)) {
stack.push(parseFloat(token));
} else {
const b = stack.pop();
const a = stack.pop();

const result =
token === "+" ? a + b :
token === "-" ? a - b :
token === "*" ? a * b :
token === "/" ? a / b : 0;

stack.push(result);
}

console.log("Eval Stack:", stack)

});

return stack[0];
}
