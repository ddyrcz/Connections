import { Controller, Get, Query, Param } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { PostsService } from "../../posts/services/posts.service";
import { ObjectId } from "mongodb";

@Controller("users")
export class UsersController {
    constructor(
        private usersService: UsersService,
        private postsService: PostsService) { }

    @Get()
    async getUsers( @Param('query') query: string, @Param('createdBefore') createdBefore: Date, @Query('take') take: Number) {
        return await this.usersService.getUsers(query, createdBefore, Number(take));
    }

    @Get(':id/posts')
    async getPosts( @Param('id') id: string, @Query('createdBefore') createdBefore: Date, @Query('take') take: number) {
        return await this.postsService.getUserPosts(new ObjectId('id'), createdBefore, take);
    }
}
