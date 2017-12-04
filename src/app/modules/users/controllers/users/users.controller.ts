import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { UserModel } from '../../models/user.model';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    async getAll() {
        let users: UserModel[] = await this.usersService.getAll()
        return users;
    }
}
