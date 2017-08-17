import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input()  // Used to populate a field from a parent component
  public task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        if (params.has('id')) {
          return this.taskService.getTask(+params.get('id'));
        }
        return Promise.resolve(null);
      })
      .subscribe((task: Task) => {
        if (task) this.task = task;
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.taskService.update(this.task)
      .then(() => this.goBack());
  }
}
