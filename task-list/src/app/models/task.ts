export class Task {
  public dateDone: Date;
  constructor(public id: number, public name: string) { }

  finish(event): void {
    if (this.dateDone == null) {
      let finishTime = new Date();
      console.log('Marking task ' + this.id + ' as finished according to user request at ' + finishTime);
      this.dateDone = finishTime;
    }
    event.stopPropagation(); // Prevents the event from also firing on parent elements (like the div)
  }

  isDone = () => this.dateDone != null;
}
