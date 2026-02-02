// An anonymous function is a function without a name, usually stored in a variable or passed as an argument to another function. Commonly used as callbacks.
 // anonymous function as CallBack
    setTimeout(function() {
        console.log("This message is shown after 2 seconds");
    }, 2000);
//Anonymous Function in Array Methods
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(function(num) {
        //map() is an array method that creates a new array by applying a function to each element of an existing array without changing the original array.
        return num * num;
    });
    console.log(squares); 