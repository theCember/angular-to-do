import { KanbanState, Task } from "../../shared/models/task";

export const createMockData = () => {
  let mockTask1 = new Task("cook a dinner");
  let mockTask2 = new Task("do the dishes");
  mockTask2.setState(KanbanState.DOING);
  let mockTask3 = new Task("find new job");
  mockTask3.setState(KanbanState.DONE);
  return [mockTask1, mockTask2, mockTask3];
};
