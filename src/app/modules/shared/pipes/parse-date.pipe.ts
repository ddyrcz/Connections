import { PipeTransform, Pipe, ArgumentMetadata } from '@nestjs/common';

@Pipe()
export class ParseDatePipe implements PipeTransform<string> {
    public transform(value: string, metadata: ArgumentMetadata) {
        return new Date(value);
    }
}
