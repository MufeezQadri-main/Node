let num1 = "";
let num2 = "";
let isSecondNumber = false;

const display = document.getElementById("display");
function handleNumber(event) {
    const value = event.target.value;
    console.log(event)


    if (!isSecondNumber) {
        num1 += value;
        display.value = num1;
    } else {
        num2 += value;
        display.value = num2;
    }
}
document.getElementById("btn1").onclick = handleNumber;
document.getElementById("btn2").onclick = handleNumber;

document.getElementById("add").onclick = () => {
    isSecondNumber = true;
};

document.getElementById("equal").onclick = () => {
    const result = Number(num1) + Number(num2);
    display.value = result;
};

