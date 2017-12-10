import { Controller, Get, Param, Body, Post, Req, Delete } from '@nestjs/common';
import { DemoService } from '../services/demo.service';
import { Request } from 'express';
import { Demo } from '../demo.module';

@Controller('demo')
export class DemoController {
    constructor(private service: DemoService) { }

    @Get()
    async getAll() {
        return await this.service.getAll();
    }

    @Get(':id')
    async getById( @Param('id') id: string) {
        return await this.service.getById(id);
    }

    @Post()
    async create( @Body() demo: Demo, @Req() req: Request) {
        return await this.service.create(demo)
    }

    @Delete(':id')
    async delete( @Param('id') id: string) {
        return await this.service.delete(id);
    }
}
