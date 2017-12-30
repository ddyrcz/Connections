import { Controller, Get, Query, ParseIntPipe, Body, Post, Param, Req } from '@nestjs/common';
import { PostsService } from '../../../posts/services/posts.service';
import { ObjectId } from 'mongodb';
import { ParseDatePipe } from '../../../shared/pipes/parse-date.pipe';
import { PostDocument } from '../../../posts/post.interface';
import { UsersService } from '../../../users/services/users.service';
import { Request } from 'express';
import { User } from '../../../users/user.interface';

@Controller('account')
export class AccountController {
    constructor(private readonly postsService: PostsService,
        private usersService: UsersService) { }

    @Get('posts')
    async getPosts( @Req() request: Request, @Query('createdBefore', new ParseDatePipe()) createdBefore: Date, @Query('take', new ParseIntPipe()) take: number) {
        const user = (request as any).user
        return await this.postsService.getUserAndFriendsPosts(new ObjectId(user._id), createdBefore, take);
    }

    @Post('posts')
    async createPost( @Req() request: Request, @Body() post: PostDocument) {
        post.user = (request as any).user
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
