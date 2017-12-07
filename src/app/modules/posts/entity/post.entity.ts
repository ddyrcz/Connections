import { Document } from 'mongoose';

export interface PostEntity extends Document {
    content: string
    publishedOn: Date
    publisherId: number
    imageUrl: string
}