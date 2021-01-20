// console.time("log");
// console.profile("log1")
// console.log(window.document);
// console.log(document.lastModified);
// console.log(document.title);
// console.log(document.body)
// document.body.innerHTML = "<h1>hey dom</h1>";
// console.log(window.screen);
// let hero = {name: "duke"};
// console.log(hero);
// console.log(console);

// //console.clear();
// console.debug("debug");
// console.info("info");
// console.warn("warn");
// console.error("error");
// console.groupEnd();

// console.timeEnd("log");
// console.profileEnd("log");
// console.trace();

// let divs = document.getElementsByName("div");
// let div = divs.item(0);
// let childNodes = div.childNodes;
// let textNode = childNodes.item(0);
// console.log(textNode.textContent);

// let textInput = document.querySelector("input[type=text]");
// textInput.addEventListener("keydown", e => console.log(e.target.value));
// textInput.addEventListener("change", e => console.log(e.target.value));

// console.dir(textInput);
// let buttonInput = document.querySelector("input[type=button]");
// console.dir(buttonInput);
// let button = document.querySelector("button");
// console.dir(button);
// let select = document.querySelector("select");
// console.dir(select);
// let progress = document.querySelector("progress");
// console.dir(progress);
// let meter = document.querySelector("meter");
// console.dir(meter);

// let div = document.querySelector("div");
// let customFire = new CustomEvent("fire", {
//     detail: "firestarter"
// });

// div.addEventListener("fire", e => console.log(e));
// div.dispatchEvent(customFire);
// window.onload = e => console.log("load", e);

// let text = document.querySelector("input[type=text]");
// text.value = "hey duke";

// let button = document.querySelector("input[type=button]");
// button.value = "push me";

// let div = document.querySelector("div");
// let color =document.querySelector("input[type=color]");
// color.setAttribute("data-message", "hello world");
// let attributeValue = color.getAttribute("data-message");
// console.log(color.dataset.message);
// console.log(color.dataset);
// console.log(...color.attributes);

let div = document.querySelector("div");
let color =document.querySelector("input[type=color]");
console.log(div.style);
color.onchange = e =>div.style.backgroundColor = e.target.value;

let text = document.querySelector("input[type=text]");
text.onchange = e => div.innerText = e.target.value;

let detail = document.getElementById("detail");
detail.style.backgroundColor = 'grey';
detail.classList.add('mono');
detail.classList.toogle('mono');

let last = document.querySelector("#last")
console.log(getComputedStyle(last).position);