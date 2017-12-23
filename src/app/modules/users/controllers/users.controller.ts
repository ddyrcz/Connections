import { Controller, Get, Query, Param, ParseIntPipe } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { PostsService } from "../../posts/services/posts.service";
import { ObjectId } from "mongodb";
import { ParseDatePipe } from "../../shared/pipes/parse-date.pipe";

@Controller("users")
export class UsersController {
    constructor(
        private usersService: UsersService,
        private postsService: PostsService) { }

    @Get()
    async getUsers( @Param('query') query: string, @Param('createdBefore', new ParseDatePipe()) createdBefore: Date, @Query('take', new ParseIntPipe()) take: number) {
        return await this.usersService.getUsers(query, createdBefore, take);
    }

    @Get(':id/posts')
    async getPosts( @Param('id') id: string, @Query('createdBefore', new ParseDatePipe()) createdBefore: Date, @Query('take', new ParseIntPipe()) take: number) {
        return await this.postsService.getUserPosts(new ObjectId(id), createdBefore, take);
    }
}
