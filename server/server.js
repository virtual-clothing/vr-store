require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 4444;
const {
  domain, clientID, clientSecret, callbackURL, successRedirect, failureRedirect
} = process.env;

const app = express();
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.SECRET_SESSION
}))

app.use(bodyParser.json())

massive(process.env.SERVER_CONNECTION).then(db => {
  console.log('DB is running I__________I')
  app.set('db', db);
});

app.use( passport.initialize() );
app.use( passport.session() );
passport.use( new Auth0Strategy(
  {domain, clientID, clientSecret, callbackURL, successRedirect, failureRedirect},
 function(accessToken, refreshToken, extraParams, profile, done) {
   console.log(profile)
    app.get('db').findUser([profile.id]).then(userInfo => {
      if (!userInfo[0]) {
        app.get('db').createUser([profile.displayName, profile.id, profile.picture, profile._json.gender, profile._json.nickname, profile._json.email ]).then(user => {
          return done(null, user[0].id);
        });
      } else {
        return done(null, userInfo[0].id)
      }
    })
 }
) );

passport.serializeUser( (id, done) => {
  done(null, id);
});

passport.deserializeUser( (id, done) => {
  done(null, id);
});

app.get('/callback', passport.authenticate('auth0', {
  successRedirect,
  failureRedirect
}))

// getUserInfo
app.get('/api/userinfo', (req, res) => {
  const db = req.app.get('db');
  db.getUserInfo([req.user]).then(userInfo => {
    console.log(req.user)
    res.status(200).send(userInfo);
  });
});

// NodeMailer

const smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'vrclothingstore@gmail.com',
    pass: 'virtualstore'
  }
});

app.post('/email', function create(req, res, next) {

  console.log('req', req.body)
  var mail = {
    from: req.body.email,
    to: 'vrclothingstore@gmail.com',
    subject: req.body.subject,
    html: "name: <br/>" + req.body.name + "<br/> Message: <br/>" + req.body.message + "<br/> email <br/>" + req.body.email,
  }

  smtpTransport.sendMail(mail, function(error, response) {
    if(error) {
      console.log('email sending error');
      console.log(error);
    } else {
      console.log('email sent')
    }
    smtpTransport.close();

  });

  res.send(200, req.body);
});


app.listen(PORT, () => console.log(`VR is running on port ${PORT}`)); 