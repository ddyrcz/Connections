import { Controller, Get, Query, ParseIntPipe, Body, Post, Param, Req } from '@nestjs/common';
import { PostsService } from '../../../posts/services/posts.service';
import { ObjectId } from 'mongodb';
import { ParseDatePipe } from '../../../shared/pipes/parse-date.pipe';
import { PostDocument } from '../../../posts/post.interface';
import { UsersService } from '../../../users/services/users.service';
import { Request } from 'express';
import { User, UserDocument } from '../../../users/user.interface';

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
        post.user = (await this.usersService.getById((request as any).user._id)) as UserDocument
        return await this.postsService.createPost(post);
    }

    @Post('users/:id/follow')
    async follow( @Req() request: Request, @Param('id') userId: string) {
        const user = (request as any).user
        await this.usersService.follow(user._id, userId)
    }

    @Post('users/:id/unfollow')
    async unfollow( @Req() request: Request, @Param('id') userId: string) {
        const user = (request as any).user
        await this.usersService.unfollow(user._id, userId)
    }
}
