import { Controller, Post, Body } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostModel } from '../../model/post.model';
import { CreatePostDtoToPostModelMapper } from '../../mappers/create-post-dto-to-post-model.mapper';
import { PostsService } from '../../services/posts/posts.service';

@Controller()
export class PostsController {
    constructor(private createPostDtoToPostModelMapper: CreatePostDtoToPostModelMapper,
        private postsService: PostsService) { }

    @Post()
    async createPost( @Body() postDto: CreatePostDto) {
        let post: PostModel = this.createPostDtoToPostModelMapper.map(postDto)

        post.publisherId = 1 // logged user

        return await this.postsService.createPost(post);
    }
}
