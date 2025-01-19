// console.time(): Tool that allows you to measure the time it takes for a section of code or process to execute Great for identifying performance "bottlenecks"

function loadData() {
    console.time("loadData");
    for (let i = 0; i < 1000000000; i++) {
        // Pretend to load some data
    }
    console.timeEnd("loadData");
}
function processData() {
    console.time("processData");
    for (let i = 0; i < 1000000; i++) {
        // Pretend to process some data
    }
    console.timeEnd("processData");
}
loadData();
processData()