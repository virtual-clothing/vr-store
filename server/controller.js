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

    remFromCart: (req, res) =>  {
        const db = req.app.get('db');
        db.remFromCart([req.user, req.params.index]).then(cart => {
            res.status(200).send(cart);
        })
    },

    getAllItems: (req, res) => {
        const db = req.app.get('db');
        db.getAllItems().then(items => {
            res.status(200).send(items);
        })
    }
}