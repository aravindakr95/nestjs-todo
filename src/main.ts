import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // use validation pipe for validate dtos using class validator
  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }))
  await app.listen(3001);
}
bootstrap();
