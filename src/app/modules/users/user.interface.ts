import { Document } from "mongoose";

export interface User {
    name: string,
    lastname: string,
    avatarUrl: string,
    following: [string]
}

export interface UserDocument extends User, Document {

}