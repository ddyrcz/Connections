import { Component } from '@nestjs/common';

import * as crypto from 'crypto'

@Component()
export class SHA256Service {
    constructor() { }

    hash(password: string) {
        return crypto
            .createHash('sha256')
            .update(password)
            .digest('hex')
    }
}
