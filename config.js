'use strict';

const _ = require('underscore');
const fb = require("firebase");


const requiredParams = [
  'PRERANA_LOG_PATH',
  'PRERANA_PORT',
  'PRERANA_MODE',
  'PRERANA_API_KEY',
  'PRERANA_AUTH_DOMAIN',
  'PRERANA_DATABASE_URL',
  'PRERANA_PROJECT_ID',
  'PRERANA_STORAGE_BUCKET',
  'PRERANA_MESSAGE_SENDER_ID'
];

/*for (let i = 0; i < requiredParams.length; i++) {
  if (!_.has(process.env, requiredParams[i])) {
    console.log(
      'Error: environment variables have not been properly setup.',
      'The variable:',
      requiredParams[i],
      'was not found.'
    );

    throw new Error('Prerana Environment Variables Not Properly Set');
  }
}*/

const dbDetails = {
  apiKey: "AIzaSyAIl39ZgH8_mh9oT2c8jnvSq9Q7fiFaHzA",
  authDomain: "prerana-9c42d.firebaseapp.com",
  databaseURL: "https://prerana-9c42d.firebaseio.com",
  projectId: "prerana-9c42d",
  storageBucket: "prerana-9c42d.appspot.com",
  messagingSenderId: "235613937046"
};

module.exports = {
  appName: 'Prerana',

  port: "3000",

  mode: "dev",

  db_details: dbDetails,

  firebase: fb.initializeApp(dbDetails)
};
