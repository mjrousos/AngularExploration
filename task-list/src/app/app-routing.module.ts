import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskListComponent } from './components/task-list/task-list.component';
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
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
  providers: [
    // Guards
  ]
})
export class AppRoutingModule { }
