import { Schema, Types } from "mongoose";

const schema = new Schema({
    name: String,
    lastname: String,
    avatarUrl: String,
    following: [Types.ObjectId]
})