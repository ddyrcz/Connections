import { Controller, Query, Res, Get, Post, Body } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { JwtGenerator } from '../../services/jwt-generator/jwt-generator.service';
import { Response } from 'express';
import { User } from '../../../users/user.interface';
import { UsersService } from '../../../users/services/users.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService,
        private jwtGenerator: JwtGenerator,
        private usersService: UsersService) { }

    @Post('login')
    async login( @Res() response: Response, @Query('email') email: string, @Query('password') password: string) {
        const user = await this.authService.authenticate(email, password);

        const token = await this.jwtGenerator.generateToken({
            _id: user._id
        })

        response.setHeader("x-access-token", token)

        response.json(user)
    }

    @Post('register')
    async registerUser( @Body() user: User) {
        return await this.usersService.registerUser(user);
    }
}
