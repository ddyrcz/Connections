import { Module } from '@nestjs/common';
import { PostsService } from './services/posts/posts.service';
import { postsProviders } from './posts.provider';
import { PostsController } from './controllers/posts/posts.controller';
import { PostEntityToModelMapper } from './mappers/post-entity-to-model';
import { CreatePostDtoToPostModelMapper } from './mappers/create-post-dto-to-post-model.mapper';
import { PostModelToEntityMapper } from './mappers/post-model-to-entity';

@Module({
  components: [
    PostsService,
    ...postsProviders,
    PostsController,
    PostEntityToModelMapper,
    CreatePostDtoToPostModelMapper,
    PostModelToEntityMapper
  ]
})
export class PostsModule { }
