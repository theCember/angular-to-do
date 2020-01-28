import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { KanbanState } from './shared/models/task';
import { TaskService } from './core/services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public appTitle = 'Kanban board';
  public toDoState: string = KanbanState.TO_DO;
  public doingState: string = KanbanState.DOING;
  public doneState: string = KanbanState.DONE;
  public tasksToDo: Array<string>;
  public tasksDoing: Array<string>;
  public tasksDone: Array<string>;
  public progress: number;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getMockDataTodo().subscribe(
      mocks => { this.tasksToDo = mocks; }
    );
    this.taskService.getMockDoing().subscribe(
      mocks => { this.tasksDoing = mocks; }
    );
    this.taskService.getMockDone().subscribe(
      mocks => { this.tasksDone = mocks; }
    );
    this.progress = this.taskService.countProgress(
      this.tasksToDo.length + this.tasksDoing.length + this.tasksDone.length,
      this.tasksDone.length);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.progress = this.taskService.countProgress(
        this.tasksToDo.length + this.tasksDoing.length + this.tasksDone.length,
        this.tasksDone.length);
    }
  }

  captureNewTaskEvent(data: string) {
    this.tasksToDo.push(data);
    this.progress = this.taskService.countProgress(
      this.tasksToDo.length + this.tasksDoing.length + this.tasksDone.length,
      this.tasksDone.length);
  }

}
