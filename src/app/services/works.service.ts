import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable } from 'rxjs'

import {works} from "../works"

const httpOptions={
  headers : new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  private apiUrl = 'http://localhost:5000/WORKS'

  constructor(private http:HttpClient) { }
  getTask():Observable<works[]>{
   
    return this.http.get<works[]>(this.apiUrl);
  }

   deleteTask(task:works):Observable<works> {
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.delete<works>(url);
   }

   updateReminderStatus(task:works):Observable<works>{
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.put<works>(url, task , httpOptions)
   }

   addTask(task:works):Observable<works>{
    return this.http.post<works>(this.apiUrl,task,httpOptions)
   }
}
