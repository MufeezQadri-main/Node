//Paramenter: Variables listed as a part of the function definition.
//Argument: The actual value that is passed to the function when it is called.

function greet(name) { 
    console.log("Hello, " + name + "!");
}

greet("Mufeez");

//Default Parameters: Default values for parameters if no argument is provided.
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greet(); 
greet("Mufeez");