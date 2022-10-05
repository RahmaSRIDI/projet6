const mongoose = require('mongoose');

const SaucesSchema  = mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: String, required: true },
  likes: { type: String },
  dislikes: { type: String },
  usersLiked : {type: Array, "default" : []},
  usersDisliked : {type: Array, "default" : []}
});


module.exports = mongoose.model('Sauce', SaucesSchema );
