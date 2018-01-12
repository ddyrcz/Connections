import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import * as formidable from 'formidable';
import * as cloudinary from 'cloudinary';
import * as fs from 'fs';

var config = JSON.parse(fs.readFileSync("/apps/connections/service/cloudinary/config.json") as any);

cloudinary.config({
    cloud_name: config.cloud_name,
    api_key: config.api_key,
    api_secret: config.api_secret
});

@Controller('images')
export class ImagesController {
    @Post()
    upload( @Req() req: Request, @Res() res: Response) {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            cloudinary.uploader.upload(files.file.path, function (result) {
                // remove file
                fs.unlink(files.file.path, (err) => {
                    res.json({ fileUrl: result.url })
                })
            });
        });
    }
}
