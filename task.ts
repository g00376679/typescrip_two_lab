import{taskinterface} from './interface';
class MyTaskManager implements taskinterface{
    mytasks: Array<string> =[];
    constructor(){}

     addTask(task:string):number {
       this.mytasks.push(task);
       console.log("Item" +task+"has been added to the array.")
        let count:number= this.mytasks.length;
       return count;
   }

    listAllTasks():void{
 console.log("list of all item in array")
 this.mytasks.forEach(function(task){
     console.log(task);
 });
 }



  deleteTask(task:string):number{
    let index:number = this.mytasks.indexOf(task);
if(index >  -1)

    this.mytasks.splice(index,1);
    console.log("Element "+task+" removed from Array")
let arraylength = this.mytasks.length;

    return arraylength;
}

}
let MyTaskManager1 = new MyTaskManager();
MyTaskManager1.addTask("item one");
MyTaskManager1.addTask("item two");
MyTaskManager1.addTask("item three");
MyTaskManager1.listAllTasks();
MyTaskManager1.deleteTask("item two");
MyTaskManager1.listAllTasks();
