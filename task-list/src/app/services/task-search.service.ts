import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Task } from '../models/task';

@Injectable()
export class TaskSearchService {
  constructor(private http: Http) { }

  search(term: string): Observable<Task[]> {
    return this.http.get(`api/tasks/?name=${term}`)
            .map((response) => {
              var dto = response.json().data as Task[];
              return dto.map(t => new Task(t.id, t.name, t.dateDone))
            });
  }
}
