const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Users
const authRoute = require('./routes/users/auth');
const mealsRoute = require('./routes/nutrition/meals');
const snacksRoute = require('./routes/nutrition/snacks');
const nutritionDayRoute = require('./routes/nutrition/nutritionDay');

dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT,
    { 
        useUnifiedTopology: true, 
        useNewUrlParser: true 
    }, () => {
        console.log('Connected to DB');
});

// Json Parser
app.use(express.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    const allowedOrigins = ['http://localhost:4200', 'https://mb-track-gym.netlify.app', 'https://trackgym.co.uk', 'https://www.trackgym.co.uk'];

    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
         res.setHeader('Access-Control-Allow-Origin', origin);
    }

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Route Middlewears
app.use('/api/users', authRoute);
app.use('/api/meals', mealsRoute);
app.use('/api/snacks', snacksRoute);
app.use('/api/nutrition-day', nutritionDayRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running');
});