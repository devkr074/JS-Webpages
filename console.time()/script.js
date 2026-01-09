function loadData() {
    console.time("loadData");
    for (let i = 0; i < 1000000000; i++) {
    }
    console.timeEnd("loadData");
}
function processData() {
    console.time("processData");
    for (let i = 0; i < 1000000; i++) {
    }
    console.timeEnd("processData");
}
loadData();
processData()