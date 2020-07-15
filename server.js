const express = require('express');
const mongoose = require('mongoose')
const logger = require("morgan");
// define port
const PORT = process.env.PORT || 3002;
// create express app
const app = express();

// set up morgan
app.use(logger('dev'))

// set express to be able to use json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve public files
app.use(express.static('public'));


// set up mongoose database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// require routes
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// start app
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});