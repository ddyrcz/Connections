import { Component, UnauthorizedException, Inject } from '@nestjs/common';
import { SHA256Service } from '../sha256/sha256.service';
import { Model } from 'mongoose';
import { UserDocument, User } from '../../../users/user.interface';
import { Token } from '../../../../token.enum';

@Component()
export class AuthService {
    constructor(private sha256: SHA256Service,
        @Inject(Token.UserModelToken) private userModel: Model<UserDocument>) { }

    async authenticate(email: string, password: string): Promise<UserDocument> {
        const hash: string = this.sha256.hash(password);

        const user = await this.userModel.findOne({
            email: email,
            password: hash
        })
            .select('-password')
            .exec()

        if (!user) {
            throw new UnauthorizedException("Błędne poświadczenia")
        }

        return user;
    }
}
