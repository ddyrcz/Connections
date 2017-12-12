import { Token } from "../../token.enum";
import { Connection } from "mongoose";
import { UserSchema } from "./user.schema";

export const usersProviders = [
    {
        provide: Token.UserModelToken,
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: [Token.DbConnectionToken]
    }
]