const router = require('express').Router();
const userController = require('../../controllers/userController');

// URL PATH /api/user/

// Create New User, Set Session loggedIn: true
router.route('/register')
    .post(userController.register)

// login checks user credentials
router.route('/login')
    .post(userController.login)

router.route('/logout')
    .post(userController.logout)    





module.exports = router;