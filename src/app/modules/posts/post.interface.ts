import { Document } from "mongoose";

export interface Post {
    content: string;
    createdAt: Date;
    publisherId: number;
    imageUrl: string;
}

export interface PostDocument extends Post, Document {

}