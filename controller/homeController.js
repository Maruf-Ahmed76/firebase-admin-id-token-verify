const firebaseApp = require('../model/firebaseConfig')

firebaseApp.appInit();


module.exports.verifyToken_get = (req,res) => {
    res.render('index');
}

module.exports.verifyToken_post = (req,res) => {
    let {token} = req.body;

    firebaseApp.admin.auth().verifyIdToken(token)
    .then(decodedId => res.json({uId : decodedId.uid}))
    .catch(err => res.json({err : err.message}))
    
}