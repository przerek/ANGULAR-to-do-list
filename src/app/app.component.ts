import { Component } from '@angular/core';
import {Task} from './task'
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
editMode = false;
taskName = 'Sugerowane zadanie codzienne: odkurzanie';
taskDate='';

  config: { [key: string]: string | Date }  = null;
tasks: Task[]=[
{
  name:'Siłownia',
  deadLine: '2020-01-21',
  done: false,
},
{
  name:'Nauka Angulara',
  deadLine: '2020-01-22',
  done: true,
},
{
  name:'Sprzątanie domu',
  deadLine: '2020-01-23',
  done: false,
},
];

  constructor() {

    setTimeout(()=>{

      this.config={title:'Lista zadań',footer:'Lista zadań zbudowana w Angularze.',date:new Date()};


    },500);
this.sortTask();

  }

  clearTasks(){
    this.tasks=[];
  }



createTask()
{
  const task:Task = {

    name: this.taskName,
    deadLine: this.taskDate,
    done: false,
  };
  this.tasks.push(task);
  this.taskName = '';
  this.taskDate = '';
  this.sortTask();
}


switchEditMode(){ 
  this.editMode=!this.editMode;
}

markTaskAsDone(task: Task){
task.done=true;
this.sortTask();
}
deleteTask(task: Task)
{
  this.tasks = this.tasks.filter(e=>e!==task);
  this.sortTask();
}

private sortTask(){

  this.tasks = this.tasks.sort((a:Task, b:Task)=>
  a.done === b.done ? 0 : a.done? 1:-1);
}
}



