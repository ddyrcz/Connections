import { Module, forwardRef } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { PostsController } from "./controllers/posts.controller";
import { postsProviders } from "./posts.provider";
import { PostsService } from "./services/posts.service";
import { UsersModule } from "../users/users.module";

@Module({
  modules: [
    DatabaseModule,
    forwardRef(() => UsersModule)
  ],
  controllers: [
    PostsController
  ],
  components: [
    PostsService,
    ...postsProviders
  ],
  exports: [
    PostsService
  ]
})
export class PostsModule { }
