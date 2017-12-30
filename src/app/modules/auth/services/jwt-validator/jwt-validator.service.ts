import { Component } from '@nestjs/common';
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';


var config = JSON.parse(fs.readFileSync("C:\\connections\\jwt.json") as any);

@Component()
export class JwtValidator {
    constructor() { }

    validate(token: string): any {
        return new Promise((resolve, reject) => {
            jwt.verify(token, config.secretKey, (err, token) => {
                if (err) reject(err)
                resolve(token)
            })
        })
    }
}
