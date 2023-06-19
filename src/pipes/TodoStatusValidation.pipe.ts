import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { TodoStatus } from 'src/Entity/todo.entity';

export class TodoStatusValidationPipe implements PipeTransform {
  readonly allowedStatus = [
    TodoStatus.OPEN,
    TodoStatus.WIP,
    TodoStatus.COMPLETED,
  ];

  transform(value: any, ArgumentMetadata): any {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is an invalid status.`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const index = this.allowedStatus.indexOf(status);

    return index != -1;
  }
}
