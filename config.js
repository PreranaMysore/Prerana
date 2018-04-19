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

for (let i = 0; i < requiredParams.length; i++) {
  if (!_.has(process.env, requiredParams[i])) {
    console.log(
      'Error: environment variables have not been properly setup.',
      'The variable:',
      requiredParams[i],
      'was not found.'
    );

    throw new Error('Prerana Environment Variables Not Properly Set');
  }
}

const dbDetails = {
  apiKey: process.env.PRERANA_API_KEY,
  authDomain: process.env.PRERANA_AUTH_DOMAIN,
  databaseURL: process.env.PRERANA_DATABASE_URL,
  projectId: process.env.PRERANA_PROJECT_ID,
  storageBucket: process.env.PRERANA_STORAGE_BUCKET,
  messagingSenderId: process.env.PRERANA_MESSAGE_SENDER_ID
};

module.exports = {
  appName: 'Prerana',

  port: process.env.PRERANA_PORT,

  mode: process.env.PRERANA_MODE,

  db_details: dbDetails,

  firebase: fb.initializeApp(dbDetails)
};
