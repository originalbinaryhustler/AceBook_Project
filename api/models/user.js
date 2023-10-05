const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profileURL: {type: String, required: false },
  
});

const User = mongoose.model("User", UserSchema);

//
module.exports = User;
