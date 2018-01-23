import { Component, Inject, HttpException } from '@nestjs/common';
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
            .select('-password')
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
        await this.checkEmailUniqueness(user.email)

        user.password = this.sha256.hash(user.password)
        const createdUser = new this.userModel(user);
        return await createdUser.save();
    }

    private async checkEmailUniqueness(email: string) {
        const numberOfSameEmails = await this.userModel.count({ email: email })

        if (numberOfSameEmails > 0) {
            throw new HttpException('Podany adres email już istnieje', 400)
        }
    }

    async updateAvatar(userId: string, newAvatarUrl: string) {

        await this.updateAvatarInPosts(userId, newAvatarUrl);

        await this.updateAvatarInComments(userId, newAvatarUrl);

        return await this.userModel
            .findByIdAndUpdate(userId, { avatarUrl: newAvatarUrl })
            .exec()
    }

    private async updateAvatarInPosts(userId: string, newAvatarUrl: string) {
        await this.postModel.update({ "user._id": new ObjectId(userId) }, { "user.avatarUrl": newAvatarUrl }, { multi: true })
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
