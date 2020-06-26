const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');
const auth = require('../middlewares/auth');
const useCor = require('../middlewares/cors');

router.get('/',useCor,auth,exampleController.viewExample);


module.exports= router;