import { Document } from 'mongoose';

export interface Post extends Document {
    readonly content: string,
    readonly publishedOn: Date,
    readonly publisherId: number,
    readonly imageUrl: string
}