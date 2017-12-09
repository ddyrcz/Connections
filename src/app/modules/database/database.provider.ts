import * as mongoose from "mongoose";
import { Token } from "../../token.enum";

export const databaseProviders = [
    {
        provide: Token.DbConnectionToken,
        useFactory: async () => {
            (mongoose as any).Promise = global.Promise;
            return await mongoose.connect("mongodb://localhost/connection_dev", {
                useMongoClient: true,
            });
        },
    },
];