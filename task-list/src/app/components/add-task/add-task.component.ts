import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  newTask: Task = new Task(0, '', null);
  submitEnabled: Boolean = true;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
  }

  async onSubmit(): Promise<void> {
    this.submitEnabled = false;
    try
    {
      await this.taskService.addTask(this.newTask);
      this.newTask = new Task(0, '', null);
      this.submitEnabled = true;
      this.router.navigate(['/tasks']);
    }
    catch(error)
    {
      this.submitEnabled = true;
      alert(error);
    }
  }
}
