import { Module } from "@nestjs/common";

import { UsersController } from "./controllers/users.controller";
import { UsersService } from "./services/users.service";
import { usersProviders } from "./users.provider";
import { DatabaseModule } from "../database/database.module";

@Module({
  modules: [
    DatabaseModule
  ],
  controllers: [
    UsersController
  ],
  components: [
    UsersService,
    ...usersProviders
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule { }
