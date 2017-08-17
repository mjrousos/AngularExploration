import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Task } from '../models/task';
// import { TASKS } from '../mock-tasks';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MockTaskService {
  private delayMS: number = 2000;
  private tasks: Task[];
  private tasksUrl = 'api/tasks'; // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
    //    this.initializeTasks();
  }

  // initializeTasks(): void {
  //   this.tasks = TASKS;
  // }

  async addTask(task: Task): Promise<void> {
    task.id = this.tasks.length + 1;
    return new Promise<void>(resolve => {
      setTimeout(() => {
        this.tasks.push(task);
        resolve();
      }, this.delayMS);
    });
  }

  async getTasks(): Promise<Task[]> {
    // Old mock data (without HTTP)
    // return new Promise<Task[]>(resolve => {
    //   setTimeout(() => {
    //     resolve(this.tasks);
    //   }, this.delayMS);
    // });


    try {
      var responseBody = (await this.http.get(this.tasksUrl).toPromise()).json();
      var data = responseBody.data as Task[];

      // The deserialized data will not be real Task objects since they will
      // not have the correct methods, etc. They are just anonymous objects with
      // public fields corresponding to Task's properties. Therefore, we have to
      // create actual Tasks from the data transfer objects before returning them.
      return data.map(dto => new Task(dto.id, dto.name, dto.dateDone));
    }
    catch (error) {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
  }

  async getTask(id: number): Promise<Task> {
    // Old mock data (without HTTP)
    //return (await this.getTasks()).find(t => t.id == id);

    const url = `${this.tasksUrl}/${id}`;
    try {
      var dto = (await this.http.get(url).toPromise()).json().data as Task;
      return new Task(dto.id, dto.name, dto.dateDone);
    }
    catch (error) {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
  }

  async update(task: Task): Promise<Task> {
    const url = `${this.tasksUrl}/${task.id}`;

    try {
      await this.http.put(url, JSON.stringify(task), { headers: this.headers }).toPromise();
      return task;
    }
    catch (error) {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
  }
}
