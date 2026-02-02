// sends back a value from a function to the caller and stops the function execution.
function add(a, b) {
    return a + b; 
    console.log("This line will not be executed."); 
}
console.log(add(2, 3));