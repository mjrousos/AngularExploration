import { Component } from '@angular/core';

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

export class Task {
  public dateDone: Date;
  constructor(public id: number, public name: string) { }

  finish(event): void {
    if (this.dateDone == null) {
      let finishTime = new Date();
      console.log('Marking task ' + this.id + ' as finished according to user request at ' + finishTime);
      this.dateDone = finishTime;
    }
    event.stopPropagation(); // Prevents the event from also firing on parent elements (like the div)
  }

  isDone = () => this.dateDone != null;
}

const TASKS: Task[] = [
  new Task(1, 'Scoop the cat litter'),
  new Task(2, 'Take out the trash'),
  new Task(3, 'Do the dishes'),
  new Task(4, 'Clean up toys')
]
