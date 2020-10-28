import { IExpressEverywhereHandler } from './interface';
import { Express } from 'express';

export class ExpressEverywhereLocalHandler implements IExpressEverywhereHandler {
  suits(type?: string) {
    return type === undefined || ['', 'local'].includes(type);
  }

  getApp(): Express {
    const express = require('express');
    return express();
  }
}
