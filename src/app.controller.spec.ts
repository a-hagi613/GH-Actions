import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('should return "Goodbye World!"', () => {
      expect(appController.getGoodbye()).toBe('Goodbye World!');
    });

    it('should return "This is test endpoint 1"', () => {
      expect(appController.getTest1()).toBe('This is test endpoint 2');
    });
  });
});