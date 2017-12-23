import { Module } from '@nestjs/common';
import { ParseDatePipe } from './pipes/parse-date.pipe';

@Module({
    components: [ParseDatePipe],
    exports: [ParseDatePipe]
})
export class SharedModule { }
