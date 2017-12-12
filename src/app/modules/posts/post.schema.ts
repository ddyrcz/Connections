import * as mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

export const PostSchema = new mongoose.Schema({
    content: String,
    createdAt: Date,
    publisherId: Number,
    user: {
        _id: mongoose.SchemaTypes.ObjectId,
        name: String,
        lastname: String,
        avatarUrl: String
    },
    imageUrl: String
});