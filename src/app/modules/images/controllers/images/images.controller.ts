import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import * as formidable from 'formidable';
import * as cloudinary from 'cloudinary';
import * as fs from 'fs';

cloudinary.config({
    cloud_name: 'ddyrcz',
    api_key: '331566296559366',
    api_secret: '2AZBmkOhmD6OsdxvsRIWz78O73o'
});

@Controller('images')
export class ImagesController {
    constructor() { }

    @Post()
    upload( @Req() req: Request, @Res() res: Response) {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            cloudinary.uploader.upload(files.file.path, function (result) {
                fs.unlink(files.file.path, (err) => {
                    res.json({ url: result.url })
                })
            });

        });
    }
}
