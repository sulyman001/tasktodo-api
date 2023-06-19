import { DataSource, DataSourceOptions } from 'typeorm';

const ormOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '', // For production make sure you have a strong password
  database: 'nestjs',
  entities: [
    /*...*/
  ],
  migrations: ['dist/db/migrations/*.js'],
  migrationsTableName: 'custom_migration_table',
};

const dataSource = new DataSource(ormOptions);
export default dataSource;
