import { Injectable } from '@angular/core';
//import httpclient so that http request can be used
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  //constructo with httpclient injection, so that http request can be used
  constructor(private _http: HttpClient) {
  }

  getTasks(){
    //run http get request to /api/tasks (express routes.js and controller.js) and return to caller
    return this._http.get('/api/tasks');
  }

  getTaskByID(id: String){
    //run http get request to /api/tasks/id with the passed in id parameter, goes to express routes.js and controller.js and return to caller
    return this._http.get(`/api/tasks/${id}`);
  }

  addTask(newtask){
    return this._http.post('/api/tasks', newtask);
  }

  updateTaskByID(id: String, oneTask){
    return this._http.put(`/api/tasks/${id}`, oneTask);
  }

  deleteTaskByID(id: String){
    return this._http.delete(`/api/tasks/${id}`);
  }

}
