export default (config) => {
  return {
    name: config.PROJECT_NAME,
    language: config.LANGUAGE,
    port: config.PORT,
    dir: `${config.DEVELOPMENT_DIR}/`,
    res: {
      dir: `${config.DEVELOPMENT_DIR}/${config.RESOURSES_DIR}/`,
      html: {
        templates: {
          dir: `${config.DEVELOPMENT_DIR}/${config.RESOURSES_DIR}/${config.TEMPLATES_DIR}/`,
          pages: `${config.DEVELOPMENT_DIR}/${config.RESOURSES_DIR}/${config.TEMPLATES_DIR}/${config.PAGES_DIR}/`,
          partials: `${config.DEVELOPMENT_DIR}/${config.RESOURSES_DIR}/${config.TEMPLATES_DIR}/${config.PARTIALS_DIR}/`,
        }
      },
      js: {
        dir: `${config.DEVELOPMENT_DIR}/${config.RESOURSES_DIR}/${config.JS_DIR}/`,
        devDir: `${config.DEVELOPMENT_DIR}/${config.RESOURSES_DIR}/${config.JS_DEV_DIR}/`,
        compDir: `${config.DEVELOPMENT_DIR}/${config.RESOURSES_DIR}/${config.JS_DEV_DIR}/${config.COMPONENTS_DIR}/`,
      },
      sass: {
        dir: `${config.DEVELOPMENT_DIR}/${config.RESOURSES_DIR}/${config.SASS_DIR}/`,
        compDir: `${config.DEVELOPMENT_DIR}/${config.RESOURSES_DIR}/${config.SASS_DIR}/${config.COMPONENTS_DIR}/`,
      },
      css: {
        dir: `${config.DEVELOPMENT_DIR}/${config.RESOURSES_DIR}/${config.CSS_DIR}/`,
      }
    }
  }
};