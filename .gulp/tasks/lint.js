const gulp = require('gulp');
const g = require('gulp-load-plugins')({lazy: true});
const path = require('path');

const SETTINGS = require('../settings.json');

/**
 * Lint source.
 *
 * @param p {string} - Path and pattern.
 * @returns {void|*}
 */
function lint(p) {
  return () => {
    gulp.src(p).pipe(g.eslint())
      .pipe(g.eslint.format())
      .pipe(g.eslint.failOnError());
  };
}

/**
 * Gulp task to lint source.
 */
gulp.task('lint-source', lint(path.join(SETTINGS.sources.pattern, SETTINGS.sources.pattern)));


/**
 * Gulp task to lint test.
 */
gulp.task('lint-test', lint(path.join(SETTINGS.tests.pattern, SETTINGS.tests.pattern)));

/**
 * Gulp task to lint gulp tasks ;-)
 */
gulp.task('lint-gulp-tasks', lint(path.join(SETTINGS.gulp.tasks.pattern, SETTINGS.gulp.tasks.pattern)));

/**
 * Gulp task to lint all sources.
 */
gulp.task('lint', ['lint-source', 'lint-test', 'lint-gulp-tasks']);

