const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const useCor = require('../middlewares/cors');

router.get('/login',useCor,userController.login);
router.post('/register',useCor,userController.register);


module.exports= router;