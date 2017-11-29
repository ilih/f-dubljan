// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const BASE_API_URL = 'http://localhost:4000/api/';

export const environment = {
  production: false,
  UPLOADS: 'http://localhost:4000/uploads/',
  ADD_NEW_PROJECT: BASE_API_URL + 'projects',
  EDIT_PROJECT: BASE_API_URL + 'projects/id',
  SEND_EMAIL: BASE_API_URL + 'email',
  SEND_NUMBER: BASE_API_URL + 'number',
  GOOGLE_MAPS_KEY: 'AIzaSyBWOpnO69Fdu3P7fy04T4t6mCMK4GnW3xA',
  COMPANY_LAT: 49.846759,
  COMPANY_LNG: 24.039932
};
