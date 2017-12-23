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
            .find({ $or: [{ name: { "$regex": query } }, { lastname: { "$regex": query } }] })
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
}
