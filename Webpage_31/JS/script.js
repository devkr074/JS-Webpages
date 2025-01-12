// Callback: A function that is passed as an argument to another function.
// Used to handle asynchronous operations:
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases

hello(goodbye);
function hello(callback) {
    console.log("Hello!");
    callback();
}
function goodbye() {
    console.log("Goodbye!");
}