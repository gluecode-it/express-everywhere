import { ExpressEverywhere } from '.';

describe(ExpressEverywhere.name, () => {
  describe('getApp()', () => {
    it('returns local express if nothing given', () => {
      const handler = new ExpressEverywhere();
      expect(handler.getApp()).toBeDefined();
    });
    it('should throw', () => {
      const handler = new ExpressEverywhere();
      expect(() => handler.getApp('not found')).toThrowError();
    });
  });
});
