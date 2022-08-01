import { Injectable } from '@nestjs/common';
import { TaskI } from './task.interface';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task';

@Injectable()
export class TaskService {
  private tasks: TaskI[] = [];
  getTasks(): TaskI[] {
    return this.tasks;
  }

  getTaskById(id: number): TaskI {
    return this.tasks.find((item) => (item.id = id));
  }
  createTask({ task, tags, status }: CreateTaskDto) {
    const newTask = new Task(task, tags, status);
    this.tasks.push(newTask);
    return newTask;
  }
  updateTaskById(task: TaskI): TaskI[] {
    const updatedTasksId = this.tasks.findIndex((t) => t.id === task.id);
    this.tasks[updatedTasksId].task = this.tasks[updatedTasksId].task =
      task.task;
    return this.tasks;
  }
  deleteTasksById(id: number): TaskI[] {
    const updatedTasksId = this.tasks.findIndex((t) => t.id === id + 1);
    return this.tasks.splice(updatedTasksId, 1);
  }
}
