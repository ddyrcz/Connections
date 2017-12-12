import { Body, Controller, Get, Post as HttpPost } from "@nestjs/common";
import { PostsService } from "../services/posts.service";
import { Post, PostDocument } from "../post.interface";
import { ObjectId } from "mongodb";

@Controller("posts")
export class PostsController {
    constructor(private postsService: PostsService) { }

    @HttpPost()
    async createPost( @Body() post: PostDocument) {
        post.user = {
            _id: new ObjectId("59201bfeec36dc29007cab1e"),
            name: "Dawid",
            lastname: "Dyrcz",
            avatarUrl: "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
        }

        return await this.postsService.createPost(post);
    }
}
