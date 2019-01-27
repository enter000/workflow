import * as fs from 'fs';

export const projectConfig = (config) => ({
  project: {
    name: config.PROJECT_NAME,
    language: config.LANGUAGE,   
  }
});