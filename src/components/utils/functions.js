module.exports = {
    user: [],
    colorToggle1: 'Green',
    colorToggle2: 'Green',
    colorToggle3: 'Green',
    colorToggle4: 'Green',
    red: false,
    pink: false,
    xs: false,
    s:  false,
    link: ['/api'],
    total: 100,
    totalWithTax: 10,

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
    },


    toggle: function(name, value) {
        if (name === 'red') {
            this.red = value;
        }
    },

    toggleSize: function(name, value) {
        if (name === 'xs') {
            this.xs = value;
        }
    },

    cartLink(e) {
        this.link.push(e)
    },

    tax(subTotal) {
        this.subTotal *= .06;
        return subTotal;
    },



}


