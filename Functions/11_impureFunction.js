// Output depends on external variable or state, or modifies them.
// Causes side effects.

let count = 0;
function increment() {
    count++;
    return count;
}
console.log(increment());