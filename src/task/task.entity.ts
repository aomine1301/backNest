import { StatusEnum, TaskI } from './task.interface';

export class Task implements TaskI {
  id = new Date().getTime();
  task: string;
  tags: string[] = [];
  status: StatusEnum = StatusEnum.CREATED;
  createdAt: Date = new Date();
  updateAt: Date = new Date();

  constructor(task: string, tags?: string[], status?: StatusEnum) {
    this.task = task;
    this.tags = tags;
    this.status = status;
  }
}
