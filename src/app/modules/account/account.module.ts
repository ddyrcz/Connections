import { Module } from '@nestjs/common';
import { AccountController } from './controllers/account/account.controller';
import { PostsModule } from '../posts/posts.module';
import { UsersModule } from '../users/users.module';

@Module({
  modules: [
    PostsModule,
    UsersModule
  ],
  controllers: [
    AccountController
  ]
})
export class AccountModule { }
