require('dotenv').config({silent: true});
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const nodemailer = require('nodemailer');
// const Botmaster = require('botmaster');
// const SocketioBot = require('botmaster-socket.io');
var watson = require('watson-developer-cloud'); // watson sdk


const controller = require('./controller');
const app = express();

// Routing for index.html
app.use(express.static(__dirname + '/public')); 

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

// End Points___________________________________
app.get('/api/userinfo', controller.getUserInfo);
app.get('/cart', controller.getUserCart);
app.delete('/cart/:id', controller.remFromCart);
app.put('/addcart', controller.addCartQuantity);
app.put('/remcart', controller.remCartQuantity);
app.get('/api/all', controller.getAllItems);
app.get('/favorites', controller.getFavorites);
app.post('/favorites', controller.addToFavorites);
app.delete('/favorites/:id', controller.remFromFavorites);

// check if user is logged in
app.get('/checkauth', controller.checkAuth);
// update users account
app.put('/updateaccount', controller.updateAccount);
// user logout
app.get('/logout', controller.logout)
//get item for item view
app.get('/getItemById', controller.getItemById)
//get reviews
app.get('/itemReviews', controller.getItemReviews)
//submit review
app.post('/submitreview', controller.submitReview)

//add to cart
app.post('/cart', controller.addToCart)


// NodeMailer
const smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.NODE_MAILER_USER,
    pass: process.env.NODE_MAILER_PASSWORD
  }
});


// NODE MAILER

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
  // console.log(req.body)
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

// ___________________________BOT
io.on('connection', socket => {
  console.log('user connect')
  let context = {};
  socket.on('emit message', input => {
    // Prompt for the next round of input.
      service.message({
        workspace_id: workspace_id,
        input: { text: input},
        context: context
      }, processResponse)
    
  });

  service.message({
    workspace_id: workspace_id
  }, processResponse);

  function processResponse(err, response) {
    if (err) {
      console.error(err); // something went wrong
      return;
    }
    context = response.context;
  
    if (response.intents.length > 0) {
      console.log('Detected intent: #' + response.intents[0].intent);
    }
  
    // Display the output from dialog, if any.
    if (response.output.text.length != 0) {
        console.log(response.output.text[0]);
    }
    socket.emit('generate response', response.output.text[0]);
  }
});

var AssistantV1 = require('watson-developer-cloud/assistant/v1');
// Set up Assistant service wrapper.
var service = new AssistantV1({
  username: process.env.WATSON_USERNAME, 
  password: process.env.WATSON_PASSWORD, 
  version: '2018-02-16'
});

var workspace_id = process.env.WORKSPACE_ID; 

