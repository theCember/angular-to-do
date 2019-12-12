import { Component } from "@angular/core";
import { KanbanState, Task } from "./shared/models/task";
import { TaskService } from "./core/services/task.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public appTitle: string = "Kanban board";
  public toDoState: String = KanbanState.TO_DO;
  public doingState: String = KanbanState.DOING;
  public doneState: String = KanbanState.DONE;
  public tasks: Array<Task>;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getMockData().subscribe(mocks => this.tasks = mocks);
  }
}
