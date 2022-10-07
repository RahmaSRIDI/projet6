const mongoose = require('mongoose');
// Model de données User
const UserSchema  = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});


module.exports = mongoose.model('User', UserSchema );