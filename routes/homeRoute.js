let {Router} = require('express')
let homeController = require('../controller/homeController')

let router = Router();

router.get('/', homeController.verifyToken_get);
router.post('/', homeController.verifyToken_post);

module.exports = router;