import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';

const ormOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '', // For production make sure you have a strong password
  database: 'nestjs',
  // autoLoadEntities: true, //Do not use this for production.
  // synchronize: true,
  entities: [
    /*...*/
  ],
  migrations: [
    /*...*/
  ],
  migrationsTableName: 'custom_migration_table',
};
@Module({
  imports: [TodoModule, TypeOrmModule.forRoot(ormOptions), TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
