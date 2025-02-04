import { Injectable } from '@nestjs/common';
import { UserRegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    async register(dto: UserRegisterDto) {
        console.log(dto);
        return 'OK';
    }
}
