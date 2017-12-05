import * as mongoose from 'mongoose';
import { Constants } from './constants';

export const databaseProviders = [
    {
        provide: Constants.DbConnectionToken,
        useFactory: async () => {
            (mongoose as any).Promise = global.Promise;
            return await mongoose.connect('mongodb://localhost/connection_dev', {
                useMongoClient: true,
            });
        },
    },
];