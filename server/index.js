const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'myschema'
});



app.get('/', (req, res) => {
    db.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Inception', 'Good Movie')";
        db.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});

