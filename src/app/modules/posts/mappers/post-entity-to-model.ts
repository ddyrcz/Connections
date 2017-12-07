import MapperBase from "../../../shared/mapper.base";
import { PostEntity } from "../entity/post.entity";
import { PostModel } from "../model/post.model";

export class PostEntityToModelMapper extends MapperBase<PostEntity, PostModel>{
    map(obj: PostEntity): PostModel {
        let mappedPost = new PostModel();

        mappedPost.content = obj.content
        mappedPost.imageUrl = obj.imageUrl
        mappedPost.publishedOn = obj.publishedOn
        mappedPost.publisherId = obj.publisherId

        return mappedPost;
    }
}