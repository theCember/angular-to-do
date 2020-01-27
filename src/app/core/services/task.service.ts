import { Injectable } from '@angular/core';
import { createMockDataToDo, createMockDataDoing, createMockDataDone } from '../mocks/mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private mockDataToDo: Array<string>;
  private mockDataDoing: Array<string>;
  private mockDataDone: Array<string>;

  constructor() {
    this.mockDataToDo = createMockDataToDo();
    this.mockDataDoing = createMockDataDoing();
    this.mockDataDone = createMockDataDone();
  }

  public getMockDataTodo(): Observable<Array<string>> {
    return of(this.mockDataToDo);
  }

  public getMockDoing(): Observable<Array<string>> {
    return of(this.mockDataDoing);
  }

  public getMockDone(): Observable<Array<string>> {
    return of(this.mockDataDone);
  }

}
