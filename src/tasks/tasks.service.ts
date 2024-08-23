import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async getTasks(): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany();
    return tasks.map(this._transformTask);
  }

  async getTaskById(id: number): Promise<Task> {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) throw new NotFoundException('Task not found');
    return this._transformTask(task);
  }

  async createTask(title: string, description: string): Promise<Task> {
    const task = await this.prisma.task.create({
      data: { title, description },
    });
    return this._transformTask(task);
  }

  async updateTask(
    id: number,
    title: string,
    description: string,
    isDone: boolean,
  ): Promise<Task> {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) throw new NotFoundException('Task not found');

    const updatedTask = await this.prisma.task.update({
      where: { id },
      data: { title, description, isDone },
    });
    return this._transformTask(updatedTask);
  }

  async deleteTask(id: number): Promise<void> {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) throw new NotFoundException('Task not found');

    await this.prisma.task.delete({ where: { id } });
  }

  _transformTask(task: {
    id: number;
    title: string;
    description: string;
    isDone: boolean;
    createdAt: Date;
  }): Task {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      isDone: task.isDone,
      createdAt: task.createdAt,
    };
  }
}
