"use strict";
exports.__esModule = true;
var MyTaskManager = /** @class */ (function () {
    function MyTaskManager() {
        this.mytasks = [];
    }
    MyTaskManager.prototype.addTask = function (task) {
        this.mytasks.push(task);
        console.log("Item" + task + "has been added to the array.");
        var count = this.mytasks.length;
        return count;
    };
    MyTaskManager.prototype.listAllTasks = function () {
        console.log("list of all item in array");
        this.mytasks.forEach(function (task) {
            console.log(task);
        });
    };
    MyTaskManager.prototype.deleteTask = function (task) {
        var index = this.mytasks.indexOf(task);
        if (index > -1)
            this.mytasks.splice(index, 1);
        console.log("Element " + task + " removed from Array");
        var arraylength = this.mytasks.length;
        return arraylength;
    };
    return MyTaskManager;
}());
var MyTaskManager1 = new MyTaskManager();
MyTaskManager1.addTask("item one");
MyTaskManager1.addTask("item two");
MyTaskManager1.addTask("item three");
MyTaskManager1.listAllTasks();
MyTaskManager1.deleteTask("item two");
MyTaskManager1.listAllTasks();
