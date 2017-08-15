import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // NgModel

import { AppComponent } from './components/app/app.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskService } from './services/task.service';
import { MockTaskService } from './services/mock-task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskDetailComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // providers: [TaskService]
  providers: [                                      // Services can be injected into a component (which will make them available
    {provide:TaskService, useClass:MockTaskService} // to that component and its children), or into the module, (which will make them
  ],                                                // availalbe to the entire module).
  bootstrap: [AppComponent]
})
export class AppModule { }
