const { betterAuth } = require('better-auth');
const { mongo } = require('better-auth/mongo');
const User = require('./models/User'); // Import your User model

// Connect to MongoDB
const mongoose = require('mongoose');
const { MONGODB_URI } = process.env;

// Connect here - this should be removed if server.js already connects
// mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/orca-community');

const db = mongo({
  client: mongoose.connection.getClient(),
});

module.exports = betterAuth({
  database: db,
  secret: process.env.BETTER_AUTH_SECRET || 'your-super-secret-jwt-key-here',
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  user: {
    // Create hook to save user to our User model when new user is created
    async onCreate(user) {
      try {
        console.log('Better-Auth onCreate hook triggered for user:', user.email);
        // Create a new user in our own User collection
        const newUser = new User({
          name: user.name,
          email: user.email,
          password: user.hashedPassword, // Better-Auth handles the bcrypt hashing
          avatar: user.image || null
        });
        await newUser.save();
        console.log('User saved to custom User model:', newUser.email);
        return user; // Return the original user object
      } catch (error) {
        console.error('Error saving user to our database:', error);
        return user;
      }
    },
    // Update hook to update our User model when user is updated
    async onUpdate(user) {
      try {
        console.log('Better-Auth onUpdate hook triggered for user:', user.email);
        await User.findOneAndUpdate(
          { email: user.email },
          { 
            name: user.name,
            email: user.email,
            avatar: user.image || null,
            updatedAt: new Date()
          }
        );
        return user;
      } catch (error) {
        console.error('Error updating user in our database:', error);
        return user;
      }
    }
  }
});