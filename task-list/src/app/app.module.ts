import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // NgModel
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskService } from './services/task.service';
import { MockTaskService } from './services/mock-task.service';
import { AddTaskComponent } from './components/add-task/add-task.component';

const routes: Routes = [
  {
    path: 'tasks/:id',
    component: TaskDetailComponent
  },
  {
    path: 'tasks',
    component: TaskListComponent
  },
  {
    path: 'add-task',
    component: AddTaskComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/tasks'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskDetailComponent,
    TaskListComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  // providers: [TaskService]
  providers: [
    Title,
                                                    // Services can be injected into a component (which will make them available
    {provide:TaskService, useClass:MockTaskService} // to that component and its children), or into the module, (which will make them
  ],                                                // availalbe to the entire module).
  bootstrap: [AppComponent]
})
export class AppModule { }
