require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//import user schema
const User = require('./models/users');


// Connect MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true
}).then(() => {
    console.log('Connection to DB successful');
}).catch(err => {
    console.log(`Connection to DB Error: ${err}`);
});


const app = express();
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// cors
app.use(cors());

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
    res.send('hello world');
});

app.post('/signup', (req, res) => {
    const {fname, lname, email, username, password } = req.body.signUpObj;
    User.findOne({
        username: username,
        email: email
    }).exec((error, user) => {
        if(!user) {
            const newUser = new User({
                fname: fname,
                lname: lname,
                email: email,
                username: username,
                password: password
            });
            newUser.save((error, user) => {
                if(error) {
                    console.log('Could not save user:', error);
                    res.send({error});
                } else {
                    console.log('User inserted into db: ', user);
                    res.send({user});
                }
            });
        } else {
            console.log('ERROR: ', error);
            console.log('User: ', user);
            res.send({
                result: 'user already exists'
            });
        }
    })

});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});