import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { TASKS } from '../mock-tasks';

@Injectable()
export class TaskService {
  constructor() { }

  async getTasks(): Promise<Task[]> {
    return Promise.resolve(TASKS);
  }
}
