import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import {works} from '../../works'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-work-items',
  templateUrl: './work-items.component.html',
  styleUrls: ['./work-items.component.css']
})
export class WorkItemsComponent implements OnInit {
@Input() hello:works={}
@Output() onDeleteTask: EventEmitter<works>=new EventEmitter()
@Output() ToggleTaskReminder: EventEmitter<works>=new EventEmitter()
faTimes=faTimes
  constructor() { }

  ngOnInit(): void {
  } 

  onDelete(data:works){
    this.onDeleteTask.emit(data)  
  }
  ToggleTask(task:works){
    this.ToggleTaskReminder.emit(task)
    console.log("gotit");
    
  }

}
