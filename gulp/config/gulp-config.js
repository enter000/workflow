import * as fs from 'fs';

export default (config) => {
  return {
    name: config.PROJECT_NAME,
    language: config.LANGUAGE, 
    res: {
      dir: `${config.DEVELOPMENT_DIR}/${config.RESOURSES_DIR}`,
      html: {
        templates: {
          dir: `${config.DEVELOPMENT_DIR}/${config.RESOURSES_DIR}/${config.TEMPLATES_DIR}`,
          pages: `${config.DEVELOPMENT_DIR}/${config.RESOURSES_DIR}/${config.TEMPLATES_DIR}/${config.PAGES_DIR}`,
          partials: `${config.DEVELOPMENT_DIR}/${config.RESOURSES_DIR}/${config.TEMPLATES_DIR}/${config.PARTIALS_DIR}`,
        }
      },
      js: {
        dir: `${config.DEVELOPMENT_DIR}/${config.RESOURSES_DIR}/${config.JS_DIR}`,
        devDir: `${config.DEVELOPMENT_DIR}/${config.RESOURSES_DIR}/${config.JS_DEV_DIR}`,
      }
    }
  }
};