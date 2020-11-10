var admin = require('firebase-admin');
// Firebase config information
var firebaseConfig = {
    apiKey: "AIzaSyAzrOa0saFs1xaUpSTZlyRzvgc7gy-tfC0",
    authDomain: "apitest-7c940.firebaseapp.com",
    databaseURL: "https://apitest-7c940.firebaseio.com",
    projectId: "apitest-7c940",
    storageBucket: "apitest-7c940.appspot.com",
    messagingSenderId: "444170151629",
    appId: "1:444170151629:web:10455a4f6355f099eeab84",
    measurementId: "G-Q9JNTKB4NX"
};
module.exports.appInit = () => {
    // Initialize app
    admin.initializeApp(firebaseConfig);
}

module.exports.admin = admin;