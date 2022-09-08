import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 title:string="Task Traker"
 showAddTask:boolean=false;
 subscription:Subscription;

 display(){
  this.service.toggleAddTask()
 }
 
  constructor(private service:UiService) {
    this.subscription= this.service.onToggle().subscribe((value)=>{this.showAddTask=value})
   }

  ngOnInit(): void {
    
  }

}
