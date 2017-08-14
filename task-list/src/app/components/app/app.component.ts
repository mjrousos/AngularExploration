import { Component } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Task Tracker';
  public tasks = TASKS;
  public selectedTask: Task;

  alert = (message) => alert(message);

  onSelect(task:Task): void {
    this.selectedTask = task;
  }
}

const TASKS: Task[] = [
  new Task(1, 'Scoop the cat litter'),
  new Task(2, 'Take out the trash'),
  new Task(3, 'Do the dishes'),
  new Task(4, 'Clean up toys')
]
