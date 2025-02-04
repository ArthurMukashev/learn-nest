import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { AdminModule } from './admin/admin.module';
import { ScheduleModule } from './schedule/schedule.module';
import { NewsModule } from './news/news.module';
import { ForumModule } from './forum/forum.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        PrismaModule,
        AuthModule,
        UserModule,
        ProfileModule,
        AdminModule,
        ScheduleModule,
        NewsModule,
        ForumModule,
    ],
    controllers: [],
    providers: [Logger],
})
export class AppModule {}
