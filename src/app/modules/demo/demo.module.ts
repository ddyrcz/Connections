import { Module } from '@nestjs/common';
import { DemoController } from './controllers/demo.controller';
import { DemoService } from './services/demo.service';
import { Connection, Schema, Document, Model } from 'mongoose';
import { Token } from '../../token.enum';
import { DatabaseModule } from '../database/database.module';

const demoScheme = new Schema({
  name: String
})

export interface Demo {
  name: string
}

export interface DemoDocument extends Demo, Document {

}

@Module({
  modules: [
    DatabaseModule
  ],
  controllers: [
    DemoController
  ],
  components: [
    DemoService,
    {
      provide: "DemoModelToken",
      useFactory: (connection: Connection): Model<DemoDocument> => connection.model('demo', demoScheme),
      inject: [Token.DbConnectionToken]
    }
  ]
})
export class DemoModule { }
