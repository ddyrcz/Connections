import { Module, forwardRef } from "@nestjs/common";

import { UsersController } from "./controllers/users.controller";
import { UsersService } from "./services/users.service";
import { usersProviders } from "./users.provider";
import { DatabaseModule } from "../database/database.module";
import { PostsModule } from "../posts/posts.module";
import { SHA256Service } from "../auth/services/sha256/sha256.service";

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
    ...usersProviders,
    SHA256Service
  ],
  exports: [
    UsersService,
    ...usersProviders
  ]
})
export class UsersModule { }
