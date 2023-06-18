/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  MaxLength
} from 'class-validator';

export class createTodoDto {
  @IsNotEmpty()
  @MaxLength(20, {message: 'Max length is 20 characters.'})
  title: string;

  @IsNotEmpty()
  description: string;

  // @IsDate()
  // @IsOptional()
  // createdDate
}
