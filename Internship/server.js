const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const passportConfig = require('./config/passport-config');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/simple-website', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', indexRoutes);
app.use('/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
