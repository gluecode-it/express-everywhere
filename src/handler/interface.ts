import { Express } from 'express';

export interface IExpressEverywhereHandler {
  getApp(): Express;
  suits(type?: string): boolean;
}
