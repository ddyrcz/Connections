import { Module } from '@nestjs/common';
import { AccountController } from './controllers/account/account.controller';
import { PostsModule } from '../posts/posts.module';

@Module({
  modules: [
    PostsModule
  ],
  controllers: [
    AccountController
  ]
})
export class AccountModule { }
