const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount = require('../drive-222ea-firebase-adminsdk-e6gzb-463bb98607.json');


const storage = firebaseStorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName: 'drive-222ea.appspot.com',
    unique: true,
})


const upload = multer({
    storage: storage,
})

module.exports = upload;