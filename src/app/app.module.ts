import { Module } from "@nestjs/common";
import { UsersModule } from "./modules/users/users.module";
import { PostsModule } from "./modules/posts/posts.module";
import { DatabaseModule } from "./modules/database/database.module";
import { DemoModule } from "./modules/demo/demo.module";

@Module({
    modules: [
        UsersModule,
        PostsModule,
        DemoModule
    ],
})
export class ApplicationModule { }