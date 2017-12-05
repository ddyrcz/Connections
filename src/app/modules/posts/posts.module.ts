import { Module } from '@nestjs/common';
import { PostsService } from './services/posts/posts.service';
import { postsProviders } from './posts.provider';

@Module({
  components: [
    PostsService,
    ...postsProviders
  ]
})
export class PostsModule { }
