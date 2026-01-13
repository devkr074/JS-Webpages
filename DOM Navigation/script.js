const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});
ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
});
element = document.getElementById("vegetables");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";
element = document.getElementById("desserts");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";
element = document.getElementById("ice cream");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";
element = document.getElementById("fruits");
const children = element.children;
Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
});