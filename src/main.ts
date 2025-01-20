import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Notes API')
        .setDescription('The notes API description')
        .setVersion('1.0')
        .addApiKey(
            {
                type: 'apiKey',
                name: 'X-API-KEY',
                in: 'header',
                description: 'Enter your API key',
            },
            'X-API-KEY',
        )
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
