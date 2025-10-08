const mongoose = require('mongoose');

// User Schema for MongoDB
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String, // This will be the hashed password
    required: function() {
      // Password is not required if the user signed up with OAuth
      return !this.oauthProvider;
    }
  },
  oauthProvider: {
    type: String, // 'google', 'github', etc.
    required: false,
  },
  oauthId: {
    type: String, // The ID from the OAuth provider
    required: false,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update 'updatedAt' field before saving
userSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;