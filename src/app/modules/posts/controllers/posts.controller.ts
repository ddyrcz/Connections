import { Body, Controller, Get, Post as HttpPost } from "@nestjs/common";
import { Post } from "../post.interface";
import { PostsService } from "../services/posts.service";

@Controller("posts")
export class PostsController {
    constructor(private postsService: PostsService) { }

    // @Post()
    // async createPost( @Body() postDto: CreatePostDto) {
    //     let post: PostModel = this.createPostDtoToPostModelMapper.map(postDto);

    //     post.publisherId = 1; // logged user

    //     return await this.postsService.createPost(post);
    // }

    @Get()
    public async getAll() {
        return await this.postsService.getAll();
    }
}
