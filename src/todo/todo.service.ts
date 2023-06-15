/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from 'src/Entity/todo.entity';
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
}
