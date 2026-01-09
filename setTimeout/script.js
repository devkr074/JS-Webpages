function hello() {
    window.alert("Hello");
}
setTimeout(hello, 3000);
const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
clearTimeout(timeoutId);
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