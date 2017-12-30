import { Module, MiddlewaresConsumer, RequestMethod } from "@nestjs/common";
import { UsersModule } from "./modules/users/users.module";
import { PostsModule } from "./modules/posts/posts.module";
import { DatabaseModule } from "./modules/database/database.module";
import { DemoModule } from "./modules/demo/demo.module";
import { AccountModule } from "./modules/account/account.module";
import { ImagesModule } from "./modules/images/images.module";
import { AuthModule } from "./modules/auth/auth.module";
import { AuthMiddleware } from "./modules/auth/middlewares/auth/auth.middleware";

@Module({
    modules: [
        UsersModule,
        PostsModule,
        AccountModule,
        DemoModule,
        ImagesModule,
        AuthModule
    ],
})
export class ApplicationModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer.apply(AuthMiddleware)
            .forRoutes({
                path: '*', method: RequestMethod.ALL
            });
    }
}