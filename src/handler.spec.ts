import { ExpressEverywhere } from './handler';
import { Server } from 'http';

describe(ExpressEverywhere.name, () => {
  describe('handler getter', () => {
    it('returns local express if nothing given', () => {
      const handler = new ExpressEverywhere();
      expect(handler.handler).toBeDefined();
    });
    it('should return existing express handler', () => {
      const handler = new ExpressEverywhere();
      expect(handler.handler).toBeDefined();
      expect(handler.handler).toBeDefined();
    });
    it('should throw', () => {
      const handler = new ExpressEverywhere([]);
      expect(() => handler.handler).toThrowError();
    });
  });
  describe('listen()', () => {
    it('should call callback', done => {
      const handler = new ExpressEverywhere();
      const callback = jest.fn().mockImplementation((server: Server) => {
        server.close();
        done();
      });
      handler.listen(callback);
      expect(callback).toBeDefined();
    });
  });
});
