import { Body, Controller, Get, Post } from "@nestjs/common";
import { PostsService } from "../../services/posts.service";
import { CreatePostDto } from "../dto/create-post.dto";

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
