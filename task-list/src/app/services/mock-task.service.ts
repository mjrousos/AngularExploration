import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { TASKS } from '../mock-tasks';

@Injectable()
export class MockTaskService {
  private delayMS: number = 2000;
  private tasks: Task[];

  constructor() {
    this.initializeTasks();
  }

  initializeTasks(): void {
    this.tasks = TASKS;
  }

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
    return new Promise<Task[]>(resolve => {
      setTimeout(() => {
        resolve(this.tasks);
      }, this.delayMS);
    });
  }

  async getTask(id: number): Promise<Task> {
    return (await this.getTasks()).find(t => t.id == id);
  }
}
