import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { PostsController } from "./controllers/posts.controller";
import { postsProviders } from "./posts.provider";
import { PostsService } from "./services/posts.service";

@Module({
  modules: [
    DatabaseModule
  ],
  controllers: [
    PostsController
  ],
  components: [
    PostsService,
    ...postsProviders
  ],
})
export class PostsModule { }
