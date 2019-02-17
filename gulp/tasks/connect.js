export default (taskHelpers) => {
    const { gulp, plugins, pump } = taskHelpers;
    const project = taskHelpers.config;

    return (done) => {
        plugins.connect.server({
            root: project.res.dir,
            port: project.port,
        }),
        done();
    }
}