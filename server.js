const express = require("express");
const mongoose = require("mongoose");
//define port
const PORT = process.env.PORT || 3000

const app = express();
// set express to be able to use json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// serve public files
app.use(express.static("public"));
// set up mongoose database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
// start app
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});