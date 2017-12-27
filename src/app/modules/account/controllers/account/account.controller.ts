import { Controller, Get, Query, ParseIntPipe, Body, Post, Param } from '@nestjs/common';
import { PostsService } from '../../../posts/services/posts.service';
import { ObjectId } from 'mongodb';
import { ParseDatePipe } from '../../../shared/pipes/parse-date.pipe';
import { PostDocument } from '../../../posts/post.interface';
import { UsersService } from '../../../users/services/users.service';

@Controller('account')
export class AccountController {
    constructor(private readonly postsService: PostsService,
        private usersService: UsersService) { }

    @Get('posts')
    async getPosts( @Query('createdBefore', new ParseDatePipe()) createdBefore: Date, @Query('take', new ParseIntPipe()) take: number) {
        // from TOKEN
        const userId: ObjectId = new ObjectId("59201bfeec36dc29007cab1e")
        return await this.postsService.getUserAndFriendsPosts(userId, createdBefore, take);
    }

    @Post('posts')
    async createPost( @Body() post: PostDocument) {

        // from TOKEN
        post.user = {
            _id: new ObjectId("59201bfeec36dc29007cab1e"),
            avatarUrl: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png',
            name: 'Dawid',
            lastname: 'Dyrcz'
        }

        return await this.postsService.createPost(post);
    }

    @Post('users/:id/follow')
    async follow( @Param('id') userId: string) {
        await this.usersService.follow("59201bfeec36dc29007cab1e", userId)
    }

    @Post('users/:id/unfollow')
    async unfollow( @Param('id') userId: string) {
        await this.usersService.unfollow("59201bfeec36dc29007cab1e", userId)
    }
}
