import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskI } from './task.interface';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task';

@Controller('tasks')
export class TaskController {
  constructor(private testService: TaskService) {}
  @Get()
  getTasks() {
    return this.testService.getTasks();
  }
  @Get(':id')
  getTaskById(@Param('id') id: number): TaskI {
    return this.testService.getTaskById(id);
  }
  @UsePipes(new ValidationPipe())
  @Post()
  createTask(@Body() task: CreateTaskDto) {
    return this.testService.createTask(task);
  }
  @Put()
  updateTaskById(@Body('task') taskBody: TaskI) {
    return this.testService.updateTaskById(taskBody);
  }
  @Delete(':id')
  deleteTasksById(@Param('id') id: number) {
    return this.testService.deleteTasksById(id);
  }
}
