import { Component, Inject } from '@nestjs/common';
import { UserModel } from '../../../users/models/user.model';
import { Model } from 'mongoose';
import { Post } from '../../interfaces/post.interface';

@Component()
export class PostsService {
    constructor( @Inject('CatModelToken') private readonly postModel: Model<Post>) { }

    async getPostsForUsers(users: UserModel[], createdBefore: Date, take: number): Promise<Post[]> {
        return this.postModel.find().exec();
    }
}
