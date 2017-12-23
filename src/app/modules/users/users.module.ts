import { Module } from "@nestjs/common";

import { UsersController } from "./controllers/users.controller";
import { UsersService } from "./services/users.service";
import { usersProviders } from "./users.provider";
import { DatabaseModule } from "../database/database.module";
import { PostsModule } from "../posts/posts.module";

@Module({
  modules: [
    DatabaseModule,
    PostsModule
  ],
  controllers: [
    UsersController
  ],
  components: [
    UsersService,
    ...usersProviders
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule { }
