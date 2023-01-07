const path = require('path');  

const controller = {

    home: (req, res) => {

        // res.sendFile(path.join(__dirname, '../views/home.html'));
        res.render('home')
    },

    descriptionPage: (req, res) => {
    
        // res.sendFile(path.join(__dirname, '../views/DescriptionPage.html'));
        res.render('DescriptionPage')
    },
    
    cart: (req, res) => {
    
        // res.sendFile(path.join(__dirname, '../views/cart.html'));
        res.render('cart')
    },

    register: (req, res) => {

        // res.sendFile(path.join(__dirname, '../views/register.html'));
        res.render('register')
     },

    login: (req, res) => {

        // res.sendFile(path.join(__dirname, '../views/login.html'));
        res.render('login')
     }

}

module.exports = controller;