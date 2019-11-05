export default (taskHelpers) => {
    const { gulp, plugins, pump } = taskHelpers;
    const project = taskHelpers.config;

    return (done) => {
        pump([
            gulp.src(`${project.res.js.dir}/*.js`, { read: false }),
            plugins.clean(),
        ]);
        done();
    }
}
