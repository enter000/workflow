export default function (taskHelpers) {
    // const { project } = options;
    const { gulp, plugins, pump } = taskHelpers;
    const project = taskHelpers.config;
    
    console.log(taskHelpers.config);


    console.log(project.res.html.templates.pages);
    plugins.nunjucksRender.nunjucks.configure([project.res.html.templates.pages]);
    return (done) => {
        gulp.src(`${project.res.html.templates.partials}/**/*.html`)
            .pipe(plugins.nunjucksRender())
            .pipe(gulp.dest(project.res.html.templates.dir));

        done();
    }
}