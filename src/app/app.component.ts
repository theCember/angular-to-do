import { Component } from '@angular/core';
import { KanbanState } from '../app/shared/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public appTitle: string = 'Kanban board';
  public toDoState: String = KanbanState.TO_DO;
  public doingState: String = KanbanState.DOING;
  public doneState: String = KanbanState.DONE;
}
