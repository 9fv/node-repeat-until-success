const should = require('should'); // eslint-disable-line no-unused-vars

const bunyan = require('bunyan');

const repeatUntilSuccess = require('../lib/repeat-until-success');


/**
 * Before each unit test.
 */
beforeEach(() => {

  this.i = 0;

  // An function which not returns a promise.
  this.invalidFn = x => x * 2;

  // A function which returns a promise.
  this.simpleFn = (x) => {
    return Promise.resolve(x*2);
  }

  this.fn = () => {
    setTimeout(() => {
      this.i += 1;
    }, 1000);
    if (this.i < 5) {
      return Promise.reject('Task is not finished!');
    } else {
      return Promise.resolve('Task is finished!');
    }
  };

  // An invalid logger.
  this.invalidLogger = {log: null};

});


/**
 * Base unit tests.
 */
describe('Base unit testing for [Function=repeatUntilSuccess]', () => {
  it('should be a function', () => {
    (repeatUntilSuccess).should.be.a.Function();
  });

  it('should throw an error if the function does not return a promise', () => {
    (() => {
      repeatUntilSuccess(this.invalidFn, args=[2]);
    }).should.throw('Function must be a promise');
  });

  it('should throw an error if delay is not an integer', () => {
    (() => {
      repeatUntilSuccess(this.simpleFn, args=[2], delay='string');
    }).should.throw('Delay must be an integer');
  });

  it('should throw an error if timeout is not an integer', () => {
    (() => {
      repeatUntilSuccess(this.simpleFn, args=[2], delay=5000, timeout='string');
    }).should.throw('Timeout must be an integer');
  });

  it('should throw an error if provided logger is not a logger', () => {
    (() => {
      repeatUntilSuccess(this.simpleFn, args=[2], delay=5000, timeout=-1, logger=this.invalidLogger);
    }).should.throw('Provided logger does not seem a logger');
  });
});

/**
 * Base unit tests.
 */
describe('Running repeatUntilSuccess', () => {
  it('should be resolved', () => {
      repeatUntilSuccess(this.fn, null, 100, timeout=-1).should.be.resolved();
  });
});