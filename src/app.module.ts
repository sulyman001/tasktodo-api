import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';

const ormOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '', // For production make sure you have a strong password
  database: 'nestjs',
  autoLoadEntities: true, //Do not use this for production.
  synchronize: true,
  entities: [
    /*...*/
  ],
  migrations: [
    /*...*/
  ],
  migrationsTableName: 'Migration_Table',
};
@Module({
  imports: [TodoModule, TypeOrmModule.forRoot(ormOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
