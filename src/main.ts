import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'node:process';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const start = async () => {
    try {
        const PORT = process.env.PORT || 5000;
        const app = await NestFactory.create(AppModule);

        const config = new DocumentBuilder()
            .setTitle('API')
            .setDescription('API description')
            .setVersion('1.0')
            .addTag('Users')
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api', app, document);

        await app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
