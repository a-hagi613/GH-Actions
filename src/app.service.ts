import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGoodbye(): string {
    return 'Goodbye World!';
  }

  getHome(): string {
    return 'Welcome to the Home Page. Hit the /hello or /goodbye enpoints to see more';
  }
}
