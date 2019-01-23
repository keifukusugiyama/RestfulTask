//import OnInit
import { Component, OnInit } from '@angular/core';
//import service 
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//implement OnInit
export class AppComponent implements OnInit{
  //setup variables to be used on html
  title = 'Restful Task API';
  tasks : any = [];

  oneTask : {};
  //hide showID div at first
  showID = false;

  newTask: any;

  showEdit = false;

  createNewErrors : any;

  //constructor with service injection, to use its variables and methods
  constructor(private _httpService: HttpService){}

  //this will run right after constructor
  ngOnInit(){
    this.newTask = { title: "", description: "" }
    this.oneTask = { title: "", description: ""}
  }
  
  //run the service method getTasks, let observable hold (subscribe) until the data is returned from service
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      //set returned data as tasks
      this.tasks = data;
    });
  }

  onSubmitNew() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      if (data['errors']) {
        this.createNewErrors = data;
      }
      else{
        this.newTask = { title: "", description: "" }
        this.getTasksFromService();
      }
    });
  }

  onButtonClickAll(): void { 
    this.getTasksFromService();
  }

  onButtonClickID(id: String): void { 
    //call service method getTaskByID, pass in the parameter from the button. 
    let observable = this._httpService.getTaskByID(id);
    //let observable hold (subscribe) until the data is returned from service
    observable.subscribe(data => {
      //save data as oneTask
      this.oneTask = data;
    });
    //set showID to true, showing the div
    this.showID = true;
  }

  onShowEditForm(){
    this.showEdit = true;
  }

  onSubmitEdit(){
    let observable = this._httpService.updateTaskByID(this.oneTask['_id'], this.oneTask);
    observable.subscribe(data => {
      if (data['errors']) {
        console.log(data);
      }
      // this.oneTask = { title: "", description: "" }
      this.getTasksFromService();
      // this.showID = false;
    });
  }

  onButtonDelete(id){
    let observable = this._httpService.deleteTaskByID(id);
    observable.subscribe(data => {
      if (data['errors']) {
        console.log(data);
      }
      this.oneTask = { title: "", description: "" }
      this.getTasksFromService();
      this.showID = false;
    });
  }
  
}
