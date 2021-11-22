const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const authController = require('./../controllers/authController');


router.post('/login', authController.login);
router.post('/signup', authController.signup);

router
    .route('/job')
    .get(jobController.getAllJobs);


router
    .route('/job/:id')
    .get(jobController.getJob)

module.exports = router;