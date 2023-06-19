/* eslint-disable prettier/prettier */
import { Body, Controller, /*Delete,*/ Get, /*Param, Patch,*/ Post, ValidationPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { createTodoDto } from 'src/DTO/create-todo.dto';
// import { TodoStatus } from 'src/Entity/todo.entity';
// import { TodoStatusValidationPipe } from 'src/pipes/TodoStatusValidation.pipe';

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

  /*
  // http update
  @Patch(':id')
  updateTodo(@Body('status', TodoStatusValidationPipe) status: TodoStatus, @Param('id') id: number){
    return this.todoService.update(id, status);
  }

  // http delete 
  @Delete(':id')
  deleteTodo(@Param('id') id: number) {
    return this.todoService.delete(id);
  }
  */
}
//Checking if this is resolved
