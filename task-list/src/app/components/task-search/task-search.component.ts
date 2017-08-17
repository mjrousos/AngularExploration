import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';


// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { TaskSearchService } from "../../services/task-search.service";
import { Task } from "../../models/task";

@Component({
  selector: 'task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.css'],
  providers: [ TaskSearchService ]
})
export class TaskSearchComponent implements OnInit {
  public tasks: Observable<Task[]>;
  private searchTerms: Subject<string> = new Subject<string>();

  constructor(private searchService: TaskSearchService, private router: Router) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.tasks = this.searchTerms
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => term ? this.searchService.search(term) : Observable.of<Task[]>([]))
        .catch(error => {
          console.error(error);
          return Observable.of<Task[]>([]);
        })
  }

  gotoDetail = (task: Task) => this.router.navigate(['/tasks', task.id]);
}
