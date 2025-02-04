import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) {}

    async register(registerDto: RegisterDto) {
        const { name, email, password } = registerDto;

        // Проверка на существование пользователя
        const existingUser = await this.prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            throw new ConflictException('Email уже используется');
        }

        // Хэширование пароля
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            // Создание пользователя
            const defaultRole = await this.prisma.role.findUnique({ where: { name: 'USER' } });
            if (!defaultRole) {
                throw new BadRequestException('Роль не найдена');
            }

            const user = await this.prisma.user.create({
                data: {
                    name,
                    email,
                    password: hashedPassword,
                    roleId: defaultRole.id,
                },
            });

            // Генерация JWT токена
            const token = this.jwtService.sign({ userId: user.id });

            return { user: { id: user.id, name: user.name, email: user.email }, token };
        } catch (error) {
            throw new BadRequestException('Нельзя создать пользователя с такими данными');
        }
    }
}
