import { Controller, Get, Query } from '@nestjs/common';
import { PostsService } from '../../../posts/services/posts.service';
import { ObjectId } from 'mongodb';

@Controller('account')
export class AccountController {
    constructor(private readonly postsService: PostsService) { }

    @Get('posts')
    async getPosts( @Query('createdBefore') createdBefore: Date, @Query('take') take: number) {
        const userId: ObjectId = new ObjectId("59201bfeec36dc29007cab1e")

        return await this.postsService.getPostsForUser(userId, createdBefore, Number(take));
    }
}
