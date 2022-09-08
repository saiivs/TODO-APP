import { Component, OnInit } from '@angular/core';
import {WorksService} from '../../services/works.service';

import {works} from '../../works'
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
task:works[]=[]

  constructor(private taskService:WorksService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((task)=>this.task=task);
  }
  deleteTask(task:works){
    this.taskService.deleteTask(task).subscribe(()=>this.task=this.task.filter((t)=>t.id !== task.id));
  }

  Toggle(task:works){
    task.reminder = !task.reminder
    this.taskService.updateReminderStatus(task).subscribe();
  }

  Addtask(task:works){
    this.taskService.addTask(task).subscribe((task:works)=>{
      this.task.push(task)
    });

  }

}
