import { Connection } from "mongoose";
import { Token } from "../../token.enum";
import { PostSchema } from "./post.schema";

export const postsProviders = [
    {
        provide: Token.PostModelToken,
        useFactory: (connection: Connection) => connection.model("Post", PostSchema),
        inject: [Token.DbConnectionToken],
    },
];