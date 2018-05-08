require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const socket = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 4444;

const app = express();
app.use(bodyParser.json());

// massive_____________________________________
massive(process.env.SERVER_CONNECTION).then(db => {
  app.set('db', db);
});

// session_____________________________________
app.use(bodyParser.json());
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.SECRET_SESSION,
}));




app.listen(PORT, () => console.log(`VR-store is running up on: ${PORT}`))