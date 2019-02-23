const CONFIG = {
  PROJECT_NAME: 'Workspace',       // Project name     
  LANGUAGE: 'ru',                  // Project language

  DEVELOPMENT_DIR: 'dev',          // Development

  PORT: 3000,                      // Dev Server Port

  RESOURSES_DIR: 'res',            // Resourses
  COMPONENTS_DIR: 'components',    // Folder in wich files will be stored
  
  HTML_DIR: 'html',                // HTML Templates
  TEMPLATES_DIR: 'templates',      // HTML Partials
  PAGES_DIR: 'pages',              // HTML Compiled pages        

  JS_DIR: 'js',                    // JS Dir
  JS_DEV_DIR: 'js-dev',            // Js Development dir

  SASS_DIR: 'sass',                // Sass Dir
  CSS_DIR: 'css',                  // Compiled Css Dir
};

import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import gulp_config from './gulp/config/gulp-config';
import pump from 'pump';

const taskHelpers = {
  gulp,
  config: gulp_config(CONFIG),
  plugins: plugins(),
  pump,
}


function getTask(task) {
  return require(`./gulp/tasks/${task}`).default(taskHelpers);
}

// gulp.task('clean', gulp.parallel(getTask('clean')));

gulp.task('default', gulp.parallel(getTask('nunjucks')));
// gulp.task('uglify', gulp.series(getTask('clean'), getTask('uglify')));
gulp.task('sass', gulp.series(getTask('sass')));
gulp.task('connect', gulp.series(getTask('connect')));
// gulp.task('browserify', gulp.parallel(getTask('browserify')));
gulp.task('watch', gulp.parallel(getTask('connect'), getTask('watch')));

