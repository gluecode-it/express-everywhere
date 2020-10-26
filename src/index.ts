import { IExpressEverywhereHandler } from './handler';
import { ExpressEverywhereLocalHandler } from './handler/local';

export class ExpressEverywhere {
  constructor(
    private handlerList: IExpressEverywhereHandler[] = [new ExpressEverywhereLocalHandler()],
  ) {}

  getApp(type?: string) {
    const handler = this.handlerList.find(handler => {
      return handler.suits(type);
    });
    if (!handler) {
      throw new Error('no handler found');
    }
    return handler;
  }
}
