import { Schema, SchemaTypes } from 'mongoose';
import { ObjectId } from 'mongodb';

const CommentSchema = new Schema({
    content: String,
    createdAt: Date,
    user: {
        _id: SchemaTypes.ObjectId,
        name: String,
        lastname: String,
        avatarUrl: String
    }
})

export const PostSchema = new Schema({
    content: String,
    createdAt: Date,
    user: {
        _id: SchemaTypes.ObjectId,
        name: String,
        lastname: String,
        avatarUrl: String
    },
    imageUrl: String,
    comments: [CommentSchema]
});