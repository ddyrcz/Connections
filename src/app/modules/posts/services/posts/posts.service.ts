import { Component, Inject } from '@nestjs/common';
import { UserModel } from '../../../users/models/user.model';
import { Model } from 'mongoose';
import { Constants } from '../../../../constants';
import { PostModel } from '../../model/post.model';
import { PostEntity } from '../../entity/post.entity';
import { PostEntityToModelMapper } from '../../mappers/post-entity-to-model';
import { PostModelToEntityMapper } from '../../mappers/post-model-to-entity';

@Component()
export class PostsService {
    constructor( @Inject(Constants.PostModelToken) private readonly postModel: Model<PostEntity>,
        private readonly postEntityToModelMapper: PostEntityToModelMapper,
        private readonly postModelToEntityMapper: PostModelToEntityMapper) { }

    async getPostsForUsers(users: UserModel[], createdBefore: Date, take: number): Promise<PostModel[]> {
        let posts = await this.postModel.find().exec();
        return this.postEntityToModelMapper.mapList(posts)
    }

    async createPost(post: PostModel): Promise<PostModel> {
        const entity = new this.postModel(post);
        return await entity.save()
    }
}
