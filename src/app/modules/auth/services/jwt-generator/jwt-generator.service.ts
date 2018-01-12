import { Component } from '@nestjs/common';
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';

var config = JSON.parse(fs.readFileSync("/apps/connections/jwt.json") as any);

@Component()
export class JwtGenerator {
    constructor() { }

    generateToken(payload: any): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            jwt.sign(payload, config.secretKey, (err, token) => {
                resolve(token)
            })
        })
    }
}
