let tasks: Array<string> =[];
function addTask(task:string):number {
     tasks.push(task);
    console.log("Item" +task+"has been added to the array.")
    let count:number= tasks.length;
    return count;
   

}

function listAllTasks():void{
   // for(let i=0; i<tasks.length;i++)
//}

console.log("list of all item in array")
tasks.forEach(function(task){
    console.log(task);
});
}

function deleteTask(task:string):number{
    let index:number = tasks.indexOf(task);
if(index >  -1)

    tasks.splice(index,1);
    console.log("Element "+task+" removed from Array")
let arraylength = tasks.length;

    return arraylength;
}

addTask("number three");
addTask("number two");

let elementCount:number=addTask("Number 0ne");
console.log(elementCount);
listAllTasks();
let x:number = deleteTask("number two");
console.log(x);