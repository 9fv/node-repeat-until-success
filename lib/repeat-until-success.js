const Promise = require('bluebird');
const _ = require('lodash');
const isPromise = require('is-promise');
const isLogger = require('is-logger');


/**
 * A default (very) simple logger based on {console} object.
 *
 * @type {object}
 */
const defaultLogger = {debug: console.log, info: console.log, warn: console.warn, error: console.log};

/**
 * Repeat a task until it succeeds.
 *
 * @class
 * @public
 */
class RepeatTaskUntilSuccess {

  /**
   *
   *
   * @param task {Function} - The task to run must be a function returning a promise (or an async function).
   * @param args {array} - Arguments to pass when calling function.
   * @constructor
   */
  constructor(task, args = []) {
    this._task = task;
    this._args = args;
    this._delay = 0;
    this._timeout = null;
    this._logger = null;
  }

  /**
   * Set a logger.
   *  * If provided value is null, no logging processed.
   *  * If provided value is a string equals to 'default', use the default logger based on console.
   *
   * @param logger {null|string|object} - The logger.
   * @returns {RepeatTaskUntilSuccess}
   */
  logger(logger) {
    if (!logger) {
      return this;
    } else if (_.isString(logger) && logger === 'default') {
      this._logger = defaultLogger;
    } else {
      if (isLogger(logger, {throwOnFalse: true}) === true) {
        this._logger = logger;
      }
    }
    return this;
  }

  /**
   * Set a delay between each runnning (expressed in milliseconds).
   *
   * @param delay
   * @returns {RepeatTaskUntilSuccess}
   */
  delay(delay) {
    if (!delay) {
      return this;
    }
    if (_.isInteger(delay) === false) {
      throw new TypeError('Delay must be an integer');
    }
    this._delay = delay;
    return this;
  }

  /**
   * Set a timeout after which the process stops (expressed in milliseconds).
   *
   * @param timeout
   * @returns {RepeatTaskUntilSuccess}
   */
  timeout(timeout) {
    if (!timeout) {
      return this;
    }
    if (_.isInteger(timeout) === false) {
      throw new TypeError('Timeout must be an integer');
    }
    this._timeout = timeout;
    return this;
  }

  /**
   * Run the task then repeat while it succeeds or timeout is reached.
   *
   * @returns {Promise}
   */
  run() {
    let p = this._task.call(null, this._args);
    if (isPromise(p) === false) {
      throw new TypeError('Function must be a promise');
    }
    p = p.then((value) => {
      if (this._logger) {
        this._logger.info(`Task succeed: ${value}`);
      }
      return Promise.resolve(value);
    }).catch((err) => {
      if (this._logger) {
        this._logger.error(`Task failed: ${err}`);
      }

      let result;
      if (this._delay) {
        result = Promise.delay(this._delay);
      }
      result = result.then(() => {
          return this.run();
        });
      return result;
    });
    return p;
  }
}


/**
 * Repeat a promise function until it succeeds.
 *
 * @param fn {Function} - The function to repeat.
 * @param delay {number} - Delay (expressed in milliseconds) between each running.
 * @returns {RepeatTaskUntilSuccess} - An instance of {RepeatTaskUntilSuccess}.
 * @public
 */
function repeatUntilSuccessFactory(task, args = []) {
  return new RepeatTaskUntilSuccess(task, args);
}

/**
 * Exports class and factory.
 *
 * @type {{RepeatTaskUntilSuccess: RepeatTaskUntilSuccess, repeatUntilSuccess: repeatUntilSuccessFactory}}
 * @public
 */
module.exports = {
  RepeatTaskUntilSuccess: RepeatTaskUntilSuccess,
  repeatUntilSuccess: repeatUntilSuccessFactory,
}
