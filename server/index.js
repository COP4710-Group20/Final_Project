const moment = require('moment');
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
    port: 3306,
    database: 'users_events_db'
});

app.post('/register', (req, res)=>{

  const user_name = req.body.username;
  const password = req.body.password;
  const display_name = req.body.display_name;

  var error = '';
  var resultLength = 0;

  db.query('SELECT * FROM users WHERE user_name = (?)',[user_name], function (err, result) {
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
        db.query("INSERT INTO users (display_name, user_name, pw) VALUES (?,?,?)", 
        [display_name , user_name, password], 
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
  const user_name = req.body.username;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE user_name = ? AND pw = ?",
  [user_name, password],
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
  db.query("SELECT * FROM users WHERE is_participant > 0 ",
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

  });
});
app.get('/adminview', (req, res)=>{//for now it is zero but will be changed to is_admin >=1
  db.query("SELECT * FROM users WHERE is_admin > 0 ",
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
app.post('/singlePart', (req, res)=>{
  const aName = req.body.name;
  //console.log(req.body.name);
  let user_id;
  db.query("SELECT * FROM users WHERE display_name = ?",
  [aName],
  (err, result) => {
    
    //console.log(result);
    user_id = result[0].user_id;
    //console.log(user_id);
    db.query("SELECT * FROM events WHERE user_id = ?",
    [user_id],
    function (err, result) {
      if(err)
      {
        console.log(err);
        res.send({err: err});
      }

      else if(result)
      {
        console.log(result);
        res.send(result);
      }
      else
      {
        res.send({message: "Empty"});
      }

    });
  });

  
});

app.post('/singlePart2', (req, res)=>{
  const uName = req.body.uName;
  //console.log(req.body.name);
  let user_id;
  db.query("SELECT * FROM users WHERE display_name = ?",
  [uName],
  (err, result) => {
    
    //console.log(result);
    user_id = result[0].user_id;
    //console.log(user_id);
    db.query("SELECT * FROM signed_up_participants WHERE user_id = ?",
    [user_id],
    function (err, result) {
      if(err)
      {
        console.log(err);
        res.send({err: err});
      }

      else if(result)
      {
        var eventIDTable = [];
        result.map(event => {
          eventIDTable.push(event.event_id);
        })
        console.log("EVENTIDTABLE")
        console.log(eventIDTable);
        db.query("SELECT * FROM events WHERE event_id IN (?)", [eventIDTable],
          (err, response) => {
            console.log("THIS SHOULD BE MY RESPONSE");
            console.log(response);
            res.send(response);
          }
          
          );

        event_id=result[0].event_id;
        
        //res.send(result);
      }
      else
      {
        res.send({message: "Empty"});
      }
    });
  });

  
});

// list active events
app.post('/listactiveevents', (req, res)=>{
  var today = new Date();

  db.query("SELECT * FROM events WHERE event_end_date >= (?) AND event_start_date <= (?)",
  [moment(today).format("YYYY-MM-DD"), moment(today).format("YYYY-MM-DD")],
  function (err, result) {
    if(err)
    {
      console.log(err);
      res.send({err: err});
    }

    else if(result.length > 0)
    {
      console.log(result);
      res.send(result);
    }
    else
    {
      res.send({message: "There are no active events"});
    }

  });
});

/*
app.post('/viewByCity',(req, res)=>{

  const event_city = req.body.event_city;
  var today = new Date();
  //Moment(today).format("YYYY-NN-DD");
  db.query("SELECT * FROM events WHERE event_city = (?) AND event_end_date >= (?)",
  [event_city, moment(today).format("YYYY-MM-DD")],
  function (err, result) {
    if(err)
    {
      console.log(err);
      res.send({err: err});
    }

    else if(result.length > 0)
    {
      console.log(result);
      res.send(result);
    }
    else
    {
      res.send({message: "There are no events planned in that city."});
    }

  });
});

*/
// list active events
app.get('/viewAllEvents', (req, res)=>{
  db.query("SELECT * FROM events WHERE user_id = 1",
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


app.post('/createEvent', (req, res)=>{

  const user_id = req.body.user_id;
  const event_title = req.body.event_title;
  const event_description = req.body.event_description;
  const event_URL = req.body.event_url;
  const event_start_date = req.body.event_start_date;
  const event_end_date = req.body.event_end_date;
  const event_city = req.body.event_city;
  const event_address = req.body.event_address;

  var start_date = new Date(event_start_date).toISOString().slice(0,10);
  var end_date = new Date(event_end_date).toISOString().slice(0,10);
  var today = new Date().toISOString().slice(0, 10)

  console.log(start_date);
  console.log(end_date);
  console.log(today);
  console.log(user_id);
  if (today >= start_date && today <= end_date)
  {
    var active = 1;
  }
  else
  {
    var active = 0;
  }
  const event_is_active = active;

  // Add description back
  db.query("INSERT INTO events (user_id, event_title, event_description, event_url, event_start_date, event_end_date, event_city, event_address, event_is_active) VALUES (?,?,?,?,?,?,?,?,?)", 
    [user_id,event_title,event_description,event_URL,event_start_date,event_end_date,event_city,event_address,event_is_active], 
    function (err, result ){
      if (err)
      {
        console.log(err);
        res.send({err: err});
      }
      else
      {
        db.query("UPDATE users SET is_admin = 1 WHERE user_id = (?)",
          [user_id],
          function(err, result){
            if(err)
            {
              console.log(err);
              res.send({err:err});
            }
            else
            {
              res.send({message: "Event created successfully"});
            }
          });
      }
    });
});

app.post('/viewByCity',(req, res)=>{

  const event_city = req.body.event_city;
  var today = new Date();
  //Moment(today).format("YYYY-NN-DD");
  db.query("SELECT * FROM events WHERE event_city = (?) AND event_end_date >= (?)",
  [event_city, moment(today).format("YYYY-MM-DD")],
  function (err, result) {
    if(err)
    {
      console.log(err);
      res.send({err: err});
    }

    else if(result.length > 0)
    {
      console.log(result);
      res.send(result);
    }
    else
    {
      res.send({message: "There are no events planned in that city."});
    }

  });
});

app.post('/viewByStartEnd',(req, res)=>{

  const event_start_date = req.body.event_start_date;
  const event_end_date = req.body.event_end_date;

  //Moment(today).format("YYYY-NN-DD");
  db.query("SELECT * FROM events WHERE event_start_date >= (?) AND event_end_date <= (?)",
  [moment(event_start_date).format("YYYY-MM-DD"), moment(event_end_date).format("YYYY-MM-DD")],
  function (err, result) {
    if(err)
    {
      console.log(err);
      res.send({err: err});
    }

    else if(result.length > 0)
    {
      console.log(result);
      res.send(result);
    }
    else
    {
      res.send({message: "There are no events planned during this time."});
    }

  });
});

app.post('/signUp',(req, res)=>{

  const user_id = req.body.user_id;
  const event_id = req.body.event_id;

  //Moment(today).format("YYYY-NN-DD");
  db.query("INSERT INTO signed_up_participants (user_id, event_id) VALUES (?,?)",
  [user_id, event_id],
  function (err, result) {
    if(err)
    {
      console.log(err);
      res.send({err: err});
    }
    else
    {
      db.query("UPDATE users SET is_participant = 1 WHERE user_id = (?)",
          [user_id],
          function(err, result){
            if(err)
            {
              console.log(err);
              res.send({err:err});
            }
            else
            {
              res.send({message: "User is now participating in the event"});
            }
          });
    }
  });
});

// API call for an admin to view all of the events they created
app.post('/viewAllEvents',(req, res)=>{

  const user_id = req.body.user_id

  db.query("SELECT * FROM events WHERE user_id = (?)",
  [user_id],
  function (err, result) {
    if(err)
    {
      console.log(err);
      res.send({err: err});
    }

    else if(result.length > 0)
    {
      console.log(result);
      res.send(result);
    }
    else
    {
      res.send({message: "You have not organized any events."});
    }
  });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});
