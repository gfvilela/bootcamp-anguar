// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyChX45Qa8KMZ59cNKpm5jbnK0CSFxjZhlk",
    authDomain: "vnt-shopping-list.firebaseapp.com",
    databaseURL: "https://vnt-shopping-list.firebaseio.com",
    projectId: "vnt-shopping-list",
    storageBucket: "vnt-shopping-list.appspot.com",
    messagingSenderId: "166717872123"
  }
};
