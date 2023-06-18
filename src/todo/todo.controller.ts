/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { createTodoDto } from 'src/DTO/create-todo.dto';

//http://localhost:3000/api/todo
//the api is created in the main.ts file
@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  //http Get
  @Get()
  getAllTodos() {
    // console.log(this.todoService.getAllTodos());

    // To return to the frontend
    return this.todoService.getAllTodos();
  }

  // http post
  @Post()
  createNewTodo(@Body(ValidationPipe) data: createTodoDto){
    // const {title, description} = data;
    // return this.todoService.createTodo(title, description);

    // For better programming- title and description will be created in the DTO file
    return this.todoService.createTodo(data);
  }

  // http update
}
//Checking if this is resolved
