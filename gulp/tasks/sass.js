import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default (taskHelpers) => {
    const { gulp, plugins, pump } = taskHelpers;
    const project = taskHelpers.config;
    
    const sass = plugins.sass;
    sass.compiler = require('node-sass');

    const postCssPlugins = [
        autoprefixer({
            browsers: ['last 2 versions']
        }),
        cssnano()
    ];

    console.log(plugins);

    return (done) => {
        pump([
            gulp.src('*.{scss,sass,css}', { cwd: project.res.sass.dir }),
            plugins.sourcemaps.init(),
            // plugins.sass().on('error', sass.logError),
            sass({
                sourceMap: true,
                outputStyle: 'expanded',
                precision: 2,
                includePaths: [project.res.sass.compDir],
                errLogToConsole: true
            }).on('error', sass.logError),       
            plugins.postcss(postCssPlugins),
            plugins.sourcemaps.write('./'),
            gulp.dest(project.res.css.dir)
        ]);
        done();
    }
}