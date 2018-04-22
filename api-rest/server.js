//Import express and body-parser modules
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.urlDB)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Successfully"});
});

// listen for requests
require('./app/routes/routes.js')(app);
app.listen(dbConfig.port, () => {
    console.log(`Server is listening on port ${dbConfig.port}`);
});