import { Component } from '@nestjs/common';

import { UserModel } from '../../models/user.model'

@Component()
export class UsersService {
    constructor() { }

    getAll(): Promise<UserModel[]> {
        return Promise.resolve<UserModel[]>([
            { name: "John", lastName: "Bravo" }
        ])
    }
}
