const router = require('express').Router();
const userController = require('../../controllers/userController');
const withAuth = require('../../utils/auth');
const { UserModel } = require("../../models");

// URL PATH /api/user/

// Create New User, Set Session loggedIn: true
router.route('/register')
    .post(userController.register)

//login checks user credentials
router.route('/login')
    .post(userController.login)

router.route('/logout')
    .post(userController.logout)    

router.route('/current-session')
    .get(userController.currentSession)



module.exports = router;