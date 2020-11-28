var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var user = new Schema({
    username: String ,
    pass: String,
    email: String,
    uid: String,
});

module.exports = mongoose.model('Users',user);