export class Task {
  constructor(public id: number, public name: string, public dateDone: Date) { }

  finish(): void {
    if (this.dateDone == null) {
      let finishTime = new Date();
      console.log('Marking task ' + this.id + ' as finished according to user request at ' + finishTime);
      this.dateDone = finishTime;
    }
  }

  isDone = () => this.dateDone != null;
}
