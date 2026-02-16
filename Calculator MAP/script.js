const display = document.getElementById("display");

Array.from(document.querySelectorAll(".btn")).forEach(btn =>
    btn.addEventListener("click", () => handleInput(btn.value))
);

function handleInput(value) {

    if (value === "C") {
        display.value = "";
        return;
    }

    if (value === "del") {
        display.value = display.value.slice(0, -1);
        return;
    }

    if (value === "=") {
        try {
            const tokens = tokenize(display.value);
            const result = calculate(tokens);
            display.value = result;
        } catch {
            display.value = "Error";
        }
        return;
    }

    display.value += value;
}

function tokenize(expression) {
    let current = "";
    const tokens = [];

    expression.split("").forEach(char => {

        if (!isNaN(char) || char === ".") {
            current += char;
        } else {
            if (current) {
                tokens.push(current);
                current = "";
            }
            tokens.push(char);
        }
    });

    if (current) tokens.push(current);

    return tokens;
}

function calculate(tokens) {

    const processed = tokens.map(token =>
        !isNaN(token) ? parseFloat(token) : token
    );

    let result = processed[0];

    for (let i = 1; i < processed.length; i += 2) {

        const operator = processed[i];
        const next = processed[i + 1];

        if (operator === "+") result += next;
        if (operator === "-") result -= next;
        if (operator === "*") result *= next;
        if (operator === "/") result /= next;
    }

    return result;
}
