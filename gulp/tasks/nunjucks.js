import nunjucks from 'nunjucks';

export default function (taskHelpers) {
    const { gulp, plugins, pump } = taskHelpers;
    const project = taskHelpers.config;

    const nunjucks = plugins.nunjucksRender;

    // console.log(project.res.html.pages);
    // console.log(project.res.html.templates);
    // console.log(project.res.dir);

    return (done) => {
        pump([
            gulp.src('**/*.html', { cwd: project.res.html.pages }),
            nunjucks({
                path: project.res.html.templates,
            }),
            gulp.dest(project.res.dir)
        ]);
        done();
    }
}