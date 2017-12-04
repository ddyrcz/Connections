import {Module} from '@nestjs/common';
import {PostsService} from './services/posts/posts.service';

@Module({
  components: [
    PostsService
  ]
})
export class PostsModule {}
