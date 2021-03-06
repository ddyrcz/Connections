import { Component, Inject } from "@nestjs/common";
import { Model, Types } from "mongoose";

import { PostDocument, Post, Comment } from "../post.interface";
import { Token } from "../../../token.enum";
import { User, UserDocument } from "../../users/user.interface";
import { UsersService } from "../../users/services/users.service";
import { ObjectId } from "mongodb";

@Component()
export class PostsService {
    constructor( @Inject(Token.PostModelToken) private readonly postModel: Model<PostDocument>,
        private readonly usersService: UsersService) { }

    async getUserAndFriendsPosts(userId: ObjectId, createdBefore: Date, take: number): Promise<Post[]> {
        let userIds = await this.usersService.getFollowingUsers(userId)
        userIds.push(userId)

        return await this.postModel
            .find({ createdAt: { $lt: createdBefore } })
            .where('user._id').in(userIds)
            .limit(take)
            .sort({ createdAt: -1 })
            .exec()
    }

    async getUserPosts(userId: ObjectId, createdBefore: Date, take: number): Promise<Post[]> {
        return await this.postModel
            .find({ createdAt: { $lt: createdBefore } })
            .where('user._id').equals(userId)
            .limit(take)
            .sort({ createdAt: -1 })
            .exec()
    }

    async createPost(post: Post): Promise<Post> {
        const postDocument = new this.postModel(post);
        return await postDocument.save()
    }

    async addComment(postId: string, comment: Comment) {
        await this.postModel.findByIdAndUpdate(postId, { $push: { comments: comment } })
    }
}
