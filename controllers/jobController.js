const User = require('../models/userModel');
const base = require('./baseController');

exports.getAllJobs = base.getAll(User);
exports.getJob = base.getOne(User);