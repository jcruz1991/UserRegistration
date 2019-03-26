const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

const UsersSchema = new Schema({
    fname: String,
    lname: String,
    email: String,
    username: String,
    password: String
});

UsersSchema.pre('save', function(next) {
    let user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) {
        return next();
    }

    //generate a salt
    bcrypt.genSalt(10, (error, salt) => {
        if(error) {
            console.log(error);
            return next(error);
        }

        user.password = salt;
        next();
    });

});

module.exports = mongoose.model('Users', UsersSchema);