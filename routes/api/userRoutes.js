const router = require('express').Router();
const userController = require('../../controllers/userController');
const withAuth = require('../../utils/auth');
const { UserModel } = require("../../models");

// URL PATH /api/user/

// Create New User, Set Session loggedIn: true
router.route('/register')
    .post(userController.register)


// router.post("/register", async (req, res) => {
    
//     try {
       
//         const user = await UserModel.create(req.body)
//         const userData = await user.save();
//         req.session.save(() => {
//             req.session.userId = userData.id;
//             req.session.loggedIn = true;
//             res.status(200).json(userData);
//             console.log("session Info", req.session)
//         });
//         // res.status(200).json(userData);
//     } catch (err) {
//         res.status(400).json(err);
//     }  
// });

//login checks user credentials
router.route('/login')
    .post(userController.login)

router.route('/logout')
    .post(userController.logout)    





module.exports = router;