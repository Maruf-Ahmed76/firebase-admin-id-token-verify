const firebaseApp = require('../model/firebaseConfig')

firebaseApp.appInit();


module.exports.verifyToken_get = (req,res) => {
    res.render('index');
}

module.exports.verifyToken_post = (req,res) => {
    let {token} = req.body;

    firebaseApp.admin.auth().verifyIdToken(token)
    .then(decodedId => {
        firebaseApp.admin.auth().getUser(decodedId.uid)
        .then(user => res.json({uId : user.uid, email : user.email}))
        .catch(err => res.json({err : err.message}))
    })
    .catch(err => res.json({err : err.message}))
    
}