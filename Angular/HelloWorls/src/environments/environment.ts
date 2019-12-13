// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   firebaseConfig : {
    apiKey: "AIzaSyCL2ElBGBeVyMz9_GidafnI_lrtHZeCqgQ",
    authDomain: "projekt-web-f196a.firebaseapp.com",
    databaseURL: "https://projekt-web-f196a.firebaseio.com",
    projectId: "projekt-web-f196a",
    storageBucket: "projekt-web-f196a.appspot.com",
    messagingSenderId: "1081550481149",
    appId: "1:1081550481149:web:7e3720848622ef6c2a0094",
    measurementId: "G-54TNVC9DCG"
  },
  server_url :'http://localhost:3000/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
