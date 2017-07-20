var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var app = require('../app');

describe('Express App', function() {
  describe('Hompage', function() {
    it('contains hello world  & number 4', function() {
      chai.request(app.app)
        .get('/')
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.text).to.include('Hello World');
          expect(res.text).to.include('4')
        });
    });
  });
});