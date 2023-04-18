import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import {GlobalExceptionFilter} from "nestjs-exceptions";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    console.log('EXCEPTION DATA:');
    console.log(exception);

    const ctx = host.switchToHttp();

    console.log('CONTEXT:');
    console.log(ctx);
  }
}


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
