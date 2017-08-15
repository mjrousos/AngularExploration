import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { MockTaskService } from '../../services/mock-task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  // providers: [TaskService]
  providers: [{provide:TaskService, useClass:MockTaskService}]  // Services can be injected into a component (which will make them available
                                                                // to that component and its children), or into the module, (which will make them
                                                                // availalbe to the entire module).
})
export class TaskListComponent implements OnInit {
  public tasks: Task[];
  public selectedTask: Task;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  alert = (message) => alert(message);

  async getTasks(): Promise<void> {
    this.tasks = await this.taskService.getTasks();
  }

  onSelect(task:Task): void {
    this.selectedTask = task;
  }
}