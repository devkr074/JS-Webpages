// setTimeout(): Function in JavaScript that allows you to schedule the execution of a function after an amount of time Times are approximate setTimeout(callback, delay);

// ---------- EXAMPLE 1 ----------

function hello() {
    window.alert("Hello");
}
setTimeout(hello, 3000);

// ---------- EXAMPLE 2 ----------
// clearTimeout() = can cancel a timeout before it triggers

const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
clearTimeout(timeoutId);

// ---------- EXAMPLE 3 ----------

let timeoutId2;
function showAlert() {
    window.alert("Hello");
}
function startTimer() {
    timeoutId2 = setTimeout(showAlert, 3000);
    console.log("STARTED");
}
function clearTime() {
    clearTimeout(timeoutId2);
    console.log("CLEARED");
}