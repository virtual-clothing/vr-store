module.exports = {
    user: [],
    colorToggle1: 'Green',
    colorToggle2: 'Green',
    colorToggle3: 'Green',
    colorToggle4: 'Green',

    handleChange: function(prop){
        if(prop === 'username'){
            this.colorToggle1 = 'Red'
        }else if(prop === 'address'){
            this.colorToggle2 = 'Red'
        }else if(prop === 'phoneNumber'){
            this.colorToggle3 = 'Red'
        }else if(prop === 'email'){
            this.colorToggle4 = 'Red'
        }
    }
}