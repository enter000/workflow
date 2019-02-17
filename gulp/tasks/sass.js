export default (taskHelpers) => {
    const { gulp, plugins, pump } = taskHelpers;
    const project = taskHelpers.config;
    
    console.log(plugins, 'plugins sass');

    const sass = plugins.sass;
    // plugins.sass.compiler = require('node-sass');
    sass.compiler = require('node-sass');

    console.log(project.res.sass.compDir);

    return (done) => {
        pump([
            gulp.src('*.{scss,sass,css}', { cwd: project.res.sass.dir }),
            // plugins.sass().on('error', sass.logError),
            sass({
                sourceMap: true,
                outputStyle: 'expanded',
                precision: 2,
                includePaths: [project.res.sass.compDir],
            }).on('error', sass.logError),            
            gulp.dest(project.res.css.dir)
        ]);
        done();
    }
}