 import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';

@Module({
    imports: [ConfigModule.forRoot(), UserModule, AdminModule],
    controllers: [],
    providers: [Logger],
})
export class AppModule {}
