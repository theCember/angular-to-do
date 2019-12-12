import { Injectable } from '@angular/core';
import { createMockData } from '../mocks/mock-data';
import { Task } from '../../shared/models/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private mockData: Array<Task>;

  constructor() { 
    this.mockData = createMockData();
  }

  public getMockData(): Observable<Array<Task>> {
    return of(this.mockData);
  }

}
