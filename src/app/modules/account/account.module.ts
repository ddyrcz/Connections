import { Module } from '@nestjs/common';
import { AccountController } from './controllers/account/account.controller';

@Module({
  controllers: [
    AccountController
  ]
})
export class AccountModule { }
