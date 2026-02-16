const title = document.getElementById("title");

title.addEventListener("click", function() {
  title.innerText = "Hello World from JavaScript";
});   

const boxes = document.getElementsByClassName("box");
boxes[0].style.backgroundColor = "red"; 
boxes[1].style.backgroundColor = "#bd0e0e";



const one = document.querySelector("#one");
one.style.color = "#f6f62a";

const intro = document.querySelector(".intro");
intro.style.fontSize = "20px";


const firstParagraph = document.querySelector("p");
firstParagraph.style.fontWeight = "bold";


const highlighted = document.querySelector("#container .highlight");
highlighted.style.backgroundColor = "yellow";

document.querySelectorAll(".box").forEach(el => {
  el.style.border = "1px solid black";
});

const div = document.createElement("div");
div.innerText = "Hello";


const text = document.createTextNode("Hello");
div.appendChild(text, div);
document.body.appendChild(div, div);
 

const input = document.getElementById("myInput");

console.log(input.getAttribute("value")); // "Hello" (initial HTML)
console.log(input.value);                  // "Hello" (current state)

input.value = "Hi"; // User types or JS updates

console.log(input.getAttribute("value")); // "Hello" (unchanged)
console.log(input.value);                  // "Hi" (updated)   