const CONFIG = {
  PROJECT_NAME: 'Workspace',       // Project name     
  LANGUAGE: 'ru',                  // Project language

  DEVELOPMENT_DIR: 'dev',          // Development
  RESOURSES_DIR: 'res',            // Resourses
  TEMPLATES_DIR: 'templates',      // HTML Templates
  PARTIALS_DIR: 'partials',        // HTML Partials
  PAGES_DIR: 'pages',              // HTML Compiled pages        

  JS_DIR: 'js',                    // JS Dir
  JS_DEV_DIR: 'js-dev',            // JS Development dir
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

function getTask(task, options) {
  // console.log(task.replace(/\:.*/,''));
  const subTask = task.substring(task.indexOf(':') + 1);
  console.log(subTask, 'as');
  return require(`./gulp/tasks/${task}`.replace(/\:.*/,'')).default(taskHelpers, options).subTask;
}

gulp.task('clean', gulp.parallel(getTask('clean:js')));

// gulp.task('default', gulp.parallel(getTask('nunjucks')));
// gulp.task('uglify', gulp.series(getTask('uglify')));

