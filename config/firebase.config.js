const Firebase = require('firebase-admin');

const serviceAccount = require('../drive-222ea-firebase-adminsdk-e6gzb-463bb98607.json');


const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: 'drive-222ea.appspot.com'
})


module.exports = Firebase;

