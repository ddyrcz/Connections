import { Schema, Types, SchemaTypes } from "mongoose";

export const UserSchema = new Schema({
    name: String,
    lastname: String,
    avatarUrl: String,
    following: [SchemaTypes.ObjectId]
})