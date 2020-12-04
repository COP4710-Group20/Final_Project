const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'CrudDB'
});

app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Inception', 'Good Movie');";
    db.query(sqlInsert, (err, result) => {
        res.send("Hello World");
    })
    
});

app.listen(3001, () => {
    console.log("running on port 3001");
});

