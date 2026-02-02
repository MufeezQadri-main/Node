// A function is stored in a variable and can be called after its declaration.
//It is not hoisted, so calling it before its declaration will result in an error.

const sayGoodbye = function() {
    console.log("Goodbye, World!");
};

sayGoodbye();

const greet = function(greeting) {      
    console.log(greeting + ", Mufeez!");
};

greet("Hello");


