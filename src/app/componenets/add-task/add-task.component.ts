import { Component, OnInit ,Output ,EventEmitter } from '@angular/core';
import {works} from '../../works'
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
@Output() onAddTask:EventEmitter<works>= new EventEmitter()
  text:string=""
  day:string=""
  Reminder:boolean=false;
  showAddTask:boolean=false;
  subscription:any;

  constructor(private uiservice:UiService) { 
   
  }

  ngOnInit(): void {
    this.subscription=this.uiservice.onToggle().subscribe((value)=>{this.showAddTask=value})
  }

  

  onSubmit(){
    if(!this.text){
      alert("Please Fill the Fields")
      return;
    }
    const newTask={
      text:this.text,
      day:this.day,
      Reminder:this.Reminder
    }
    this.onAddTask.emit(newTask)
    this.text=""
    this.day=""
    this.Reminder=false


  }

}
