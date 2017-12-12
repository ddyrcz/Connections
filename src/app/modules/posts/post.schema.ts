import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
    content: String,
    createdAt: Date,
    publisherId: Number,
    user: {
        name: String,
        lastname: String,
        avatarUrl: String
    },
    imageUrl: String
});