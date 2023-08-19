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
    return 'Welcome to the Home Page. Hit the /hello, /goodbye, /test1 or /test2 enpdoints to see more';
  }

  getTest1(): string {
    return 'This is test endpoint 1';
  }

  getTest2(): string {
    return 'This is test endpoint 2';
  }
}
