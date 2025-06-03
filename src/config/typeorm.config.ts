import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { User } from 'src/user/entities/user.entity';
import { Group } from 'src/group/entities/group.entity';
import { Post } from 'src/post/entities/post.entity';
import { Test } from 'src/test/entities/test.entity';
import { Testing } from 'src/testing/entities/testing.entity';
config();

const configService = new ConfigService();


const AppDataSource = new DataSource({
  type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'admin',
    database: 'crud-revision',
    username: 'postgres',
    synchronize: false,
    entities: ['**/*.entity.ts'],
    // "entities": ["dist/**/*.entity{ .ts,.js}"],
    migrations: ['src/database/migrations/*-migration.ts'],
    migrationsRun: false,
    logging: true,
    });

export default AppDataSource;