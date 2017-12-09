import { Module } from "@nestjs/common";
import { UsersModule } from "./modules/users/users.module";
import { PostsModule } from "./modules/posts/posts.module";
import { DatabaseModule } from "./modules/database/database.module";

@Module({
    modules: [
        UsersModule,
        PostsModule
    ],
})
export class ApplicationModule { }