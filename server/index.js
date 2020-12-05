const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'myschema'
});

app.post('/register', (req, res)=>{

  const username = req.body.username;
  const password = req.body.password;
  db.query("INSERT INTO users (username, password) VALUES (?,?)", 
  [username, password], 
  (err, result) => {
    console.log(err);
  });
});

// FIRST PRACTICE INSERTION
// db.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Inception', 'Good Movie')";
//   db.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });


app.listen(3001, () => {
    console.log("running on port 3001");
});

