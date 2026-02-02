// A function defined using a function keyword and is
//  hoisted meaning it can be called before its declaration.

sayHello();

function sayHello() {
    console.log("Hello, World!");
}

let name = "Mufeez";
sayGreetings();

function sayGreetings() {
    console.log(`Greetings, ${name}!`);
}