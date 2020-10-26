import { ExpressEverywhereLocalHandler } from './local';

describe(ExpressEverywhereLocalHandler.name, () => {
  describe('suite()', () => {
    it('should return TRUE if type is empty string', () => {
      const handler = new ExpressEverywhereLocalHandler();
      expect(handler.suits('')).toBeTruthy();
    });
    it('should return TRUE if type is "local"', () => {
      const handler = new ExpressEverywhereLocalHandler();
      expect(handler.suits('local')).toBeTruthy();
    });
  });
  describe('getApp()', () => {
    it('should return Express', () => {
      const handler = new ExpressEverywhereLocalHandler();
      expect(handler.getApp()).toBeDefined();
    });
  });
});
