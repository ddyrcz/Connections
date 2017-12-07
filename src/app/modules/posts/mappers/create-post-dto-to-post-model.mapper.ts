import MapperBase from "../../../shared/mapper.base";
import { CreatePostDto } from "../controllers/dto/create-post.dto";
import { PostModel } from "../model/post.model";

export class CreatePostDtoToPostModelMapper extends MapperBase<CreatePostDto, PostModel>{
    map(obj: CreatePostDto): PostModel {
        let post = new PostModel();
        obj.content = post.content;
        return post;
    }

}