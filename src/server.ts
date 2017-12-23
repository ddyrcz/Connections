import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app/app.module';
import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';

import * as express from 'express'
import * as bodyParser from 'body-parser'

const server = express()
server.use(bodyParser.json());

const app: Promise<INestApplication> = NestFactory.create(ApplicationModule, server);
app.then(instance =>
  instance.listen(3100, () =>
    console.log('Application is listening on port 3100')
  )
);
