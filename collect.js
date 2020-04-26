const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
var url  = 'mongodb://localhost:27017/mydb';


MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dBi = db.db('mydb');
    dBi.createCollection('interns', (err, res) => {
        if (err) throw err;
        console.log('Interns collection created!');
        db.close();
    });
});