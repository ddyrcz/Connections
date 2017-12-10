import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { DemoDocument, Demo } from '../demo.module';

@Component()
export class DemoService {
    constructor( @Inject('DemoModelToken') private DemoModel: Model<DemoDocument>) { }

    async getAll(): Promise<Demo[]> {
        return await this.DemoModel.find().exec();
    }

    async getById(id: string): Promise<Demo> {
        return await this.DemoModel.findById(id).exec()
    }

    async create(demo: Demo): Promise<Demo> {
        const demoDocument = new this.DemoModel(demo);
        return await demoDocument.save()
    }

    async delete(id: string): Promise<Demo> {
        const demoDocument = await this.DemoModel.findById(id);
        return await demoDocument.remove()
    }
}
