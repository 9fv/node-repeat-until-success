const should = require('should'); // eslint-disable-line no-unused-vars

const bunyan = require('bunyan');

const repeatUntilSuccess = require('../lib/repeat-until-success');


/**
 * Before each unit test.
 */
beforeEach(() => {

  // An function which not returns a promise.
  this.invalidFn = x => x * 2;

  // A function which returns a promise.
  this.fn = (x) => {
    return Promise.resolve(x*2);
  }

  // An invalid logger.
  this.invalidLogger = {log: null};

});


/**
 * Base unit tests.
 */
describe('Unit testing for [Function=repeatUntilSuccess]', () => {
  it('should be a function', () => {
    (repeatUntilSuccess).should.be.a.Function();
  });

  it('should throw an error if the function does not return a promise', () => {
    (() => {
      repeatUntilSuccess(fn=this.invalidFn, args=[2]);
    }).should.throw('Function must be a promise');
  });

  it('should throw an error if delay is not an integer', () => {
    (() => {
      repeatUntilSuccess(fn=this.fn, args=[2], delay='string');
    }).should.throw('Delay must be an integer');
  });

  it('should throw an error if timeout is not an integer', () => {
    (() => {
      repeatUntilSuccess(fn=this.fn, args=[2], delay=5000, timeout='string');
    }).should.throw('Timeout must be an integer');
  });

  it('should throw an error if provided logger is not a logger', () => {
    (() => {
      repeatUntilSuccess(fn=this.fn, args=[2], delay=5000, timeout=-1, logger=this.invalidLogger);
    }).should.throw('Provided logger does not seem a logger');
  });
});
