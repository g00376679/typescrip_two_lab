var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("Item" + task + "has been added to the array.");
    var count = tasks.length;
    return count;
}
function listAllTasks() {
    // for(let i=0; i<tasks.length;i++)
    //}
    console.log("list of all item in array");
    tasks.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index > -1)
        tasks.splice(index, 1);
    console.log("Element " + task + " removed from Array");
    var arraylength = tasks.length;
    return arraylength;
}
addTask("number three");
addTask("number two");
var elementCount = addTask("Number 0ne");
console.log(elementCount);
listAllTasks();
var x = deleteTask("number two");
console.log(x);
