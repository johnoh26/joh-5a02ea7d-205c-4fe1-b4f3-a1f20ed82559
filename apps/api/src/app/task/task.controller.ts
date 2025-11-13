import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { Task } from 'libs/src/data/task.entity';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}
      //get tasks by user email
      @Get()
      async findByUserEmail(@Query('email') email: string): Promise<Task[]> {
        if (!email) {
          throw new NotFoundException('Email query parameter is required');
        }
        return this.taskService.findByUserEmail(email);
      }

      //get all tasks
      @Get('all')
      async findAll(): Promise<Task[]> {
        return this.taskService.findAll();
      }

      //get task by id
      @Get(':id')
      async findOne(@Param('id') id: number): Promise<Task> {
        const task = await this.taskService.findOne(id);
        if (!task) {
          throw new NotFoundException('task does not exist!');
        } else {
          return task;
        }
      }
    
      //create task
      @Post()
      async create(@Body() task: Task): Promise<Task> {
        return this.taskService.create(task);
      }
    
      //update task
      @Put(':id')
      async update(@Param('id') id: number, @Body() task: Task): Promise<any> {
        return this.taskService.update(id, task);
      }
    
      //delete task
      @Delete(':id')
      async delete(@Param('id') id: number): Promise<any> {
        //handle error if task does not exist
        const task = await this.taskService.findOne(id);
        if (!task) {
          throw new NotFoundException('task does not exist!');
        }
        return this.taskService.delete(id);
      }
    }