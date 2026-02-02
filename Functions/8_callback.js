//A callback function is a function passed as an argument to another function, which is executed later, usually after some operation is completed.
function greet(callback) {
    callback();
}
greet(function() {
    console.log("Hello from the callback function!");
});

