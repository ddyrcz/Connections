import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app/app.module';
import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';

import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'

const server = express()
server.use(bodyParser.json());
server.use(cors({ exposedHeaders: "x-access-token" }))

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(3000);
  console.log("Application is listening on port 3100");
  
}
bootstrap();