import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

export default (taskHelpers) => {

    const { gulp, plugins, pump } = taskHelpers;
    const project = taskHelpers.config;

    console.log(project.res.js.compDir);
    // https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-uglify-sourcemap.md
    return (done) => {
        pump([
            browserify({
                files: `${project.res.js.devDir}*.js`,
                options: {
                    // entries: `${project.res.js.devDir}`,
                    // basedir: project.res.js.devDir,
                    paths: project.res.js.compDir
                }
            })
            .transform(babelify, {
                presets: ['"@babel/preset-env']
            })
            .bundle(),
            source(project.res.js.devDir),
            plugins.rename({
                extname: '.min.js'
            }),
            buffer(),
            plugins.sourcemaps.init({
                loadMaps: true
            }),
            plugins.uglify(),
            plugins.sourcemaps.write(project.res.js.devDir),
            gulp.dest(project.res.js.dir)
        ]);
        done();
    }
}