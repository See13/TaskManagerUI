import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { debuglog } from 'util';

@Injectable()
export class SharedService {
  baseUrl: 'http://localhost:8080/api/v1/';
  constructor(private httpclient: HttpClient) {}
  IDs: string;
  selectedTask: Task;
  TaskList: Task[];
  GetParentListTask(): Observable<any> {
    return this.httpclient.get('http://localhost:8080/api/v1/parentlist');
  }
  GetListTask(): Observable<any> {
    return this.httpclient.get('http://localhost:8080/api/v1/list');
  }
  AddTask(task: Task): Observable<any> {
    return this.httpclient.post('http://localhost:8080/api/v1/addtask', task);
  }
  CreateTask(task: Task): Observable<any> {
    if(task.parent_task_id === undefined){
      return this.httpclient.post('http://localhost:8080/api/v1/addtask', task);
    }else{
    return this.httpclient.post('http://localhost:8080/api/v1/parenttask/'+task.parent_task_id+'/addtask', task);
    }
  }
  GetTaskByID(IDs: string): Observable<any> {
    return this.httpclient.get('http://localhost:8080/api/v1/findById/' + IDs);
  }
  DeleteTask(ID: string): Observable<any> {
    return this.httpclient.delete('http://localhost:8080/api/v1/deleteById/' + ID);
  }

  UpdateTask(task: Task): Observable<boolean> {
    console.log('in the update method...');

    return this.httpclient.put<any>(
      'http://localhost:8080/api/v1/updateById/' + task.taskId,
      task
    );
    // return this.httpclient.put<any>('http://localhost:8080/api/v1/updateById/',+IDs,task.taskid);
  }

  EndTask( taskId, data: Task): Observable<any> {
    debugger;
    console.log('End task method in shared.service.ts');
    return this.httpclient.put(
      'http://localhost:8080/api/v1/IsTaskEnded/' + taskId, data);
  }
  Edit(task: Task, IsTaskEnded): Observable<any> {
    console.log('in the edit method...');
    return this.httpclient.get<any>(
      'http://localhost:8080/api/v1/updateById' + task.taskId , IsTaskEnded
    );
  }
}
