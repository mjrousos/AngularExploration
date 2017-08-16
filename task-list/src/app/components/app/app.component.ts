import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskService } from '../../services/task.service';
import { MockTaskService } from '../../services/mock-task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [TaskService]
  providers: [{provide:TaskService, useClass:MockTaskService}]  // Services can be injected into a component (which will make them available
                                                                // to that component and its children), or into the module, (which will make them
                                                                // availalbe to the entire module).
})
export class AppComponent implements OnInit {
  public title = 'Task Tracker';

  constructor(router:Router, titleService: Title) {
    router.events.subscribe((event) => {
      titleService.setTitle('Task Tracker - ' + router.url);
    });
  }

  ngOnInit(): void { }

  alert = (message) => alert(message);
}
