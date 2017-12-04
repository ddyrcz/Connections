import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';

@Module({
    modules: [
        UsersModule
    ]
})
export class ApplicationModule { }