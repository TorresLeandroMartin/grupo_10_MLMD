const path = require('path');  

const controller = {

    home: (req, res) => {

        res.sendFile(path.join(__dirname, '../views/home.html'));
    
    },

    descriptionPage: (req, res) => {
    
        res.sendFile(path.join(__dirname, '../views/DescriptionPage.html'));
        
    },
    
    cart: (req, res) => {
    
        res.sendFile(path.join(__dirname, '../views/cart.html'));
        
    },

    register: (req, res) => {

        res.sendFile(path.join(__dirname, '../views/register.html'));
     
     },

    login: (req, res) => {

        res.sendFile(path.join(__dirname, '../views/login.html'));
     
     }

}

module.exports = controller;