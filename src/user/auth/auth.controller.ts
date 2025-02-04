import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserRegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('me')
    async me() {
        return 'OKsdsadsad';
    }

    @Post('register')
    async register(@Body() dto: UserRegisterDto) {
        return await this.authService.register(dto);
    }
}
