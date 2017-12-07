import { Connection } from 'mongoose';
import { Constants } from '../../constants';
import { PostSchema } from './entity/post.schema'

export const postsProviders = [
    {
        provide: Constants.PostModelToken,
        useFactory: (connection: Connection) => connection.model('Post', PostSchema),
        inject: [Constants.DbConnectionToken],
    },
];