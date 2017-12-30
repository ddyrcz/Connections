import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { SHA256Service } from './services/sha256/sha256.service';
import { UsersModule } from '../users/users.module';
import { AuthService } from './services/auth/auth.service';
import { JwtGenerator } from './services/jwt-generator/jwt-generator.service';
import { JwtValidator } from './services/jwt-validator/jwt-validator.service';


@Module({
  controllers: [
    AuthController
  ],
  modules: [
    UsersModule
  ],
  components: [
    SHA256Service,
    AuthService,
    JwtGenerator,
    JwtValidator
  ],
  exports: [JwtValidator]
})
export class AuthModule { }
