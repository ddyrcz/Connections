import { Controller, Get } from "@nestjs/common";

import { UsersService } from "../services/users/users.service";

@Controller("users")
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    async getAll() {
        return await this.usersService.getAll();
    }
}