export interface taskinterface{
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;
    mytasks:Array<string>;
}