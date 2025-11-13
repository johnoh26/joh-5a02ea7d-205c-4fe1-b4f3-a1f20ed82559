import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskListResponse, TaskResponse } from 'libs/src/data/returns';
import { Task } from 'libs/src/data/task.entity';
import { User } from 'libs/src/data/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async findAll(): Promise<TaskListResponse> {
    return this.taskRepository.find();
  }

  async findOne(id: number): Promise<TaskResponse | null> {
    return this.taskRepository.findOne({ where: { id } });
  }

  async create(Task: Partial<Task>): Promise<TaskResponse> {
    const newTask = this.taskRepository.create(Task);
    return this.taskRepository.save(newTask);
  }

  async update(id: number, Task: Partial<Task>): Promise<TaskResponse | null> {
    await this.taskRepository.update(id, Task);
    return this.taskRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }

  async findByUserEmail(email: string): Promise<TaskListResponse> {
    // look up user by email
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      return [];
    }
    // return all tasks where userId matches
    return this.taskRepository.find({ where: { userId: user.id } });
  }
}
