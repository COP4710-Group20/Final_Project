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
    port: 3300,
    database: 'users_events_db'
});

app.post('/register', (req, res)=>{

  const display_name = req.body.username;
  const password = req.body.password;

  var error = '';
  var resultLength = 0;

  db.query('SELECT * FROM users WHERE display_name = (?)',[display_name], function (err, result) {
    if (!err)
    {
      console.log(result.length);
      resultLength = result.length;
      if (resultLength > 0)
      {
        error = "The user name you have entered is already linked to an account.";
        var ret = { error: error };
        res.send(ret);
      }
      else
      {
        // A real user name will be added when the field is added to registration
        db.query("INSERT INTO users (display_name, user_name, pw) VALUES (?,'harry',?)", 
        [display_name, password], 
        function (err, result ){
          console.log(err);
        });
      }
    }
    else
    {
      console.log(err);
    }
  });

});

app.post('/login', (req, res)=>{
  const display_name = req.body.username;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE display_name = ? AND pw = ?",
  [display_name, password],
  (err, result) => {
    if(err) 
    {
      console.log(err);
      res.send({err: err});
    } 
    
    if(result.length > 0) 
    {
      console.log(result);
      res.send(result);
    } 
    else 
    {
      console.log("Bad credentials :/");
      res.send({message: "Wrong display_name/password combination"});
    }
      
  });
});
app.get('/participant', (req, res)=>{//for now it is zero but will be changed to is_participant >=1
  db.query("SELECT display_name FROM users WHERE is_participant = 0 ",
  [display_name, is_participant],
  function (err, result) {
    if(err)
    {
      console.log(err);
      res.send({err: err});
    }

    else if(result)
    {
      //console.log(result);
      res.send(result);
    }
    else
    {
      res.send({message: "Empty"});
    }

  });
});
app.get('/adminview', (req, res)=>{//for now it is zero but will be changed to is_admin >=1
  db.query("SELECT display_name FROM users WHERE is_admin = 0 ",
  [display_name, is_admin],
  function (err, result) {
    if(err)
    {
      console.log(err);
      res.send({err: err});
    }

    else if(result)
    {
      //console.log(result);
      res.send(result);
    }
    else
    {
      res.send({message: "Empty"});
    }

  });
});
app.listen(3001, () => {
    console.log("running on port 3001");
});

