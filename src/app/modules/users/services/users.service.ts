import { Component, Inject } from '@nestjs/common';
import { User, UserDocument } from '../user.interface';
import { Token } from '../../../token.enum';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';

@Component()
export class UsersService {
    constructor( @Inject(Token.UserModelToken) private readonly userModel: Model<UserDocument>) { }

    async getFollowingUsers(userId: ObjectId): Promise<ObjectId[]> {
        let userDocument = await this.userModel
            .findById(userId)
            .select('following')
            .exec()

        return userDocument.following;
    }
}
