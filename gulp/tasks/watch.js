import sass from './sass';
import browserify from './browserify';
import nunjucks from './nunjucks';

export default (taskHelpers) => {
    const { gulp, plugins, pump } = taskHelpers;
    const project = taskHelpers.config;    

    return (done) => {
        gulp.watch(`${project.res.sass.dir}**/*.scss`, gulp.series(sass(taskHelpers)));
        gulp.watch(`${project.res.js.devDir}**/*.js`, gulp.series(browserify(taskHelpers)));
        gulp.watch(`${project.res.html.dir}**/*.html`, gulp.series(nunjucks(taskHelpers)));
        done();
    }
}