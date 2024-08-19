import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks';

@Controller('api/v1/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  async getTask(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(Number(id));
  }

  @Post()
  async createTask(
    @Body() body: { title: string; description: string },
  ): Promise<Task> {
    return this.tasksService.createTask(body.title, body.description);
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() body: { title: string; description: string; isDone: boolean },
  ): Promise<Task> {
    return this.tasksService.updateTask(
      Number(id),
      body.title,
      body.description,
      body.isDone,
    );
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<void> {
    return this.tasksService.deleteTask(Number(id));
  }
}
