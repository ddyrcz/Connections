import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { databaseProviders } from './database.provider';

@Module({
    modules: [
        UsersModule
    ],
    components: [
        ...databaseProviders
    ]
})
export class ApplicationModule { }