const functions = require('firebase-functions');
const createUser = require('./create_user');

// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
})

exports.goodbye = functions.https.onRequest((request, response) => {
  response.send("Goodbye!");
});

exports.createUser = functions.https.onRequest(createUser);
