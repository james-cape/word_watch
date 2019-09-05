var chai = require('chai')
var chaiHttp = require('chai-http');
import { expect } from "chai"

chai.use(chaiHttp);
import sinon from "sinon";
const Browser = require('zombie');
Browser.localhost('localhost', 8080);

describe("Word watch functions", () => {
  describe("Top word and its count", () => {
    it('Main page content', function(done) {
        chai.request('http://localhost:8080').get('/')
        .then(response => {
          expect(response.statusCode).to.equal(200);
          expect(response.text).to.include("Word Watch");
          done();
        });
    });

    describe('User sees button', function() {

      const browser = new Browser();

      describe('button is clicked', function() {
        it('should be successful', function(done) {
          return browser.visit('/');
          done();
          return browser.pressButton('Break down');
          done();
          browser.assert.success();
          done();
        });
      });
    });
  });
})
