import { Component, Inject } from '@nestjs/common';
import { User, UserDocument } from '../user.interface';
import { Token } from '../../../token.enum';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { SHA256Service } from '../../auth/services/sha256/sha256.service';
import { Post, PostDocument } from '../../posts/post.interface';

@Component()
export class UsersService {
    constructor( @Inject(Token.UserModelToken) private readonly userModel: Model<UserDocument>,
        @Inject(Token.PostModelToken) private readonly postModel: Model<PostDocument>,
        private sha256: SHA256Service) { }

    async getUsers(query: string, createdBefore: Date, take: number): Promise<User[]> {
        return await this.userModel
            .find({ $or: [{ name: new RegExp(query, 'i') }, { lastname: new RegExp(query, 'i') }] })
            .find({ createdAt: { $lt: createdBefore } })
            .limit(take)
            .sort('-createdAt')
            .exec()
    }

    async getFollowingUsers(userId: ObjectId): Promise<ObjectId[]> {
        let userDocument = await this.userModel
            .findById(userId)
            .select('following')
            .exec()

        return userDocument.following;
    }

    async getById(id: string): Promise<User> {
        return await this.userModel.findById(id)
    }

    async follow(followerId: string, userToFollowId: string) {
        await this.userModel.findByIdAndUpdate(followerId, { $push: { following: new ObjectId(userToFollowId) } })
    }

    async unfollow(followerId: string, userToUnfollowId: string) {
        await this.userModel.findByIdAndUpdate(followerId, { $pull: { following: new ObjectId(userToUnfollowId) } })
    }

    async registerUser(user: User) {
        user.password = this.sha256.hash(user.password)
        const createdUser = new this.userModel(user);
        return await createdUser.save();
    }

    async updateAvatar(userId: string, newAvatarUrl: string) {

        await this.updateAvatarInPosts(userId, newAvatarUrl);

        // wait for mongoose support for MongoDB Server v.3.6
        // await this.updateAvatarInComments(userId, newAvatarUrl);

        return await this.userModel
            .findByIdAndUpdate(userId, { avatarUrl: newAvatarUrl })
            .exec()
    }

    private async updateAvatarInPosts(userId: string, newAvatarUrl: string) {
        await this.postModel.update({ "user._id": new ObjectId(userId) }, { "user.avatarUrl": newAvatarUrl })
    }

    private async updateAvatarInComments(userId: string, newAvatarUrl: string) {
        await this.postModel.update(
            {},
            {
                $set: {
                    "comments.$[comment].user.avatarUrl": newAvatarUrl
                }
            },
            {
                multi: true,
                arrayFilters: [{ "comment.user._id": new ObjectId(userId) }]
            })
    }
}
