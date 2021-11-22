const axios = require('axios').default;
var db = require("../server");
const validator = require("validator");
const bcrypt = require("bcryptjs");

var user = {

  signUp: async (req, callback) => {

    let username = req.body.username
    let email = req.body.email
    let password = req.body.password
    password = await bcrypt.hash(password, 12);

    stringQuery = "INSERT INTO `user` (`username`,`email`,`password`) VALUES (?,?,?);";
    return db.server.query(stringQuery, [username, email, password], callback);
    
  },

  userByUsername: async (req, callback) => {
    let username = req.body.username
    stringQuery = "SELECT id, username, password FROM user a WHERE a.username = ?";
    return db.server.query(stringQuery, [username], callback);
    
  },

  comparePassword: async (typedPassword, originalPassword) => {
    return await bcrypt.compare(typedPassword, originalPassword);
  }


}


module.exports = user;

