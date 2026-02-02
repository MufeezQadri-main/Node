// A function that: takes another function as argument OR Returns a function
 function calculate (a,b, oper) {
    return oper(a,b);
 }

 function add (x,y) {
    return x + y;
 }
 console.log(calculate(5,3, add)); 