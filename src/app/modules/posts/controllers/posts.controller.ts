import { Body, Controller, Get, Post as HttpPost, Param } from "@nestjs/common";
import { PostsService } from "../services/posts.service";
import { Post, PostDocument, Comment } from "../post.interface";
import { ObjectId } from "mongodb";

@Controller("posts")
export class PostsController {
    constructor(private postsService: PostsService) { }

    @HttpPost(':id/comments')
    async addComment( @Param('id') postId: string, @Body() comment: Comment) {
        await this.postsService.addComment(postId, comment)
    }
}
