// [SECTION] Dependencies and Modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// Google Login
// const passport = require('passport');
// const session = require('express-session');
// require('./passport');
			
// [SECTION] Environment Setup
// const port = 4000;
require('dotenv').config();


//[SECTION] Routes
const userRoutes = require("./routes/user");
//[SECTION] Activity: Allows access to routes defined within our application
const courseRoutes = require("./routes/course");
const newsRoutes = require("./routes/news");
const enrollmentRoutes = require("./routes/enrollment");

// [SECTION] Server Setup
const app = express();

app.use(express.json());


const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,
    optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));


// [Section] Google Login
// Creates a session with the given data
// resave prevents the session from overwriting the secret while the session is active
// saveUninitialized prevents the data from storing data in the session while the data has not yet been initialized
// app.use(session({
//     secret: process.env.clientSecret,
//     resave: false,
//     saveUninitialized: false
// }));
// Initializes the passport package when the application runs
// app.use(passport.initialize());
// Creates a session using the passport package
// app.use(passport.session());


//[SECTION] Database Connection 
//courseBookingAPI - no data
//booking-KT - with data
mongoose.connect(process.env.MONGODB_STRING, {
    useNewUrlParser: true, //both can be omitted since this will be deprecated in the next version
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));


//[SECTION] Backend Routes 
//http://localhost:4000/users
app.use("/users", userRoutes);
//[SECTION] Activity: Add course routes
app.use("/courses", courseRoutes);
app.use("/news", newsRoutes);
app.use("/enrollments", enrollmentRoutes);

// [SECTION] Server Gateway Response
if(require.main === module){
    app.listen(process.env.PORT || 3000, () => {
        console.log(`API is now online on port ${ process.env.PORT || 3000 }`)
    });
}

module.exports = { app, mongoose };