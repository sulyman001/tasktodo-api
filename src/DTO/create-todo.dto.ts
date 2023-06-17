import { IsDate, IsNotEmpty, IsOptional, Length, MaxLength } from 'class-validator';

export class createTodoDto {
  @IsNotEmpty()
  // @MaxLength(max: 15, validationOptions: {message: 'Max length is 15 characters.'})
  title: string;

  @IsNotEmpty()
  description: string;

  // @IsDate()
  // @IsOptional()
  // createdDate
}
