const mongooose = require('mongoose');
// -----------connection to mongodb-------------------//
mongooose.connect('mongodb+srv://bhupander17440:<password>@cluster0.biz9oc0.mongodb.net/?retryWrites=true&w=majority');

// ---------------establish connection---------------//
const db = mongooose.connection;

db.on('error', console.error.bind(console, "Error connecting to DB"));
// ----------if db is connected --------------//
db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;