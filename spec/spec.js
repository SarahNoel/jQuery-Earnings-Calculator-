var code = require('../js/oop.js');
Bill = require('../js/oop.js');

var meal;

describe('Bill', function() {

  beforeEach(function() {
    meal = new Bill(100, 0.07, 0.2);
  });

  describe('total charges: subtotal', function() {
    it('should return meal price plus tax rate', function() {
      expect(meal.subtotal()).toEqual("107.00");
    });
  });

  describe('total charges: tip amount', function() {
    it('should return tip amount', function() {
      expect(meal.tipTotal()).toEqual("20.00");
    });
  });

}); // end describe Bill function


