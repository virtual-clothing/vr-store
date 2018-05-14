

module.exports = {

    getUserInfo: (req, res) => {
        const db = req.app.get('db');
        db.getUserInfo([req.user]).then(userInfo => {
            console.log(req.user)
            res.status(200).send(userInfo);
        });
    },

    getUserCart: (req, res) => {
        const db = req.app.get('db');
        db.getUserCart([req.user]).then(cart => {
            res.status(200).send(cart);
        })
    },

    checkAuth: (req, res) => {
        if(req.user){
            res.status(200).send([true])
            console.log(req.user,"is a user")
        }else{
            res.status(200).send([false])
            console.log("no user")
        }
    },

    updateAccount: (req, res) => {
        const {username, address, phoneNumber, email} = req.body;
        const db = req.app.get('db');
        console.log(username, address, phoneNumber, email, req.user, "req.user")
        db.updateAccount(username, address, phoneNumber, email, req.user).then( resp => {
            res.status(200).send(resp)
        })
    },

    logout: (req, res) => {
        console.log('hit logout in server')
            req.logOut();
            res.redirect( process.env.failureRedirect )
            // res.redirect(`https://munkhtegsh.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost:3001&client_id=${process.env.clientID}`)
    }

}