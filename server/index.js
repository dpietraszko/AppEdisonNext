const express = require("express");
// const mysql = require("mysql");
const mysql = require('mysql2');
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  // user: "dpietraszko",
  // host: "10.56.123.153",
  // password: "WXd1@qrjg#y4igAF",
  // database: "liczniki",
  user: "root",
  host: "localhost",
  password: "",
  database: "liczniki",
});

db.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected MySQL!");  
});

app.post("/register", (req, res) => {

  const id = req.body.id;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const age = req.body.age;
  const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO users (id, firstName, lastName, age, email, phone, password) VALUES (?,?,?,?,?,?,?)",
      [id, firstName, lastName, age, email, phone, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const id = req.body.id;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE id = ?;",
    id,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong id/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Running Server");
});