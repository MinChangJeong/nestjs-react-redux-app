import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// main.ts : the entry file of the application which uses the core function

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
