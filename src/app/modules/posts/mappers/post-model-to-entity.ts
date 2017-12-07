import MapperBase from "../../../shared/mapper.base";
import { PostEntity } from "../entity/post.entity";
import { PostModel } from "../model/post.model";
import { Model } from "mongoose";

export class PostModelToEntityMapper extends MapperBase<PostModel, Model<PostEntity>>{
    map(obj: PostModel): Model<PostEntity> {
        let post: Model<PostEntity> = new Model(obj)
        return post;
    }
}