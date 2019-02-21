export default (taskHelpers) => {
    const { gulp, plugins, pump } = taskHelpers;
    const project = taskHelpers.config;
    
    const sass = plugins.sass;
    sass.compiler = require('node-sass');

    return (done) => {
        pump([
            gulp.src('*.{scss,sass,css}', { cwd: project.res.sass.dir }),
            // plugins.sass().on('error', sass.logError),
            sass({
                sourceMap: true,
                outputStyle: 'expanded',
                precision: 2,
                includePaths: [project.res.sass.compDir],
                errLogToConsole: true
            }).on('error', sass.logError),            
            gulp.dest(project.res.css.dir)
        ]);
        done();
    }
}