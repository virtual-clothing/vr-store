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
            // res.redirect(`https://munkhtegsh.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost:3000&client_id=${process.env.clientID}`)
    },

    remFromCart: (req, res) =>  {
        const db = req.app.get('db');
        db.remFromCart([req.user, req.params.id]).then(cart => {
            res.status(200).send(cart);
        })
    },

    getAllItems: (req, res) => {
        const db = req.app.get('db');
        db.getAllItems().then(items => {
            res.status(200).send(items);
        })
    },

    getFavorites: (req, res) => {
        const db = req.app.get('db');
        db.getFavorites([req.user]).then(favs => {
            res.status(200).send(favs);
        })
    },

    addToFavorites: (req, res) => {
        const db = req.app.get('db');
        console.log(req.body)
        db.addToFavorites([req.user, req.body.id]).then(favs => {
            res.status(200).send(favs);
        })
    },

    remFromFavorites: (req, res) => {
        const db = req.app.get('db');
        db.remFromFavorites([req.user, req.params.id]).then(favs => {
            res.status(200).send(favs);
        })
    },

    getItemById: (req, res) => {
        const db = req.app.get('db');
        db.getItem(req.query.id).then( item => {
            res.status(200).send(item)
        })
    },

    getItemReviews: (req, res) => {
        const db = req.app.get('db');
        console.log("hit get revews endpoint")
        db.getReviews(req.query.id).then( reviews => {
            res.status(200).send(reviews)
        })
    },

    submitReview: (req, res) => {
        const db = req.app.get('db');
        const {pID, review, name, rating, today} = req.body;
        db.submitReview(pID, review, name, rating, today).then( reviews => {
            res.status(200).send(reviews)
        })
    },

    addToCart: (req, res) => {
        const db = req.app.get('db');
        const {pID} = req.body;
        db.addToCart(pID, req.user).then( cart => {
            res.status(200).send("success")
        })
    }
}