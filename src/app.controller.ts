import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHome(): string {
    return this.appService.getHome();
  }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('goodbye')
  getGoodbye(): string {
    return this.appService.getGoodbye();
  }

  @Get('test1')
  getTest1(): string {
    return this.appService.getTest1();
  }


}
