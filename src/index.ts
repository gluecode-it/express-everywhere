import { Express } from 'express';

export default class ServerlessWrapper {
  static isRunningStandalone() {
    return !!process.env.STANDALONE;
  }

  static getStandaloneVersion(): Express {
    const express = require('express');
    return express();
  }

  static getServerlessVersion(): Express {
    const express = require('serverless-express/express');
    return express();
  }

  static init(): { app: Express, standalone: boolean } {
    let app: Express;
    const standalone = this.isRunningStandalone();
    if (!this.isRunningStandalone()) {
      app = this.getServerlessVersion();
    } else {
      app = this.getStandaloneVersion();
    }
    return {
      app,
      standalone
    };
  }
}
