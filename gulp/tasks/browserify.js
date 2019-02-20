import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import glob from 'glob';
import merge from 'merge-stream';
import path from 'path';

export default (taskHelpers) => {

    const { gulp, plugins, pump } = taskHelpers;
    const project = taskHelpers.config;

    // const browserifyInstance = browserify({
    //     entries: `${project.res.js.devDir}scripts.js`,
    //     paths: project.res.js.compDir,
    //     debug: true
    // });


    // https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-uglify-sourcemap.md
    // return (done) => {
    //     browserifyInstance
    //         .bundle()
    //         .pipe(buffer())
    //         .pipe(plugins.sourcemaps.init({
    //             loadMaps: true,
    //         }))
    //         .pipe(plugins.uglify())
    //         .on('error', plugins.gulplog.error)
    //         .pipe(plugins.sourcemaps.write('./'))
    //         .pipe(gulp.dest(project.res.js.dir));
    //         done();
    //     }

    return () => {
        const files = glob.sync(`${project.res.js.devDir}*.js`);
        console.log(files);
        return merge(files.map((file) => {
            console.log(file, 'file');

            return browserify({
                entries: file,
                // entries: `${project.res.js.devDir}`,
                // basedir: project.res.js.devDir,
                paths: [ project.res.js.compDir ],
            })
            .transform(babelify, {
                presets: [ '@babel/preset-env' ]
            })
            .bundle()
            .pipe(source(path.basename(file)))
            .pipe(gulp.dest(project.res.js.dir))
            .pipe(plugins.rename({
                extname: '.min.js'
            }))
            .pipe(buffer())
            .pipe(plugins.sourcemaps.init({
                loadMaps: true
            }))
            .pipe(plugins.uglify())
            .pipe(plugins.sourcemaps.write('./'))
            .pipe(gulp.dest(project.res.js.dir));
        }));
    }
}