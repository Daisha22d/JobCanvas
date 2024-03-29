const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema, model } = mongoose;

const userSchema = new Schema({
   firstName: {
        type: String,
        required: true,
        trim: true
    }, 
   lastName: {
        type: String,
        required: true,
        trim: true
    }, 
    gender: {
        type: String,
        required: false
    },
    
  email: {
        type: String,
        required: true,
        unique: true
    },
   password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
    }
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
 
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  

const User = model("User", userSchema);

module.exports = User;