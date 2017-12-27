import { Component, Inject } from '@nestjs/common';
import { User, UserDocument } from '../user.interface';
import { Token } from '../../../token.enum';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';

@Component()
export class UsersService {
    constructor( @Inject(Token.UserModelToken) private readonly userModel: Model<UserDocument>) { }

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
}
