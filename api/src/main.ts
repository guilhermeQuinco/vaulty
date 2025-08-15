import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Vaulty API')
    .setVersion('1.0')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDocument);
  app.enableCors({
    origin: '*',
    methods: '*',
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.API_PORT || 3000);
}
bootstrap();
