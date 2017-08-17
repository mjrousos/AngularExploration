import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // NgModel
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskService } from './services/task.service';
import { MockTaskService } from './services/mock-task.service';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the mock in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDataService }  from './services/mock-data.service';
import { TaskSearchComponent } from './components/task-search/task-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskDetailComponent,
    TaskListComponent,
    AddTaskComponent,
    TaskSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(MockDataService),
    AppRoutingModule
  ],
  providers: [
    Title,
                                                    // Services can be injected into a component (which will make them available
    {provide:TaskService, useClass:MockTaskService} // to that component and its children), or into the module, (which will make them
  ],                                                // availalbe to the entire module).
  bootstrap: [AppComponent]
})
export class AppModule { }
