import { IExpressEverywhereHandler } from './handler/interface';
import { ExpressEverywhereLocalHandler } from './handler/local';
import { Express } from 'express';
import { Server } from 'http';

export class ExpressEverywhere {
  constructor(
    private handlerList: IExpressEverywhereHandler[] = [new ExpressEverywhereLocalHandler()],
  ) {}

  private getApp(type?: string): Express {
    const handler = this.handlerList.find(handler => {
      return handler.suits(type);
    });
    if (!handler) {
      throw new Error('no handler found');
    }
    return handler.getApp();
  }

  get handler() {
    return this.getApp();
  }

  listen(callback: (server: Server) => void, port = 8080) {
    const server = this.getApp().listen(port, () => {
      callback(server);
    });
  }
}
