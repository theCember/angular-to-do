export enum KanbanState {
  TO_DO = "TO-DO",
  DOING = "DOING",
  DONE = "DONE"
}

export class Task {
  private id: number;
  private name: string;
  private state: KanbanState;
  private static counter = 1;
  public constructor(name: string) {
    this.name = name;
    this.state = KanbanState.TO_DO;
  }
  public setState(state: KanbanState) {
    this.state = state;
  }
  public getId(): number {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getState(): KanbanState {
    return this.state;
  }
}
