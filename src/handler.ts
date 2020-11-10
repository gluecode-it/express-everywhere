import { IExpressEverywhereHandler } from './handler/interface';
import { ExpressEverywhereLocalHandler } from './handler/local';
import { Express } from 'express';

export class ExpressEverywhere {
  constructor(
    private handlerList: IExpressEverywhereHandler[] = [new ExpressEverywhereLocalHandler()],
  ) {}

  getApp(type?: string): Express {
    const handler = this.handlerList.find(handler => {
      return handler.suits(type);
    });
    if (!handler) {
      throw new Error('no handler found');
    }
    return handler.getApp();
  }
}
