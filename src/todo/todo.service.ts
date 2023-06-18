/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createTodoDto } from 'src/DTO/create-todo.dto';
import { TodoEntity, TodoStatus } from 'src/Entity/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {

  //Fetching data from database
  constructor(@InjectRepository(TodoEntity) private repo: Repository<TodoEntity>){}


  async getAllTodos(){
    return await this.repo.find();
  }
  // getAllTodos() {
  //   //return ['Todo1', 'Todo2'];
  // }

  // For data not created in the DTO
  /*
  async createTodo(title: string, description: string){
    const todo = new TodoEntity();
    todo.title = title;
    todo.description = description;
    todo.status = TodoStatus.OPEN;

    this.repo.create(todo);
    return await this.repo.save(todo);
  }
  */

  async createTodo(createTodoDTO: createTodoDto){
    const todo = new TodoEntity();
    const {title, description} = createTodoDTO;
    todo.title = title;
    todo.description = description;
    todo.status = TodoStatus.OPEN;
    // todo.date = createTodoDTO.createdDate;

    this.repo.create(todo);
    try{
      return await this.repo.save(todo);
    } catch (err) {
      throw new InternalServerErrorException('Something went wrong, todo not created');
    }
  }

}
