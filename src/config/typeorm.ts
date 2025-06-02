import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  synchronize: false,
  password: 'admin',
  database: 'crud-revision',
  migrations: ['src/db/migrations/*{.ts,.js}'],
  entities: ['src/**/*.entity{.ts,.js}'],
});