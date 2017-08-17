import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from '../models/task';

export class MockDataService implements InMemoryDbService {
  createDb() {
    const tasks: Task[] = [
      new Task(1, 'Scoop the cat litter', null),
      new Task(2, 'Take out the trash', null),
      new Task(3, 'Do the dishes', null),
      new Task(4, 'Clean up toys', null)
    ];

    return {tasks};
  }
}
