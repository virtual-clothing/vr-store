require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const nodemailer = require('nodemailer');
const Botmaster = require('botmaster');
const SocketioBot = require('botmaster-socket.io');

const app = express();

// Routing for index.html
app.use(express.static(__dirname + '/public')); //added

const bodyParser = require('body-parser')
    , cors = require('cors')
    , stripe = require('stripe')(process.env.SECRET_KEY)

app.use(bodyParser.json());
app.use(cors())

const PORT = process.env.PORT || 4444;
const socket = require('socket.io');
const {
  domain, clientID, clientSecret, callbackURL, successRedirect, failureRedirect
} = process.env;

app.use(bodyParser.json());
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
  //  console.log(profile)
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
    user: process.env.NODE_MAILER_USER,
    pass: process.env.NODE_MAILER_PASSWORD
  }
});

// check if user is logged in
app.get('/checkauth', (req, res) => {
  if(req.user){
      res.status(200).send([true])
      console.log(req.user,"is a user")
  }else{
      res.status(200).send([false])
      console.log("no user")
  }
})

app.post('/email', function create(req, res, next) {

  console.log('req', req.body)
  var mail = {
    from: req.body.email,
    to: process.env.NODE_MAILER_USER,
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


//____________________STRIPE
app.post('/api/payment', function(req, res, next){
  console.log(req.body)
  //convert amount to pennies
  const amountArray = req.body.amount.toString().split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if(amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
    	break;
    } else {
    	pennies.push(amountArray[i])
    }
  }
  const convertedAmt = parseInt(pennies.join(''));

  const charge = stripe.charges.create({
  amount: convertedAmt, // amount in cents, again
  currency: 'usd',
  source: req.body.token.id,
  description: 'Test charge from react app'
}, function(err, charge) {
  
  if (err) return res.sendStatus(500)
    return res.sendStatus(200);
  // if (err && err.type === 'StripeCardError') {
  //   // The card has been declined
  // }
});
});




const io = socket(app.listen(PORT, () => console.log(`VR is running on port ${PORT}`)))

//_______________bot
const botmaster = new Botmaster({io});


const socketioSettings = {
  id: 'SOME_BOT_ID_OF_YOUR_CHOOSING',
  server: botmaster.server, // this is required for socket.io. You can set it to another node server object if you wish to. But in this example, we will use the one created by botmaster under the hood
};

const socketioBot = new SocketioBot(socketioSettings);
botmaster.addBot(socketioBot);

botmaster.use({
  type: 'incoming',
  name: 'my-middleware',
  controller: (bot, update) => {
    return bot.reply(update, 'Hello world!');
  }
});

botmaster.on('error', (bot, err) => { // added
  console.log(err.stack); // added
}); // added
//_______________


io.on('connection', socket => {
  socket.on('emit message', input => {
    console.log('blast');
    socket.emit('BOT') // bot
    io.sockets.emit('generate response', input);
  });
});

