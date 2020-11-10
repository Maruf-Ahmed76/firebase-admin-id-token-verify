var admin = require('firebase-admin');
var serviceAccount = require('../key/serviceAccountKey.json');

module.exports.appInit = () => {
    // Initialize app
    admin.initializeApp({
        credential : admin.credential.cert(serviceAccount),
        databaseURL: 'https://apitest-7c940.firebaseio.com'
    });
}

module.exports.admin = admin;