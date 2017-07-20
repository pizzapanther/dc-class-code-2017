var expect = require('chai').expect;
var MyMath = require('../mymath');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('return -1 when value is not present', function() {
      expect(-1).to.equal([1,2,3].indexOf(4));
    });
    it('return index when value ispresent', function() {
      expect(0).to.equal([1,2,3].indexOf(1));
    });
  });
});

describe('MyMath Module', function() {
  it('add returns 4', function () {
    var ans = MyMath.add(2, 2);
    expect(ans).to.equal(4);
    ans = MyMath.add(2, 3);
    expect(ans).to.equal(5);
  });
});