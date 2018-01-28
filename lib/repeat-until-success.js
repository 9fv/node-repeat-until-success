const Promise = require('any-promise');
const _ = require('lodash');
const isPromise = require('is-promise');
const isLogger = require('is-logger');

/**
 * A default logger based on {console} object.
 *
 * @type {{debug: (message?: any, ...optionalParams: any[]) => void, info: (message?: any, ...optionalParams: any[]) => void, warn: (message?: any, ...optionalParams: any[]) => void, error: (message?: any, ...optionalParams: any[]) => void}}
 */
const defaultLogger = {debug: console.log, info: console.log, warn: console.warn, error: console.log};


/**
 * Repeat a promise function until it succeeds.
 *
 * @param fn {Function} - The function to repeat.
 * @param timeout {number} - Timeout (expressed in milliseconds) between each running.
 * @param logger {object} - A logger.
 * @public
 */
function repeatUntilSuccess(fn, args = [], delay = 3000, timeout = -1, logger = defaultLogger) {
  if (_.isInteger(delay) === false) {
    throw new TypeError('Delay must be an integer');
  }
  if (_.isInteger(timeout) === false) {
    throw new TypeError('Timeout must be an integer');
  }
  if (isLogger(logger) === false) {
    throw new TypeError('Provided logger does not seem a logger');
  }

  const result = fn.call(null, args);
  if (isPromise(result) === false) {
    throw new TypeError('Function must be a promise');
  }

  return result.then((value) => {
    LOG.info('Success!', value);
    return Promise.resolve(value);
  }).catch((err) => {
    LOG.error('Failed!');
    Promise.delay(delay)
      .then(() => {
        return repeatUntilSuccess(fn, args, delay, timeout, logger);
      });
  });
}

module.exports = repeatUntilSuccess;



