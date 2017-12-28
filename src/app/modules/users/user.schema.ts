import { Schema, Types, SchemaTypes } from "mongoose";

export const UserSchema = new Schema({
    name: String,
    lastname: String,
    avatarUrl: String,
    createdAt: Date,
    following: [SchemaTypes.ObjectId],
    email: String,
    password: String
})