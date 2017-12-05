import { Connection } from 'mongoose';
import { PostSchema } from './schemas/post.schema';
import { Constants } from '../../constants';

export const postsProviders = [
    {
        provide: Constants.PostModelToken,
        useFactory: (connection: Connection) => connection.model('Post', PostSchema),
        inject: [Constants.DbConnectionToken],
    },
];