export default function (taskHelpers, options = {}) {
    const { gulp, plugins, pump } = taskHelpers;
    const project = taskHelpers.config;

    console.log(project.res.js.devDir);
    return (done) => {
        pump([
            gulp.src(`${project.res.js.devDir}/*.js`),
            plugins.uglify(),
            gulp.dest(project.res.js.dir),
        ]);
        done();
    }

}