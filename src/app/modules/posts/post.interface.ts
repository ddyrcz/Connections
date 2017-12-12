import { Document } from "mongoose";
import { User, UserDocument } from "../users/user.interface";
import { ObjectId } from "mongodb";

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
}

export interface PostDocument extends Post, Document {

}