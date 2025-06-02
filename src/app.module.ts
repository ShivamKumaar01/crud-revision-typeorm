import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { GroupModule } from './group/group.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Group } from './group/entities/group.entity';
import { Post } from './post/entities/post.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'admin',
      username: 'postgres',
      entities: [User,Group,Post],
      database: 'crud-revision',
      synchronize: true,//Indicates if database schema should be auto created on every application launch.
      logging: true, 
      migrations:[] //it shows query in console
    }),UserModule, PostModule, GroupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
