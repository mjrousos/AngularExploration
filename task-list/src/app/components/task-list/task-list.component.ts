import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasks: Task[];
  public selectedTask: Task;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  async getTasks(): Promise<void> {
    this.tasks = await this.taskService.getTasks();
  }

  async finishTask(event, task: Task): Promise<Task> {
    event.stopPropagation(); // Prevents the event from also firing on parent elements (like the div)
    task.finish();
    await this.taskService.update(task);
    return task;
  }

  onSelect(task:Task): void {
    this.selectedTask = task;
  }
}
