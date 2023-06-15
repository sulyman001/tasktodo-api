/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';

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
}
//Checking if this is resolved
