const express = require("express")
const router = express.Router()
const loginController = require('../controller/login')


router.post("/register", loginController.getRegister);

router.post("/login", loginController.getLogin);



module.exports = router;