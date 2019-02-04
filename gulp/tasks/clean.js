export default (taskHelpers, options) => {
    const { gulp, plugins, pump } = taskHelpers;
    const project = taskHelpers.config;
    
    return {
        js: [
            pump([
                gulp.src(`${project.res.js.dir}/*.js`, { read: false }),
                plugins.clean(),
            ]),
        ]
    }
}