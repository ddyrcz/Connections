import { Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface User {
    name: string,
    lastname: string,
    avatarUrl: string,
    createdAt: Date,
    following: [ObjectId],
    email: string,
    password: string
}

export interface UserDocument extends User, Document {

}