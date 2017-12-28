import { Controller, Query, Res, Get, Post } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { JwtGenerator } from '../../services/jwt-generator/jwt-generator.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService,
        private jwtGenerator: JwtGenerator) { }

    @Post()
    async login( @Res() response: Response, @Query('email') email: string, @Query('password') password: string) {
        const user = await this.authService.authenticate(email, password);

        const token = await this.jwtGenerator.generateToken({
            _id: user._id
        })

        response.json({
            token: token
        })
    }
}
