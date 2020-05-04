const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const userSchema =new mongoose.Schema({

    name: String,
    sex: String,
    age: Number,
    phone: { type: String, unique: true },
    email: { type: String, unique: true },

});

// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);

const User=mongoose.model('User',userSchema);

module.exports=User;