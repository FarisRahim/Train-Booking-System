// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment: { production: boolean, endpoint: string; firebaseConfig: any } = {
  production: false,
  endpoint: '/data',
  firebaseConfig: {
    apiKey: "AIzaSyCHrbm43TTJlPZqfaROmdJXVAOIEgE_M7M",
    authDomain: "mymymy-4eea8.firebaseapp.com",
    databaseURL: "https://mymymy-4eea8.firebaseio.com",
    projectId: "mymymy-4eea8",
    storageBucket: "",
    messagingSenderId: "1078657874420"
  },
};
