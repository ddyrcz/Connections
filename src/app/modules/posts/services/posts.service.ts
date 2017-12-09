import { Component, Inject } from "@nestjs/common";
import { Model } from "mongoose";

import { PostDocument, Post } from "../post.interface";
import { Token } from "../../../token.enum";

@Component()
export class PostsService {
    constructor( @Inject(Token.PostModelToken) private readonly postModel: Model<PostDocument>) { }

    // // async getPostsForUsers(users: UserModel[], createdBefore: Date, take: number): Promise<PostModel[]> {
    // //     const posts: PostEntity[] = await this.postModel.find().exec();
    // //     return this.postEntityToModelMapper.mapList(posts);
    // // }

    // async createPost(post: Post): Promise<Post> {
    //     const entity: PostDocument = new this.postModel(post);
    //     return await entity.save();
    // }

    async getAll(): Promise<Post[]> {
        return await this.postModel.find().exec();
    }
}
