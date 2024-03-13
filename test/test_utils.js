var assert = require("assert");
var utils = require("../modules/utils");

describe("utils", function () {
  describe("#sayHello()", function () {
    it('Should return "Good morning!" between 6am and 11am', function () {
      assert.equal(utils.sayHello(6), "Good morning!");
      assert.equal(utils.sayHello(11), "Good morning!");
    });

    it('Should return "Good afternoon!" between 12pm and 4pm', function () {
      assert.equal(utils.sayHello(12), "Good afternoon!");
      assert.equal(utils.sayHello(16), "Good afternoon!");
    });

    it('Should return "Good evening!" between 5pm and 8pm', function () {
      assert.equal(utils.sayHello(17), "Good evening!");
      assert.equal(utils.sayHello(20), "Good evening!");
    });

    it('Should return "Good night!" between 9pm and 5am', function () {
      assert.equal(utils.sayHello(21), "Good night!");
      assert.equal(utils.sayHello(5), "Good night!");
    });
  });
});
