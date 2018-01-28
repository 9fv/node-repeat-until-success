const gulp = require('gulp');
const g = require('gulp-load-plugins')({lazy: true});
const path = require('path');
const fs = require('fs-then-native')
const jsdoc2md = require('jsdoc-to-markdown');
const currentGitBranch = require('current-git-branch');


const PACKAGE = require('../../package.json');
const SETTINGS = require('../settings.json');

SETTINGS.github.BRANCH_NAME = currentGitBranch();
SETTINGS.npm.PACKAGE_NAME = PACKAGE.name;


gulp.task('docs-api', () => {
  return fs.readFile('.templates/API.md.hbs', 'utf8')
    .then(content => jsdoc2md.render({
    template: content,
    files: path.join(SETTINGS.sources.path, SETTINGS.sources.pattern),
  }))
    .then(output => fs.writeFile('./docs/API.md', output));
});

gulp.task('docs-readme', () => {
  return gulp.src(path.join(SETTINGS.templates.path, SETTINGS.templates.pattern))
    .pipe(g.mustache(SETTINGS))
    .pipe(g.rename('README.md'))
    .pipe(gulp.dest('./'));
});

gulp.task('docs', ['docs-api', 'docs-readme']);
