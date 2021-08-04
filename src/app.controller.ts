import { Controller, Get, Header, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

// app.controller.ts : a basic controller with a single route

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create() : string {
    return 'This action adds a new cat';
  }
  
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}