// DOM Navigation: The process of navigating through the structure of an HTML document using JavaScript.
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ---------- .firstElementChild ----------

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});

// ---------- .lastElementChild ----------

ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
});

// ---------- .nextElementSibling ----------

element = document.getElementById("vegetables");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

// ---------- .previousElementSibling ----------

element = document.getElementById("desserts");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";

// ---------- .parentElement ----------

element = document.getElementById("ice cream");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";

// ---------- .children ----------

element = document.getElementById("fruits");
const children = element.children;
Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
});