import { Component } from '@nestjs/common';
import { UserModel } from '../../../users/models/user.model';
import { PostModel } from '../../models/post.model';

@Component()
export class PostsService {
    constructor() { }

    getPostsForUsers(users: UserModel[], createdBefore: Date, take: number): Promise<PostModel[]> {
        return Promise.resolve<PostModel[]>([
            { userId: 1, content: "Hello world!" }
        ])
    }
}
