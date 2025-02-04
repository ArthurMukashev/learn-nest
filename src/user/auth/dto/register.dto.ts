import { ApiProperty } from '@nestjs/swagger';

export class UserRegisterDto {
    @ApiProperty()
    email: string;

    name: string;
}
