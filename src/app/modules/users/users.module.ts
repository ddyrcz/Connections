import { Module } from "@nestjs/common";

import { UsersService } from "./services/users/users.service";
import { UsersController } from "./controllers/users.controller";

@Module({
  controllers: [
    UsersController
  ],
  components: [
    UsersService
  ]
})
export class UsersModule { }
