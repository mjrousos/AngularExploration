import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { TASKS } from '../mock-tasks';

@Injectable()
export class TaskService {
  constructor() { }

  async getTasks(): Promise<Task[]> {
    return Promise.resolve(TASKS);
  }

  async getTask(id: number): Promise<Task> {
    return (await this.getTasks()).find(t => t.id == id);
  }

  async addTask(task: Task): Promise<void> {
    return Promise.resolve();
  }
}
