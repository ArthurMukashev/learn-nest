import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import * as process from 'node:process';

@Module({
    imports: [
        PrismaModule,
        PassportModule,
        ConfigModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'test-secret',
            signOptions: { expiresIn: '1d' },
        }),
    ],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
