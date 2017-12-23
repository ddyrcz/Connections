import { Module, forwardRef } from "@nestjs/common";

import { UsersController } from "./controllers/users.controller";
import { UsersService } from "./services/users.service";
import { usersProviders } from "./users.provider";
import { DatabaseModule } from "../database/database.module";
import { PostsModule } from "../posts/posts.module";

@Module({
  modules: [
    DatabaseModule,
    forwardRef(() => PostsModule)
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
