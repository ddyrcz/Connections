import { Body, Controller, Get, Post as HttpPost } from "@nestjs/common";
import { PostsService } from "../services/posts.service";

@Controller("posts")
export class PostsController {
    constructor(private postsService: PostsService) { }
}
