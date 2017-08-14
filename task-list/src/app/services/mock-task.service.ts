import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { TASKS } from '../mock-tasks';

@Injectable()
export class MockTaskService {
  private delayMS: number = 5000;

  constructor() { }

  async getTasks(): Promise<Task[]> {
    return new Promise<Task[]>(resolve => {
      setTimeout(() => {
        resolve(TASKS);
      }, this.delayMS);
    });
  }
}
