import { Document } from "mongoose";
import { User, UserDocument } from "../users/user.interface";
import { ObjectId } from "mongodb";


export interface Comment {
    content: String,
    createdAt: Date,
    user: {
        _id: ObjectId,
        name: String,
        lastname: String,
        avatarUrl: String
    }
}


export interface Post {
    content: string;
    createdAt: Date;
    user: {
        _id: ObjectId,
        name: String,
        lastname: String,
        avatarUrl: String
    },
    imageUrl: string;
    comments: Comment[]
}

export interface PostDocument extends Post, Document {

}