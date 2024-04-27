// math.test.js

const { add, subtract } = require('./math');

describe('Math functions', () => {
  describe('add', () => {
    it('should add two numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should return 0 when adding two zeros', () => {
      expect(add(0, 0)).toBe(0);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers correctly', () => {
      expect(subtract(5, 32)).toBe(2);
    });

    it('should return the same number when subtracting zero', () => {
      expect(subtract(5, 0)).toBe(5);
    });
  });
});
