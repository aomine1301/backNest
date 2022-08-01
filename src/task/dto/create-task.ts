import { PartialType } from '@nestjs/swagger';
import { Task } from '../task.entity';
import { StatusEnum } from '../task.interface';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto extends PartialType(Task) {
  @IsString({ message: 'task required, task must be string' })
  @IsNotEmpty({ message: 'task must be not empty string' })
  task: string;

  @IsOptional()
  @IsString({
    each: true,
    message: 'some elements or all elements are not a string ',
  })
  tags?: string[];

  @IsOptional()
  @IsEnum(StatusEnum, { message: 'not current type of status' })
  status?: StatusEnum;
}
