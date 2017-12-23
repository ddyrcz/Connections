import { Body, Controller, Get, Post as HttpPost } from "@nestjs/common";
import { PostsService } from "../services/posts.service";
import { Post, PostDocument } from "../post.interface";
import { ObjectId } from "mongodb";

@Controller("posts")
export class PostsController {
    constructor(private postsService: PostsService) { }
}
