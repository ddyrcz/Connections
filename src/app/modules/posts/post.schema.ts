import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
    content: String,
    publishedOn: Date,
    publisherId: Number,
    imageUrl: String
});