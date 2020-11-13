import { IExpressEverywhereHandler } from './handler/interface';
import { ExpressEverywhereLocalHandler } from './handler/local';
import { Express } from 'express';
import { Server } from 'http';

export class ExpressEverywhere {
  private app: Express | undefined;
  constructor(
    private handlerList: IExpressEverywhereHandler[] = [new ExpressEverywhereLocalHandler()],
  ) {}

  get handler(): Express {
    if (this.app) return this.app;
    const handler = this.handlerList.find(handler => {
      return handler.suits();
    });
    if (!handler) {
      throw new Error('no handler found');
    }
    this.app = handler.getApp();
    return this.app;
  }

  listen(callback: (server: Server) => void, port = 8080) {
    const server = this.handler.listen(port, () => {
      callback(server);
    });
  }
}
