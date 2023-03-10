const fs = require('fs')

const User = {
    fileName: './data/users.json',

    getdata: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    create: function (userData){

    },
}
console.log(User.getdata())